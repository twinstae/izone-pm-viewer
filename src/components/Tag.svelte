<script lang="ts">
    import { now_pm } from "../stores/now";
    import {all_tag_dict, mail_to_tag_dict, mail_to_tag_dict_to_json, onSelectTag, selected_tag, tag_to_mail_dict, tag_to_mail_dict_to_json} from "../stores/tag";

    export let tag: {
        value: string,
        color: string
    };
    export let canDelete = false;
    export let size = "xs";

    $: if (!tag){
        tag={value:"", color:"white"}
    }

    $: text_brightness = ( // 어두운 색의 멤버는 검정, 밝은 색은 회색
        tag.value == "강혜원" ||
        tag.value=="장원영" ||
        tag.value=="안유진" ||
        tag.value=="운영팀")
            ? "black"
            : "gray-700";

    export const onDeleteTag = ()=>{
        const the_tag = $all_tag_dict.get(tag.value);
        const tag_set = $tag_to_mail_dict.get(the_tag);
        tag_set.delete($now_pm.id);

        if (tag_set.size==0){
            $tag_to_mail_dict.delete(the_tag);
            if(tag == $selected_tag){
                $selected_tag = null;
            }
        }
        
        $tag_to_mail_dict=$tag_to_mail_dict;
        localStorage.setItem("tag_to_mail_dict", tag_to_mail_dict_to_json($tag_to_mail_dict));

        $mail_to_tag_dict.get($now_pm.id).delete(the_tag)
        $mail_to_tag_dict=$mail_to_tag_dict;
        localStorage.setItem("mail_to_tag_dict", mail_to_tag_dict_to_json($mail_to_tag_dict));

    }
</script>

<span
on:click={onSelectTag(tag)}
style="background-color: {tag.color};"
class="
{canDelete
    ? "border-1 mt-1 ml-1 mb-1 p-1 rounded-l "
    : "border-1 m-1 p-1 rounded"}
text-{size} text-{text_brightness}">
    {tag.value}
</span>

{#if canDelete}
<span
on:click={onDeleteTag}
style="background-color: {tag.color};"
class="
rounded-r
mt-1 mb-1 p-1
text-{size}"> X</span>
{/if}

