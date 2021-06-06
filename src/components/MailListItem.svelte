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
import { dark, dynamic_dark_border, replaceWizone } from '../stores/preferences';
import { is_unread } from '../stores/tag_to_mail_dict';
import { image_root } from '../stores/constants';

export let pm: MailT;
export let hidden: boolean;
export let index: number;

$: onMailSelected = ()=>{
    if(pm && pm.member){
        $now_pm=pm
        $show_list = false;
        $goto("./", { ...$params, showList: $show_list, now_pm: $now_pm.id});
    }
}

$: getTags = (pm: MailT) => {
    if($mail_to_tag_dict.has(pm.id)){
        return Array.from($mail_to_tag_dict.get(pm.id))
        .filter(tag => tag.value != "읽지 않음")
        .map(tag=>{
            return $all_tag_dict.get(tag.value);
        })
    }
    return [];
};


$: processed_preview = $replaceWizone(pm.body || "")
    .replace(/<\/p>/g, ' ')
    .replace(/<br>/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace('&lt;', '<').replace('&lt', '<')
    .replace('&gt;','>').replace('&gt','>')
    .replace(/&nbsp;/g, "")
    .replace(/&amp;/g, "&")
    .replace(/\{이미지\}/g, '')
    .slice(0, 50)

</script>

<style>
  li.Unread::before {
    content: "●";
    color: #f06d9c;
    position: absolute;
    margin-top: -8px;
    text-shadow: 1px 1px 5px gray;
  }
</style>

<li
  id="MailItem-{index}"
  style="height: 62px;"
  class:hidden={hidden}
  class:Unread={$is_unread(pm.id)}
  class="rounded p-1 w-full leading-relaxed blur
         {pm.id == $now_pm.id
           ? 'border-2 ' + ($dark ? 'border-gray-500' : 'border-red-200')
           : 'border-b-2 ' + $dynamic_dark_border}"
  on:click={onMailSelected} >

    {#key pm.id}
    <div in:fade={{ duration: 500 }}>
      {#if pm.member}
        <MemberProfileImg member={pm.member}/>
        <FavoriteHeart pm_id={pm.id} float="left mt-0.5"/>
        <p class="truncate">
            <MemberTag member_name={pm.member}/>
            <TimeStampTag time={pm.time}/>
            {#each getTags(pm) as tag} <Tag tag={tag}/> {/each}
            <br/>
            <span class="font-semibold">{pm.subject}</span>
            <span class="text-sm text-gray-400">{processed_preview || "..."}</span>
        </p>
      {:else}
        <img class="h-14 ml-auto mr-auto block"
          src="{image_root}/izone-logo-card.png" alt="empty">
      {/if}
    </div>
    {/key}
</li>

{#if hidden}
{#key pm}
<li class="{$dynamic_dark_border} border-b-2 rounded w-full text-gray-300 truncate p-0.5"
    style="font-size:10px; height: 20px;"
    in:fade={{ duration: 300}}>
    {#if pm.member}
    <MemberTag member_name={pm.member} size=""/>
    <TimeStampTag time={pm.time} size=""/>
    <strong>{pm.subject}</strong>{" "+pm.preview}
    {/if}
</li>
{/key}
{/if}
