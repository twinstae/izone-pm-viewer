<script lang="ts">
import { onDeleteTag } from "../../stores/tag_to_mail_dict";
import { selected_tag_value } from "../../stores/tag";
import { goto, params } from "@roxi/routify";
import { getContext } from "svelte";
import TagModal from "./TagModal.svelte";
import NickModal from "../modals/NickModal.svelte";
import { base_tag_set, member_color_to_dark_dict } from "../../stores/constants";
import Icon from 'fa-svelte';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import { dark } from "../../stores/preferences";

export let tag: TagT;
export let canDelete = false;
export let size = "xs";
export let onRemove = null;


const onSelectTag = (tag: TagT)=>
()=>{
    $selected_tag_value = tag.value;
    $goto("./", {...$params, tag: tag.value, nowPage:1})
}

const {open} = getContext("simple-modal");

let timeout: ReturnType<typeof setTimeout>;
$: onTouchDown = ()=>{
    if(tag.color == "rainbow"){
        timeout = setTimeout(()=>{open(NickModal)}, 500);
        return null;
    }

    if(base_tag_set.has(tag.value)){
        timeout = setTimeout(()=>{console.log("기본 태그는 아직 수정할 수 없습니다.")}, 300)
    } else {
        timeout = setTimeout(()=>{open(TagModal, { tag: tag})}, 300);
    }
};
$: onTouchUp = (_: Event) =>{ clearTimeout(timeout); }

const iconDict = new Map([
    ["트위터", faTwitter],
    ["페이스북", faFacebook],
    ["인스타", faInstagram],
    ["유튜브", faYoutube],
]);

$: padding = tag.color=="#fff" ? "border-gray-300 border-2 p-0.5" : "p-1";

$: backgroud_color = tag.value=="타임캡슐" ? "#555" : tag.color;
$: dark_bg_color = member_color_to_dark_dict[backgroud_color];

$: text_color = ()=>{
    if (tag.value=="타임캡슐"){
        return "#b299e6";
    }
    if (tag.value=="💖"){
        return "#ffb40d";
    }
    return "black";
}

$: get_dark_text_color = ()=>{
    if(text_color() != "black"){
        return text_color();
    }
    if (tag.value == "김민주" || tag.value == "최예나"){
        return "#333";
    }
    return "white"
};

$: icon = iconDict.get(tag.value);

$: style = tag.color=="rainbow"
  ? `background-image: linear-gradient(
    to right,
    #f1d2e7,#f1c3aa,#e382a9, #e18784,
    #f3aa51, #fcf695, #fff,#cee5d5,
    #a7e0e1, #b7d3e9, #bbb0dc, #7592d7);
    color: black;`
  : `background-color: ${$dark ? dark_bg_color : backgroud_color};
            color: ${$dark ? get_dark_text_color(): text_color()};`
</script>
<style>
    span {
        word-break: keep-all;
        white-space: nowrap;
    }
</style>

<span
  style={style}
  class="{padding} rounded p-1 m-0.5 text-{size}">
  <span
  on:pointerdown={onTouchDown}
  on:pointerup={onTouchUp}
  on:click={onSelectTag(tag)}
  class="Tag-{tag.value.replace(' ', '-')} text-{size}">
      {#if tag.value=="💖"}
          <Icon icon={faStar} />
      {:else}
          {#if iconDict.has(tag.value)}
          <Icon
          class="mb-1 text-white"
          icon={icon} />
          {/if}
      {tag.value}
      {/if}
  </span>

  {#if onRemove || (canDelete && tag.value!="생일")}
    <span
      on:click={onRemove ? onRemove : () => $onDeleteTag(tag)}
      class="{onRemove ? 'Remove' : 'Delete'}Tag-{tag.value.replace(' ', '-')}">
    X
    </span>
  {/if}

</span>
