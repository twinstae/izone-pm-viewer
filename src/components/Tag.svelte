<script lang="ts">
    import { all_tag_dict, EMPTY_TAG } from "../stores/all_tag_dict";
    import { mail_to_tag_dict } from "../stores/mail_to_tag_dict";
    import { tag_to_mail_dict } from "../stores/tag_to_mail_dict";
    import { now_page, now_pm } from "../stores/now";
    import { selected_tag } from "../stores/tag";
import { goto, params } from "@roxi/routify";
    
    export let tag: {
        value: string,
        color: string
    };
    export let canDelete = false;
    export let size = "xs";
    export let onRemove = null;

    $: text_brightness = ( // 어두운 색의 멤버는 검정, 밝은 색은 회색
        tag.value == "강혜원" ||
        tag.value=="장원영" ||
        tag.value=="안유진" ||
        tag.value=="운영팀")
            ? "black"
            : "gray-700";

    $: onDeleteTag = async ()=>{
        const the_tag = $all_tag_dict.get(tag.value);
        await fetch(`/mail-tag-dict/mail/${$now_pm.id}/tag/${the_tag.value}`, {method: 'DELETE'});
        
        $tag_to_mail_dict.get(the_tag).delete($now_pm.id);        
        $tag_to_mail_dict=$tag_to_mail_dict;

        $mail_to_tag_dict.get($now_pm.id).delete(the_tag)
        $mail_to_tag_dict=$mail_to_tag_dict;
    }

    params.subscribe(p=>{
        if (p.tag == null && $selected_tag != EMPTY_TAG) {
            $selected_tag = EMPTY_TAG;
        }
        if(p.tag && $selected_tag.value != p.tag){
            $selected_tag = $all_tag_dict.get(p.tag);
    }});

    const onSelectTag = (tag)=>
    ()=>{
        selected_tag.set(tag);
        $goto("./", {...$params, tag: $selected_tag.value, nowPage:1})
    }
</script>

<span
on:click={onRemove ? onRemove : onSelectTag(tag)}
style="background-color: {tag.color};"
class="
{size=="" ? "p-0.5"
    : tag.color=="#fff" ? "border-2 p-0.5" : "p-1"}
m-1
{canDelete && tag.value!="생일"
    ? "rounded-l border-r-0 pr-2"
    : "rounded"}
text-{size} text-{text_brightness}">
    {#if tag.value=="💖"}
    <img class="{size=="xs" ? "w-4 h-4" : "w-5 h-5"} float-none" src="./img/yellow-star.png" alt="파파고 번역하기"/>
    {:else}
    {tag.value}
    {/if}
</span>

{#if onRemove || canDelete && tag.value!="생일"}
<span
on:click={onRemove ? onRemove : onDeleteTag}
style="background-color: {tag.color};"
class="
{tag.color=="#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1"}
rounded-r
-ml-2 mt-1 mb-1 p-1
text-{size}">X</span>
{/if}

