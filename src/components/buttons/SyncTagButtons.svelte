<script lang="ts">
import api from "../../api";
import { all_tag_dict, EMPTY_TAG, favorite_tag, member_tags } from "../../stores/all_tag_dict";
import { mail_to_tag_dict } from "../../stores/mail_to_tag_dict";
import { selected_tag_value } from "../../stores/tag";
import { tag_to_mail_dict } from "../../stores/tag_to_mail_dict";
import PinkButton from "./PinkButton.svelte";


const upload_tags = ()=>{
    api.AllTagDict.save($all_tag_dict);
    api.MailTagDict.save($mail_to_tag_dict, $tag_to_mail_dict);
}

const download_tags = () => {
    Promise.all([api.AllTagDict.get(), api.MailTagDict.get()])
    .then((values)=>{
        $selected_tag_value = EMPTY_TAG;

        const temp_tag_value_to_mail_dict = new Map([
            ...$tag_to_mail_dict]
            .map(entry=>[entry[0].value, entry[1]])
        );
        const new_tag_list: TagT[] = values[0];
        const new_tag_set = new Set(new_tag_list.map(t=>t.value));

        const old_entries = [...$all_tag_dict]
            .filter(([tag_value, _])=>new_tag_set.has(tag_value));

        const new_all_tag_dict = new_tag_list.reduce((acc, new_tag)=>{
            if (!acc.has(new_tag.value)){
                acc.set(new_tag.value, new_tag);
            } else {
                const old_tag = acc.get(new_tag.value);
                if (old_tag.color != new_tag.color){
                    old_tag.color = new_tag.color;
                    acc.set(old_tag.value, old_tag);
                }
                // 값도 색도 같으면 그냥 통과
            }
            return acc;
        }, new Map(old_entries))
        all_tag_dict.set(new_all_tag_dict);
        console.log("all_tag_dict 백업 다운로드 완료");

        const data: {
          mail_to_tag_dict: [string, string[]][],
          tag_to_mail_dict: [string, string[]][]
        } = values[1];
        
        let member_dict = ([favorite_tag, ...member_tags]).reduce((acc, tag)=>{
            const new_tag = new_all_tag_dict.get(tag.value);
            const mail_set: Set<string> = temp_tag_value_to_mail_dict.get(tag.value);
            return acc.set(new_tag, mail_set);
        }, new Map())

        const new_data: Map<TagT, Set<string>> = 
            data.tag_to_mail_dict
            .filter(entry=>new_all_tag_dict.has(entry[0]))
            .reduce((acc, entry)=>{
                const tag = new_all_tag_dict.get(entry[0]);
                const mail_set: Set<string> = new Set(entry[1]);
                acc.set(tag, mail_set);
                return acc;
            }, member_dict)

        const check = new_data.has(favorite_tag);
        console.log("데이터 정합성 체크", check ? "통과" : "실패");
        if (check){
            $tag_to_mail_dict = new_data;

            $mail_to_tag_dict = data.mail_to_tag_dict
                .reduce((acc, entry)=>{
                    const mail_id = entry[0];
                    const tag_list = entry[1]
                        .filter(v=>new_all_tag_dict.has(v))
                        .map(value=>new_all_tag_dict.get(value));
                    acc.set(mail_id, new Set(tag_list));
                    return acc;
                }, new Map());
            console.log("mail_tag_dict 백업 다운로드 완료");
        }
    });
};
</script>
<span>태그 동기화 : </span>
<PinkButton id="DownloadTagsButton" onClick={download_tags} strong={true}>가져오기⬇️</PinkButton>
<PinkButton id="UploadTagsButton"   onClick={upload_tags}   strong={true}>올리기⬆️  </PinkButton>
