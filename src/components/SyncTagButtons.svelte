<script lang="ts">
import api from "../api";
import { all_tag_dict, EMPTY_TAG, member_tags } from "../stores/all_tag_dict";
import { mail_to_tag_dict } from "../stores/mail_to_tag_dict";
import { selected_tag_value } from "../stores/tag";
import { tag_to_mail_dict } from "../stores/tag_to_mail_dict";
import PinkButton from "./buttons/PinkButton.svelte";


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
        
        $all_tag_dict = values[0];
        console.log("all_tag_dict 백업 다운로드 완료");

        const data = values[1];
        
        let member_dict = member_tags.reduce((acc, tag)=>{
            const new_tag = $all_tag_dict.get(tag.value);
            const mail_set: Set<string> = temp_tag_value_to_mail_dict.get(tag.value);
            return acc.set(new_tag, mail_set);
        }, new Map())

        const new_data: Map<Tag, Set<string>> = 
            data.tag_to_mail_dict
            .filter(entry=>$all_tag_dict.has(entry[0]))
            .reduce((acc, entry)=>{
                const tag = $all_tag_dict.get(entry[0]);
                const mail_set: Set<string> = new Set(entry[1]);
                acc.set(tag, mail_set);
                return acc;
            }, member_dict)

        const favorite_tag = $all_tag_dict.get("💖");
        const check = new_data.has(favorite_tag);
        console.log("데이터 정합성 체크", check ? "통과" : "실패");
        if (check){
            $tag_to_mail_dict = new_data;

            $mail_to_tag_dict = data.mail_to_tag_dict
                .reduce((acc, entry)=>{
                    const mail_id = entry[0];
                    const tag_list = entry[1]
                        .filter(v=>$all_tag_dict.has(v))
                        .map(value=>$all_tag_dict.get(value));
                    acc.set(mail_id, new Set(tag_list));
                    return acc;
                }, new Map());
            console.log("mail_tag_dict 백업 다운로드 완료");
        }
    });
};

</script>
<div class="mb-1 flex flex-row">
    <PinkButton id="DownloadTagsButton" onClick={download_tags}>태그 불러오기⬇️</PinkButton>
    <PinkButton id="UploadTagsButton"   onClick={upload_tags}>  태그 올리기⬆️  </PinkButton>
</div>