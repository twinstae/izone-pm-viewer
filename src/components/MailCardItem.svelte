<script lang="ts">
import {image_root} from "../stores/constants";
import Tag from './tags/Tag.svelte';
import TimeStampTag from './tags/TimeStampTag.svelte';
import FavoriteHeart from './FavoriteHeart.svelte';
import MemberTag from './tags/MemberTag.svelte';
import { isDesktop, now_pm, show_list } from '../stores/now';
import { mail_to_tag_dict } from "../stores/mail_to_tag_dict";
import { is_unread } from "../stores/tag_to_mail_dict";
import MemberProfileImg from "./MemberProfileImg.svelte";
import { goto, params } from "@roxi/routify";
import { fade } from "svelte/transition";
import { all_tag_dict } from "../stores/all_tag_dict";
import { dark, dynamic_dark_bg, replaceWizone } from "../stores/preferences";
import { SERVER_ROOT } from "../api";

export let pm: MailT;
export let index: number;

$: getTags = (pm: MailT) => {
    if($mail_to_tag_dict.has(pm.id)){
        return Array.from($mail_to_tag_dict.get(pm.id))
            .filter(tag=>tag.value != "읽지 않음")
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

</script>
<style>
  div.EmptyCard {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  div.Unread::before {
    content: "●";
    color: #f06d9c;
    position: absolute;
    top: -1px;
    text-shadow: 1px 1px 5px gray;
  }
  div.MailCard {
    width: 276px;
    height:156px;
  }
  
  @keyframes blink {
    0% {transform: none;}
    100% {transform: scale(0.99, 0.99);}
  }

  .selected {
    animation: blink 1s linear infinite alternate;
  }
</style>


{#if $isDesktop}
<div
  id="MailCard-{index}"
  style="{!pm.member ? `background-image: url(${image_root}izone-logo-card.png);`:''}"
  class:EmptyCard={!pm.member}
  class:Unread={$is_unread(pm.id)}
  class="MailCard
         m-2 p-1
         relative overflow-y-auto
         {$dynamic_dark_bg('bg-white')}
         {pm.id == $now_pm.id ? 'selected border-2 ' + ($dark ? 'border-gray-500' : 'border-red-200') : ''}
         shadow-md rounded-md"
  on:click={onMailSelected}>
    {#key pm.id}
    <div in:fade={{ duration: 500 }} class="leading-relaxed blur">
    {#if pm.member}
        <FavoriteHeart pm_id={pm.id}/>
        <MemberProfileImg member={pm.member}/>
        <h4 class="text-lg"> {pm.subject}</h4>
        <MemberTag member_name={pm.member}/>
        <TimeStampTag time={pm.time} />
        {#each getTags(pm) as tag_item}
            <Tag tag={tag_item} />
        {/each}
    
        <p class="text-sm">
            {#if pm.images.length > 0}
                <svg class="w-16 h-16 m-1 float-left rounded">
                    <image width="100%" height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    xlink:href="{SERVER_ROOT}/{pm.images[0]}"/>
                </svg>
            {/if}
            {$replaceWizone(pm.preview.slice(0, 45))}
        </p>
    {/if}
    </div>
    {/key}
</div>
{:else}
<div
  id="MailCard-{index}"
  style="height:100px;"
  class:EmptyCard={!pm.member}
  class:Unread={$is_unread(pm.id)}
  class="m-1 p-1 w-full relative overflow-y-auto blur
          {pm.id == $now_pm.id ? 'border-2 ' + ($dark ? 'border-gray-500' : 'border-red-200') : ''}
          {$dynamic_dark_bg('bg-white')}
          shadow-md rounded-md">
    {#key pm.id}
    <div in:fade={{ duration: 500 }} class="leading-relaxed">
    {#if pm.member}
        {#if pm.images.length > 0}
          <img src="{SERVER_ROOT}/{pm.images[0]}" alt=""
            class="w-14 m-1 float-left rounded">
        {/if}
        <FavoriteHeart pm_id={pm.id}/>
        <h4 on:click={onMailSelected}>{pm.subject}</h4>
        <MemberTag member_name={pm.member}/>
        <TimeStampTag time={pm.time} />
        {#each getTags(pm) as tag_item}
            <Tag tag={tag_item} />
        {/each}
    
        <p class="text-xs mt-1" on:click={onMailSelected}>
            {pm.preview.slice(0, 45)}
        </p>
    {/if}
    </div>
    {/key}
</div>
{/if}
