<script lang="ts">
    import { all_tag_dict } from "../stores/all_tag_dict";
    import { mail_to_tag_dict } from "../stores/mail_to_tag_dict";
    import { tag_to_mail_dict } from "../stores/tag_to_mail_dict";
    import { now_pm } from "../stores/now";
    import { onSelectTag } from "../stores/tag";

    export let tag: {
        value: string,
        color: string
    };
    export let canDelete = false;
    export let size = "xs";

    $: text_brightness = ( // 어두운 색의 멤버는 검정, 밝은 색은 회색
        tag.value == "강혜원" ||
        tag.value=="장원영" ||
        tag.value=="안유진" ||
        tag.value=="운영팀")
            ? "black"
            : "gray-700";

    $: onDeleteTag = ()=>{
        const the_tag = $all_tag_dict.get(tag.value);
        
        $tag_to_mail_dict.get(the_tag).delete($now_pm.id);        
        $tag_to_mail_dict=$tag_to_mail_dict;

        $mail_to_tag_dict.get($now_pm.id).delete(the_tag)
        $mail_to_tag_dict=$mail_to_tag_dict;
    }
</script>

<span
on:click={onSelectTag(tag)}
style="background-color: {tag.color};"
class="
{tag.value=="김민주" ? "border-2 p-0.5" : "p-1"}
{canDelete
    ? "mt-1 ml-1 mb-1 rounded-l "
    : "m-1 rounded"}
text-{size} text-{text_brightness}">
    {tag.value}
</span>

{#if canDelete && tag.value!="생일"}
<span
on:click={onDeleteTag}
style="background-color: {tag.color};"
class="
rounded-r
mt-1 mb-1 p-1
text-{size}"> X</span>
{/if}

