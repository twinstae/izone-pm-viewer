<script lang="ts">
import { all_tag_dict } from "../../stores/all_tag_dict";
import { mail_to_tag_dict } from "../../stores/mail_to_tag_dict";
import { tag_to_mail_dict } from "../../stores/tag_to_mail_dict";
import { now_pm } from "../../stores/now";
import { selected_tag_value } from "../../stores/tag";
import { goto, params } from "@roxi/routify";
import { getContext } from "svelte";
import TagModal from "./TagModal.svelte";
import { base_tag_set, member_color_to_dark_dict } from "../../stores/constants";
import Icon from 'fa-svelte';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import { dark, dynamic_dark_border } from "../../stores/preferences";
import api from "../../api";

export let tag: {
    value: string,
    color: string
};
export let canDelete = false;
export let size = "xs";
export let onRemove = null;

$: onDeleteTag = async ()=>{
    const the_tag = $all_tag_dict.get(tag.value);   

    tag_to_mail_dict.update(dict=>{
      if (dict.has(the_tag)){
          dict.get(the_tag).delete($now_pm.id);
      }
      return dict;
    })

    mail_to_tag_dict.update(dict=>{
      if (dict.has($now_pm.id)){
          dict.get($now_pm.id).delete(the_tag)
      }
      return dict;
    });

    await api.MailTagDict.deleteTag($now_pm.id, tag.value)
      .then((_)=>{console.log("서버에서 태그 삭제 성공")});
}

const onSelectTag = (tag: TagT)=>
()=>{
    $selected_tag_value = tag.value;
    $goto("./", {...$params, tag: tag.value, nowPage:1})
}

const {open} = getContext("simple-modal");
const openModal = ()=>{open(TagModal, { tag: tag})}

let timeout: ReturnType<typeof setTimeout>;
$: onTouchDown = ()=>{
    if(base_tag_set.has(tag.value)){
        timeout = setTimeout(()=>{console.log("기본 태그는 아직 수정할 수 없습니다.")}, 300)
    } else {
        timeout = setTimeout(openModal, 300);
    }
};
$: onTouchUp = (_: Event) =>{ clearTimeout(timeout); }

const iconDict = new Map([
    ["트위터", faTwitter],
    ["페이스북", faFacebook],
    ["인스타", faInstagram],
    ["유튜브", faYoutube],
]);

$: padding = tag.color=="#fff" ? "border-2 p-0.5" : "p-1";
$: border = onRemove || (canDelete && tag.value!="생일")
    ? "rounded-l border-r-0"
    : "rounded";

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
    return "#eee"
};

$: icon = iconDict.get(tag.value);

$: style = `background-color: ${$dark ? dark_bg_color : backgroud_color};
            color: ${$dark ? get_dark_text_color(): text_color()};`
</script>
<style>
    span {
        word-break: keep-all;
        white-space: nowrap;
    }
</style>
<span
on:pointerdown={onTouchDown}
on:pointerup={onTouchUp}
on:click={onSelectTag(tag)}
style={style}
class="Tag-{tag.value.replace(" ", "-")} {padding} {border} m-0.5 mr-0 text-{size}
{$dynamic_dark_border} {tag.value=="💖" ? "pt-0" : ""}">
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
on:click={onRemove ? onRemove : onDeleteTag}
style={style}
class="{onRemove ? "Remove" : "Delete"}Tag-{tag.value.replace(" ", "-")}
{$dynamic_dark_border}
{tag.color=="#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1"}
rounded-r {onRemove ? "-ml-1" : "-ml-2"} mt-0.5 mb-0.5 text-{size}"
>

X</span>
{/if}
