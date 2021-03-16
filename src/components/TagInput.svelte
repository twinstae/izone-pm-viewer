<script lang="ts">
import { tag_input, tag_to_mail_dict, mail_to_tag_dict, color_n } from "../stores/tag";
import { now_pm } from "../stores/now";
import { member_color_dict } from "../pages/door/_constants";

$: new_tag = {
    value: $tag_input,
    color: member_color_dict[$color_n]
}

const onAddTag = e=>{
    if(e.code==="Enter"){
        if ($tag_to_mail_dict.has(new_tag)){
            $tag_to_mail_dict.get(new_tag).add($now_pm.id);
        } else {
            $tag_to_mail_dict.set(new_tag, new Set([$now_pm.id]));
        }
        $tag_to_mail_dict=$tag_to_mail_dict;

        if ($mail_to_tag_dict.has($now_pm.id)){
            $mail_to_tag_dict.get($now_pm.id).add(new_tag)
        } else {
            $mail_to_tag_dict.set($now_pm.id, new Set([new_tag]));
        }       
        $mail_to_tag_dict=$mail_to_tag_dict;

        $tag_input ="";
        $color_n = ($color_n+1) % 12;
    }
}
</script>

<input type="text"
class="
border-2 border-gray
m-1 p-1
rounded w-16
text-xs"
placeholder="새 태그"
bind:value={$tag_input}
on:keypress={onAddTag}>