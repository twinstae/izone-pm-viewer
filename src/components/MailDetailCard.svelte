<script lang="ts">
import Tag from './tags/Tag.svelte';
import TimeStampTag from './tags/TimeStampTag.svelte';
import TagInput from './tags/TagInput.svelte';
import FavoriteHeart from './FavoriteHeart.svelte';
import MemberTag from './tags/MemberTag.svelte';
import { now_pm, isDesktop, show_list, isMobile, pm_list } from '../stores/now';
import { mail_to_tag_dict } from "../stores/mail_to_tag_dict";
import { is_unread, onDeleteTag } from "../stores/tag_to_mail_dict";
import MemberProfileImg from './MemberProfileImg.svelte';
import { fade } from 'svelte/transition';
import { goto, params } from '@roxi/routify';
import { all_tag_dict, unread_tag } from '../stores/all_tag_dict';
import { dynamic_dark_bg, wizoneNick, replaceWizone } from '../stores/preferences';
import { afterUpdate, getContext } from 'svelte';
import NickModal from './modals/NickModal.svelte';
import PinkButton from './buttons/PinkButton.svelte';
import ImageModal from './modals/ImageModal.svelte';
import { SERVER_ROOT } from '../api';

export let show: boolean;

params.subscribe(p=>{
    if ($now_pm.id != p.now_pm){
        const new_now_pm = $pm_list.filter(pm=>pm.id == p.now_pm);
        if (new_now_pm.length == 1){
            $now_pm = new_now_pm[0];
        }
    }
})

$: getTags = (pm: MailT) => {
    if($mail_to_tag_dict.has(pm.id)){
        return Array.from($mail_to_tag_dict.get(pm.id))
            .filter(tag => tag.value != "읽지 않음")
            .map(tag=> $all_tag_dict.get(tag.value));
    }
    return [];
};

$: now_tags = getTags($now_pm);

const rainbow = `background-image: linear-gradient(
    to right,
    #f1d2e7,#f1c3aa,#e382a9, #e18784,
    #f3aa51, #fcf695, #fff,#cee5d5,
    #a7e0e1, #b7d3e9, #bbb0dc, #7592d7);
    `;

$: html_with_images = $now_pm.images
    .reduce((body, img)=>
        body.replace(
        "{이미지}",
        `<img src="${SERVER_ROOT}/${img}" class="MailImage" style="max-width:100%;display:block;margin-left:auto;margin-right:auto; margin-top:8px;">`
    ), $now_pm.body)
    .replace(/\n\n/g, "<br/>").replace(/\n/g, "<br/>");

$: html_with_images_and_videos = $now_pm.videos
  ? $now_pm.videos
    .reduce((body, video)=>
      body.replace(
        "{비디오}",
        `<video controls><source src="${SERVER_ROOT}/${video}" type="video/mp4"> </video>`
      )
    , html_with_images)
  : html_with_images;

$: html_body = $wizoneNick
    ? $replaceWizone(html_with_images_and_videos).replace(
        new RegExp($wizoneNick.replace(/[*]/g, '\\$&'), "g"),
        `<span class="wizone rounded p-0.5" style="${rainbow} color: black;">${$wizoneNick}</span>`
      )
    : html_with_images_and_videos;

now_pm.subscribe((_)=>{
    setTimeout(()=>{
      const div: HTMLElement = document.getElementById("MailDetailCardContent");
      if(div) div.scrollTo({top: 0, behavior: 'smooth'});
    }, 100);
})

function returnToList(_: Event){
  $show_list=true;
  $goto("./", { ...$params, showList: true});
}

const { open } = getContext('simple-modal');

afterUpdate(() => {
  const elements = document.getElementsByClassName("wizone");

  [...elements].forEach(element=>{
    element.addEventListener('click', ()=>{
      open(NickModal);
    })
  });

  if ($isDesktop){
    const image_elements = document.getElementsByClassName("MailImage");

    [...image_elements].forEach((element: HTMLImageElement)=>{
      element.addEventListener('click', ()=>{
        open(ImageModal, {src: element.src}, {large: true});
      })
    });
  }
});

function readMail(){
  $onDeleteTag(unread_tag);
}

</script>
<style>

</style>
<div
id="MailDetailCard"
   style="max-height: {$isDesktop && show ? "70%" : "90%"}; min-height:300px;"
class="
shadow-2xl rounded-md blur
{$dynamic_dark_bg("bg-white")}
w-full m-1 p-2
flex flex-col">
    <div
    id="MailDetailCardHeader"
    class="relative w-full leading-loose">
        <FavoriteHeart pm_id={$now_pm.id}/>
        <MemberProfileImg member={$now_pm.member}/>
        <h4 class="text-xl w-4/5">{$now_pm.subject}</h4>
        <MemberTag member_name={$now_pm.member}  size="sm"/>
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
        <p>로딩 중</p>
      </div>
      {/key}
      {#if $is_unread($now_pm.id)}
        <br>
        <div class="tooltip relative">
          <PinkButton id="ReadButton" onClick={readMail} strong={true}>
            ✔️ 읽었어요!
          </PinkButton>
          <span class="tooltiptext">Space</span>
        </div>
      {/if}
    </div>
    <div class="text-center w-full">
      {#if $isMobile}
        <PinkButton id="ReturnToListButton" onClick={returnToList} strong={true}>
          목록으로 돌아가기📄
        </PinkButton>
      {/if}
    </div>
</div>
