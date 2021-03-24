<script lang="ts">
import { all_tag_dict, EMPTY_TAG, favorite_tag } from "../stores/all_tag_dict";
import { entries_to_mail_to_tag_dict, mail_to_tag_dict, mail_to_tag_dict_to_json } from "../stores/mail_to_tag_dict";
import { selected_tag } from "../stores/tag";
import { entries_to_tag_to_mail_dict, tag_to_mail_dict, tag_to_mail_dict_to_entries } from "../stores/tag_to_mail_dict";
import PinkButton from "./buttons/PinkButton.svelte";

    
function postBackup(url, data){
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res=>{ console.log(data) })
    .catch((e)=>{
        console.error(url+" 백업에 실패했습니다.");
        console.error(e)
    })
}

const upload_tags = ()=>{
    postBackup("/all-tag-dict/", {
        tag_list: [...$all_tag_dict].map(entry=>entry[1])
    })
    postBackup("/mail-tag-dict/", {
        mail_to_tag_dict: mail_to_tag_dict_to_json($mail_to_tag_dict),
        tag_to_mail_dict: tag_to_mail_dict_to_entries($tag_to_mail_dict)
    })
}

const download_tags = async () => {
    const tag_list: { value: string, color: string }[] = 
        await fetch("/all-tag-dict/")
        .then(res=>res.json()).then(data=>data.tag_list);
    
    const data = await fetch("/mail-tag-dict/").then(res=>res.json())
    
    const tag_to_mail_entries = data.tag_to_mail_dict;
    const mail_to_tag_entrise = data.mail_to_tag_dict;

    $selected_tag = EMPTY_TAG;
    
    $all_tag_dict = tag_list.reduce((acc, tag)=>{
        acc.set(tag.value, tag);
        return acc;
    }, new Map([["💖", favorite_tag]]));
    console.log("all_tag_dict 백업 다운로드 완료");

    $tag_to_mail_dict = entries_to_tag_to_mail_dict(tag_to_mail_entries);
    $mail_to_tag_dict = entries_to_mail_to_tag_dict(mail_to_tag_entrise);
    console.log("mail_tag_dict 백업 다운로드 완료");
};
</script>

<div class="mb-1 flex flex-row">
    <PinkButton id="downloadTagsButton"
    onClick={download_tags}>태그 불러오기⬇️</PinkButton>
    <PinkButton id="uploadTagsButton"
    onClick={upload_tags}>태그 올리기⬆️</PinkButton>
</div>