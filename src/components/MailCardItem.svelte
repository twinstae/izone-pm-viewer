<script lang="ts">
import {image_root} from "../stores/constants";
import Tag from './tags/Tag.svelte';
import TimeStampTag from './tags/TimeStampTag.svelte';
import FavoriteHeart from './FavoriteHeart.svelte';
import MemberTag from './tags/MemberTag.svelte';
import { isDesktop, now_pm, show_list } from '../stores/now';
import { mail_to_tag_dict } from "../stores/mail_to_tag_dict";
import MemberProfileImg from "./MemberProfileImg.svelte";
import { goto, params } from "@roxi/routify";
import { fade } from "svelte/transition";
import { all_tag_dict } from "../stores/all_tag_dict";
import { dynamic_dark_bg, oldNick, wizoneNick } from "../stores/preferences";
import { dateString, date_to_str } from "../stores/date";
import { getContext } from "svelte";
import SyncModal from "./modals/SyncModal.svelte";

export let pm: MailT;
export let index: number;

$: getTags = (pm: MailT) => {
    if($mail_to_tag_dict.has(pm.id)){
        return Array.from($mail_to_tag_dict.get(pm.id))
            .map(tag=>$all_tag_dict.get(tag.value));
    }
    return [];
}

$: onMailSelected = ()=>{
    if(pm){
        $now_pm=pm;
        $show_list = false;
        $goto("./", { ...$params, showList: $show_list, now_pm: $now_pm.id});
    }
}
const today_str = date_to_str(new Date());
const {open} = getContext("simple-modal");
const openModal = ()=>{open(SyncModal)}
$: no_mail = !pm.member && $dateString == today_str;

let timeout: ReturnType<typeof setTimeout>;
$: onTouchDown = ()=>{if (no_mail) timeout = setTimeout(openModal, 300);};
$: onTouchUp = (_: Event)=>{   if (no_mail) clearTimeout(timeout); };

</script>

{#if $isDesktop}
<div
id="MailCard-{index}"
style="width: 276px; height:156px;
{pm.member ? "" : `
background-image: url(${image_root}izone-logo-card.png);
background-repeat: no-repeat;
background-size: contain;
background-position: center;`}"
on:pointerdown={onTouchDown}
on:pointerup={onTouchUp}
class="m-2 p-1
relative overflow-y-auto
{$dynamic_dark_bg("bg-white")}
shadow-md rounded-md">
    {#key pm}
    <div in:fade={{ duration: 500 }} class="leading-relaxed">
    {#if pm.member}
        <FavoriteHeart pm_id={pm.id}/>
        <MemberProfileImg member={pm.member}/>
        <h4 class="text-lg" on:click={onMailSelected}>{pm.subject}</h4>
        <MemberTag member_name={pm.member}/>
        <TimeStampTag time={pm.time} />
        {#each getTags(pm) as tag_item}
            <Tag tag={tag_item} />
        {/each}
    
        <p on:click={onMailSelected} class="text-sm">
            {#if pm.images.length > 0}
                <svg class="w-16 h-16 m-1 float-left rounded">
                    <image width="100%" height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    xlink:href="./{pm.images[0]}"/>
                </svg>
            {/if}
            {pm.preview.slice(0, 45).replace(new RegExp($oldNick, "g"), $wizoneNick)}
        </p>
    {/if}
    </div>
    {/key}
</div>
{:else}
<div
id="MailCard-{index}"
style="height:100px;
{pm.member ? "" : `
background-image: url(${image_root}izone-logo-card.png);
background-repeat: no-repeat;
background-size: contain;
background-position: center;`}"
on:pointerdown={onTouchDown}
on:pointerup={onTouchUp}
class="m-1 p-1 w-full
relative overflow-y-auto
{$dynamic_dark_bg("bg-white")}
shadow-md rounded-md">
    {#key pm}
    <div in:fade={{ duration: 500 }} class="leading-relaxed">
    {#if pm.member}
        {#if pm.images.length > 0}
            <img src="./{pm.images[0]}" alt=""
            class="w-14 m-1 float-left rounded">
        {/if}
        <FavoriteHeart pm_id={pm.id}/>
        <h4 on:click={onMailSelected}>{pm.subject}</h4>
        <MemberTag member_name={pm.member}/>
        <TimeStampTag time={pm.time} />
        {#each getTags(pm) as tag_item}
            <Tag tag={tag_item} />
        {/each}
    
        <p on:click={onMailSelected} class="text-xs mt-1">
            {pm.preview.slice(0, 45)}
        </p>
    {/if}
    </div>
    {/key}
</div>
{/if}
