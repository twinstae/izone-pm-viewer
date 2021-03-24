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

export let pm: Mail;
export let index;

$: getTags = (pm) => {
    if($mail_to_tag_dict.has(pm.id)){
        return Array.from($mail_to_tag_dict.get(pm.id))
            .map(tag=>$all_tag_dict.get(tag.value));
    }
    return [];
}

$: onMailSelected = ()=>{
    if(pm){
        $now_pm=pm;
        $show_list = $isDesktop || false;
        $goto("./", { ...$params, showList: $show_list, now_pm: $now_pm.id});
    }
}

</script>

<div
id="MailCard-{index}"
style="width: 264px; height:156px"
class="m-3 p-2
relative overflow-y-auto
bg-white shadow-md rounded-md">
    {#key pm}
    <div in:fade={{ duration: 500 }} class="leading-relaxed">
    {#if pm.member}
        <FavoriteHeart pm={pm}/>
        <MemberProfileImg pm={pm}/>
        <h4 class="text-lg" on:click={onMailSelected}>{pm.subject}</h4>
        <MemberTag pm={pm}/>
        <TimeStampTag time={pm.time} />
        {#each getTags(pm) as tag_item}
            <Tag tag={tag_item} />
        {/each}
    
        <p on:click={onMailSelected} class="text-sm">
            {pm.preview}
        </p>
    {:else}
        <img class="ml-5 m-3 w-10/12"
        alt="no mail" src="{image_root}izone-logo-card.png"/>
    {/if}
    </div>
    {/key}
</div>