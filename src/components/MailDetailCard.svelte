<script lang="ts">
import Tag from './tags/Tag.svelte';
import TimeStampTag from './tags/TimeStampTag.svelte';
import TagInput from './tags/TagInput.svelte';
import FavoriteHeart from './FavoriteHeart.svelte';
import MemberTag from './tags/MemberTag.svelte';
import { now_pm, isDesktop, show_list, isMobile, pm_list } from '../stores/now';
import { mail_to_tag_dict } from "../stores/mail_to_tag_dict";
import MemberProfileImg from './MemberProfileImg.svelte';
import { fade } from 'svelte/transition';
import { goto, params } from '@roxi/routify';
import { all_tag_dict } from '../stores/all_tag_dict';
import { dark, dynamic_dark_bg } from '../stores/preferences';
export let show;

params.subscribe(p=>{
    if ($now_pm.id != p.now_pm){
        const new_now_pm = $pm_list.filter(pm=>pm.id == p.now_pm);
        if (new_now_pm.length == 1){
            $now_pm = new_now_pm[0];
        }
    }
})

$: getTags = pm => {
    if($mail_to_tag_dict.has(pm.id)){
        return Array.from($mail_to_tag_dict.get(pm.id))
            .map(tag=> $all_tag_dict.get(tag.value));
    }
    return [];
};

$: now_tags = getTags($now_pm);

$: html_body = $now_pm.images
    .reduce((body, img)=>
        body.replace(
        "{이미지}",
        `<img src="../${img}" style="max-width:100%;display:block;margin-left:auto;margin-right:auto; margin-top:8px;">`
    ).replace(/\n\n/g, "<br/>").replace(/\n/g, "<br/>"), $now_pm.body);

</script>

<div
id="MailDetailCard"
style="max-height: {$isDesktop && show ? "70%" : "90%"}; min-height:300px;"
class="
shadow-2xl rounded-md
{$dynamic_dark_bg("bg-white")}
w-full m-1 p-2
flex flex-col">
    <div
    id="MailDetailCardHeader"
    class="relative w-full leading-loose">
        <FavoriteHeart pm_id={$now_pm.id}/>
        <MemberProfileImg member={$now_pm.member}/>
        <h4 class="text-xl w-4/5">{$now_pm.subject}</h4>
        <MemberTag pm={$now_pm}  size="sm"/>
        <TimeStampTag time={$now_pm.time} size="sm"/>
        <br/>
        {#each now_tags as tag}
            <Tag tag={tag} canDelete={true} size="sm"/>
        {/each}
        <TagInput/>    
    </div>
    <div
    id="MailDetailCardContent"
    class="h-5/6 overflow-y-auto p-1">
        {#key $now_pm}
            <div
            class="leading-relaxed"
            in:fade={{ duration: 300 }}
            contenteditable=false
            bind:innerHTML={html_body}>
            </div>
        {/key}
    </div>
    {#if $isMobile}
        <button
        class="shadow rounded p-1 mt-2 {$dark ? "bg-gray-900 text-gray-300" : "bg-red-100"}"
        on:click={()=>{
            $show_list=true;
            $goto("./", { ...$params, showList: true});
        }}>
            목록으로 돌아가기🗃️
        </button>
    {/if}
</div>