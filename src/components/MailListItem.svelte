<script lang="ts">
import Tag from './tags/Tag.svelte';
import TimeStampTag from './tags/TimeStampTag.svelte';
import FavoriteHeart from './FavoriteHeart.svelte';
import MemberTag from './tags/MemberTag.svelte';
import { isDesktop, isMobile, now_pm, show_list } from '../stores/now';
import { mail_to_tag_dict } from '../stores/mail_to_tag_dict';
import MemberProfileImg from './MemberProfileImg.svelte';
import { goto, params } from '@roxi/routify';
import { fade } from 'svelte/transition';
import { all_tag_dict } from '../stores/all_tag_dict';
import { dynamic_dark_border } from '../stores/preferences';
export let pm: Mail;
export let hidden;
export let index;

$: onMailSelected = ()=>{
    console.log("i am here")
    if(pm){
        $now_pm=pm
        $show_list = false;
        $goto("./", { ...$params, showList: $show_list, now_pm: $now_pm.id});
    }
}

$: getTags = pm => {
    if($mail_to_tag_dict.has(pm.id)){
        return Array.from($mail_to_tag_dict.get(pm.id)).map(tag=>{
            return $all_tag_dict.get(tag.value);
        })
    }
    return [];
};
</script>

<li
id="MailItem-{index}"
style="height: {$isDesktop ? '62px' : '84px'};"
class:hidden={hidden}
class="border-b-2 rounded p-1 w-full leading-relaxed {$dynamic_dark_border}">
    {#key pm.id}
    <div in:fade={{ duration: 500 }}>
    {#if pm.member}
        <MemberProfileImg member={pm.member}/>
        <FavoriteHeart pm_id={pm.id} float="left mt-0.5"/>
        <p class="truncate" on:click={onMailSelected} >
            <MemberTag pm={pm}/>
            <TimeStampTag time={pm.time}/>
            {#if $isMobile }<br/>{/if}
            {#each getTags(pm) as tag} <Tag tag={tag}/> {/each}
            {pm.subject}
        </p>
        <p on:click={onMailSelected} class="ml-1 mt-1 text-sm truncate">
            {pm.preview || "..."}
        </p>
    {:else}
        <span class="border-1 rounded bg-white text-white text-lg"></span>
    {/if}
    </div>
    {/key}
</li>
{#if hidden}
{#key pm}
<li class="{$dynamic_dark_border} border-b-2 rounded w-full text-gray-300 truncate "
    style="font-size:10px; height: 20px;"
    in:fade={{ duration: 300}}>
    {#if pm.member}
    <MemberTag pm={pm} size=""/>
    <TimeStampTag time={pm.time} size=""/>
    <strong>{pm.subject}</strong>{" "+pm.preview}
    {/if}
</li>
{/key}
{/if}