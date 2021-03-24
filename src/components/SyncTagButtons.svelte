<script lang="ts">
import api from "../api";
import { all_tag_dict, EMPTY_TAG } from "../stores/all_tag_dict";
import { mail_to_tag_dict } from "../stores/mail_to_tag_dict";
import { selected_tag } from "../stores/tag";
import { tag_to_mail_dict } from "../stores/tag_to_mail_dict";
import PinkButton from "./buttons/PinkButton.svelte";


const upload_tags = ()=>{
    api.AllTagDict.save($all_tag_dict);
    api.MailTagDict.save($mail_to_tag_dict, $tag_to_mail_dict);
}

const download_tags = async () => {
    $selected_tag = EMPTY_TAG;

    $all_tag_dict = await api.AllTagDict.get();
    console.log("all_tag_dict 백업 다운로드 완료");

    const data = await api.MailTagDict.get();
    console.log(data);
    $tag_to_mail_dict = data.tag_to_mail_dict;
    $mail_to_tag_dict = data.mail_to_tag_dict;
    console.log("mail_tag_dict 백업 다운로드 완료");
};
</script>

<div class="mb-1 flex flex-row">
    <PinkButton id="downloadTagsButton" onClick={download_tags}>태그 불러오기⬇️</PinkButton>
    <PinkButton id="uploadTagsButton"   onClick={upload_tags}>  태그 올리기⬆️  </PinkButton>
</div>