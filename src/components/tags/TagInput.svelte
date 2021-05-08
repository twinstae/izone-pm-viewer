<script lang="ts">
import { tag_input, color_n } from "../../stores/tag";
import { now_pm } from "../../stores/now";
import { member_color_dict } from "../../stores/constants";
import { all_tag_dict } from "../../stores/all_tag_dict";
import { tag_to_mail_dict } from "../../stores/tag_to_mail_dict";
import { mail_to_tag_dict } from "../../stores/mail_to_tag_dict";
import api from "../../api";
import { dynamic_dark_bg, dynamic_dark_border} from "../../stores/preferences";

$: new_tag = {
    value: $tag_input,
    color: member_color_dict[$color_n]
}

const addTag = async ()=>{
    if ($tag_input == ""){
        alert("태그를 입력해주세요.")
        return null;
    }
    let the_tag = new_tag;

    if ($all_tag_dict.has($tag_input)){
        the_tag = $all_tag_dict.get($tag_input);
        console.log(the_tag);
    } else {
        $all_tag_dict.set($tag_input, new_tag)
        $all_tag_dict=$all_tag_dict;
 
        await api.AllTagDict.addTag(new_tag);
    }

    if($tag_to_mail_dict.has(the_tag)){
        $tag_to_mail_dict.get(the_tag).add($now_pm.id);
    } else {
        $tag_to_mail_dict.set(the_tag, new Set([$now_pm.id]));
    }
    $tag_to_mail_dict=$tag_to_mail_dict;

    if ($mail_to_tag_dict.has($now_pm.id)){
        $mail_to_tag_dict.get($now_pm.id).add(the_tag)
    } else {
        $mail_to_tag_dict.set($now_pm.id, new Set([the_tag]));
    }       
    $mail_to_tag_dict=$mail_to_tag_dict;

    $tag_input ="";
    $color_n = ($color_n+1) % 12;

    console.log(the_tag);
    await api.MailTagDict.addTag($now_pm.id, the_tag.value);

    document.activeElement.blur();
}
function onKeyPress(e:KeyboardEvent){
  if(e.code==="Enter") addTag();
}
</script>
<span class="tooltip">
  <input type="text" id="TagInput"
  class="border-2 p-1 rounded w-16 text-xs {$dynamic_dark_bg("bg-white")} {$dynamic_dark_border}"
  placeholder="새 태그"
  bind:value={$tag_input}
  on:keypress={onKeyPress}>
  <span class="tooltiptext">a ("A"dd tag)</span>
</span>

<button id="AddTagButton"
on:click={addTag}
class="text-xs text-black shadow rounded bg-red-400 p-1 m-1">
    추가
</button>
