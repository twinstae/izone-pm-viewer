<script lang="ts">
    import { now_pm } from "../stores/now";
    import {mail_to_tag_dict, onSelectTag, selected_tag, tag_to_mail_dict} from "../stores/tag";

    export let tag: {
        value: string,
        color: string
    };
    export let canDelete = false;
    export let size = "xs";

    export const onDeleteTag = ()=>{
    const tag_set = $tag_to_mail_dict.get(tag);
    tag_set.delete($now_pm.id);
    if (tag_set.size==0){
        $tag_to_mail_dict.delete(tag);
        if(tag == $selected_tag){
            $selected_tag = null;
        }
    }
    
    $tag_to_mail_dict=$tag_to_mail_dict;

    $mail_to_tag_dict.get($now_pm.id).delete(tag)
    $mail_to_tag_dict=$mail_to_tag_dict;
}
</script>

<span
on:click={onSelectTag(tag)}
style="background-color: {tag.color};"
class="
{canDelete
    ? "border-1 mt-1 ml-1 mb-1 p-1 rounded-l "
    : "border-1 m-1 p-1 rounded"}
text-{size} text-gray-500">
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

