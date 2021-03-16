<script lang="ts">
import { tag_input, tag_to_mail_dict, mail_to_tag_dict } from "../stores/tag";
import { now_pm } from "../stores/now";

const onAddTag = e=>{
    if(e.code==="Enter"){
        if ($tag_to_mail_dict.has($tag_input)){
            $tag_to_mail_dict.get($tag_input).add($now_pm.id);
        } else {
            $tag_to_mail_dict.set($tag_input, new Set([$now_pm.id]));
        }
        $tag_to_mail_dict=$tag_to_mail_dict;

        if ($mail_to_tag_dict.has($now_pm.id)){
            $mail_to_tag_dict.get($now_pm.id).add($tag_input)
        } else {
            $mail_to_tag_dict.set($now_pm.id, new Set([$tag_input]));
        }       
        $mail_to_tag_dict=$mail_to_tag_dict;

        $tag_input ="";
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