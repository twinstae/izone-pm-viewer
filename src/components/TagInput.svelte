<script lang="ts">
import { tag_input, tag_to_mail_dict, mail_to_tag_dict, color_n, all_tag_dict, tag_to_mail_dict_to_json, dict_to_json, mail_to_tag_dict_to_json } from "../stores/tag";
import { now_pm } from "../stores/now";
import { member_color_dict } from "../stores/constants";

$: new_tag = {
    value: $tag_input,
    color: member_color_dict[$color_n]
}

const onAddTag = e=>{
    if(e.code==="Enter"){
        let the_tag = new_tag;
        if ($all_tag_dict.has($tag_input)){
            the_tag = $all_tag_dict.get($tag_input)
            $tag_to_mail_dict.get(the_tag).add($now_pm.id);
        } else {
            $tag_to_mail_dict.set(new_tag, new Set([$now_pm.id]));
            $all_tag_dict.set($tag_input, new_tag)
        }
        $tag_to_mail_dict=$tag_to_mail_dict;
        $all_tag_dict=$all_tag_dict;
        localStorage.setItem("tag_to_mail_dict", tag_to_mail_dict_to_json($tag_to_mail_dict));
        localStorage.setItem("all_tag_dict", dict_to_json($all_tag_dict));

        if ($mail_to_tag_dict.has($now_pm.id)){
            $mail_to_tag_dict.get($now_pm.id).add(the_tag)
        } else {
            $mail_to_tag_dict.set($now_pm.id, new Set([the_tag]));
        }       
        $mail_to_tag_dict=$mail_to_tag_dict;
        localStorage.setItem("mail_to_tag_dict", mail_to_tag_dict_to_json($mail_to_tag_dict));

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