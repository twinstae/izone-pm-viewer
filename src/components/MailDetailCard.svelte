<script lang="ts">
import Tag from './tags/Tag.svelte';
import TimeStampTag from './tags/TimeStampTag.svelte';
import TagInput from './tags/TagInput.svelte';
import FavoriteHeart from './FavoriteHeart.svelte';
import MemberTag from './tags/MemberTag.svelte';
import { now_pm, isDesktop, show_list, isMobile, pm_list } from '../stores/now';
import { mail_to_tag_dict } from "../stores/mail_to_tag_dict";
import { is_unread } from "../stores/tag_to_mail_dict";
import { onDeleteTag } from "../stores/tag";
import MemberProfileImg from './MemberProfileImg.svelte';
import { fade } from 'svelte/transition';
import { goto, params } from '@roxi/routify';
import { all_tag_dict, unread_tag } from '../stores/all_tag_dict';
import { dynamic_dark_bg, wizoneNick, replaceWizone, dark } from '../stores/preferences';
import { afterUpdate, getContext } from 'svelte';
import NickModal from './modals/NickModal.svelte';
import PinkButton from './buttons/PinkButton.svelte';
import ImageModal from './modals/ImageModal.svelte';
import { SERVER_ROOT } from '../api';
import { search_input } from '../stores/search';
import { _ } from 'svelte-i18n';
import t from '../locales';

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

function replaceImages(html: string){
  return $now_pm.images
    .reduce((body, img)=>
        body.replace(
        "{이미지}",
        `<img src="${SERVER_ROOT}/${img}" class="MailImage rounded" style="max-width:100%;display:block;margin-left:auto;margin-right:auto; margin-top:8px;">`
    ), html)
    .replace(/\n\n/g, "<br/>").replace(/\n/g, "<br/>");

}

$: replaceWizoneTag = (html: string) => $wizoneNick
    ? $replaceWizone(html).replace(
        new RegExp($wizoneNick.replace(/[*]/g, '\\$&'), "g"),
        `<span class="wizone rounded-lg ${$dark ? 'bg-gray-800 text-gray-200' : 'bg-white text-black'}">
          ${$wizoneNick}
         </span>`
      )
    : html;

$: replaceMark = (html: string) => $search_input
    ? html.replace(
        new RegExp($search_input, 'g'),
        `<mark>${$search_input}</mark>`
      )
    : html;

$: html_with_images = replaceImages($now_pm.body);
$: html_with_wizone = replaceWizoneTag(html_with_images);
$: html_body = replaceMark(html_with_wizone);

$: marked_subject = replaceMark($now_pm.subject);

now_pm.subscribe((_)=>{
    setTimeout(()=>{
      const div: HTMLElement = document.getElementById("MailDetailCardContent");
      if(div) div.scrollTo({top: 0});
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

 $: html_list = html_body.split('{비디오}');

</script>

<div
id="MailDetailCard"
class="
shadow-2xl rounded-md blur
{$dynamic_dark_bg('bg-white')}
w-full m-1 p-2 relative
flex flex-col">
    <div
    id="MailDetailCardHeader"
    class="relative w-full leading-loose">
        <FavoriteHeart pm_id={$now_pm.id}/>
        <MemberProfileImg member={$now_pm.member}/>
        <h4 class="w-full text-xl font-semibold" bind:innerHTML="{marked_subject}" contenteditable="false">
          {$now_pm.subject}
        </h4>
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
      class="overflow-y-auto">
      {#key $now_pm}
      {#each html_list as html, i}
       <div class="leading-relaxed pt-2" in:fade={{ duration: 300 }} contenteditable=false bind:innerHTML={html}>
       </div> 
       {#if i < $now_pm.videos.length }
          <video controls>
            <source src="{SERVER_ROOT}/{$now_pm.videos[i]}" type="video/mp4">
          </video>
        {/if}
      {/each}
      {/key}
      {#if $is_unread($now_pm.id)}
        <br>
        <div class="tooltip relative">
          <PinkButton id="ReadButton" onClick={readMail} strong={true}>
            ✔️ {$_(t.읽었어요)}!
          </PinkButton>
          <span class="tooltiptext">Space</span>
        </div>
      {/if}
    </div>
    <div class="text-center w-full">
      {#if $isMobile}
        <PinkButton id="ReturnToListButton" onClick={returnToList} strong={true}>
          {$_(t.돌아가기)}📄
        </PinkButton>
      {/if}
    </div>
</div>

<style>
  #MailDetailCard {
    max-height: calc(100% - 3rem);
    min-height: 300px;
  }

  @media all and (min-width:700px) {
    #MailDetailCard {
      max-height: calc(100% - 15rem);
    }
  }

</style>
