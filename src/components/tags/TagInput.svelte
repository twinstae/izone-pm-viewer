<script lang="ts">
import { tag_input, color_n } from "../../stores/tag";
import { now_pm } from "../../stores/now";
import { member_color_dict } from "../../stores/constants";
import { all_tag_dict } from "../../stores/all_tag_dict";
import { tag_to_mail_dict } from "../../stores/tag_to_mail_dict";
import { mail_to_tag_dict } from "../../stores/mail_to_tag_dict";
import api from "../../api";
import { ping } from "../../stores/preferences";

$: new_tag = {
    value: $tag_input,
    color: member_color_dict[$color_n]
}

const addTag = async ()=>{
    let the_tag = new_tag;

    if ($all_tag_dict.has($tag_input)){
        the_tag = $all_tag_dict.get($tag_input)
        $tag_to_mail_dict.get(the_tag).add($now_pm.id);
    } else {
        $tag_to_mail_dict.set(new_tag, new Set([$now_pm.id]));
        $all_tag_dict.set($tag_input, new_tag)
        $all_tag_dict=$all_tag_dict;

        if($ping){
            await api.AllTagDict.addTag(new_tag);
        }
    }
    $tag_to_mail_dict=$tag_to_mail_dict;

    if ($mail_to_tag_dict.has($now_pm.id)){
        $mail_to_tag_dict.get($now_pm.id).add(the_tag)
    } else {
        $mail_to_tag_dict.set($now_pm.id, new Set([the_tag]));
    }       
    $mail_to_tag_dict=$mail_to_tag_dict;
    if($ping){
        await api.MailTagDict.addTag($now_pm.id, the_tag.value);
    }

    $tag_input ="";
    $color_n = ($color_n+1) % 12;
}

</script>

<input type="text" id="TagInput"
class="border-2 border-gray p-1 rounded w-16 text-xs"
placeholder="새 태그"
bind:value={$tag_input}
on:keypress={e=>{if(e.code==="Enter")addTag();}}>

<button id="AddTagButton"
on:click={addTag}
class="text-xs shadow rounded bg-red-400 p-1 m-1">
    추가
</button>