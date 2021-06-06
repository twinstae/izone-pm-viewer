<script lang="ts">
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
import { dark, replaceWizone } from "../stores/preferences";
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
    if(pm && pm.member){
        $now_pm=pm;
        $show_list = false;
        $goto("./", { ...$params, showList: $show_list, now_pm: $now_pm.id});
    }
}

$: processed_preview = $replaceWizone(pm.body || "")
    .replace(/<\/p>/g, ' ')
    .replace(/<br>/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace('&lt;', '<').replace('&lt', '<')
    .replace('&gt;','>').replace('&gt','>')
    .replace(/&nbsp;/g, "")
    .replace(/&amp;/g, "&")
    .replace(/\{이미지\}/g, '')
    .slice(0, 70)

$: sliced_preview = [...processed_preview].slice(0, 50).join("")


</script>

<div
  id="MailCard-{index}"
  class:EmptyCard={!pm.member}
  class:Unread={$is_unread(pm.id)}
  class:dark={$dark}
  class:selected={pm.id == $now_pm.id}
  class="MailCard relative overflow-y-auto blur shadow-md rounded-md"
  on:click={onMailSelected}>
    <FavoriteHeart pm_id={pm.id}/>
    {#key pm.id}
    <div in:fade={{ duration: 500 }} class="leading-relaxed blur">
    {#if pm.member}
      {#if $isDesktop}
          <MemberProfileImg member={pm.member}/>
          <h4 class="font-semibold truncate"> {pm.subject}</h4>
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
                    xlink:href="{SERVER_ROOT}/{pm.images[0].split('.')[0]}_tmb.jpg"/>
                </svg>
            {/if}
            {sliced_preview}
          </p>
      {:else}
        {#if pm.images.length > 0}
          <svg class="w-16 h-16 m-1 float-left rounded">
              <image width="100%" height="100%"
              preserveAspectRatio="xMidYMid slice"
              xlink:href="{SERVER_ROOT}/{pm.images[0].split('.')[0]}_tmb.jpg"/>
          </svg>
        {:else}
          <MemberProfileImg member={pm.member} />
        {/if}
        <h4 class="font-semibold">{pm.subject}</h4>
        <MemberTag member_name={pm.member}/>
        <TimeStampTag time={pm.time} />
        {#each getTags(pm) as tag_item}
          <Tag tag={tag_item} />
        {/each}
        <p class="text-xs mt-1 truncate">
          {sliced_preview}
        </p>
      {/if}
    {/if}
    </div>
    {/key}
</div>




<style>
  div.EmptyCard {
    background-image: url(../img/izone-logo-card.png);
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
    margin: 0.25rem;
    padding: 0.25rem;
    height: 85px;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 0.5rem;
    background-color: white;
  }

  @media (min-width:700px) {
    div.MailCard {
      width: 290px;
      height:140px;
    }
  }

  div.MailCard.dark {
    color: rgb(209, 213, 219);
    background-color: #202932;
  }
  
  @keyframes blink {
    0% {transform: none;}
    100% {transform: scale(0.99, 0.99);}
  }

  .MailCard.selected {
    animation: blink 1s linear infinite alternate;
    border: 2px solid pink
  }

  .MailCard.selected.dark {
    border: 2px solid gray
  }

</style>
