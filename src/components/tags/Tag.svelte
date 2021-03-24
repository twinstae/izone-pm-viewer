<script lang="ts">
import { all_tag_dict, EMPTY_TAG } from "../../stores/all_tag_dict";
import { mail_to_tag_dict } from "../../stores/mail_to_tag_dict";
import { tag_to_mail_dict } from "../../stores/tag_to_mail_dict";
import { now_pm } from "../../stores/now";
import { selected_tag } from "../../stores/tag";
import { goto, params } from "@roxi/routify";
import { getContext } from "svelte";
import TagModal from "./TagModal.svelte";
import { base_tag_set } from "../../stores/constants";
import Icon from 'fa-svelte';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons/faBirthdayCake';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
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
    // await api.MailTagDict.deleteTag($now_pm.id, the_tag.value);
    
    $tag_to_mail_dict.get(the_tag).delete($now_pm.id);        
    $tag_to_mail_dict=$tag_to_mail_dict;

    $mail_to_tag_dict.get($now_pm.id).delete(the_tag)
    $mail_to_tag_dict=$mail_to_tag_dict;
}

params.subscribe(p=>{
    if (p.tag == null && $selected_tag != EMPTY_TAG) {
        $selected_tag = EMPTY_TAG;
    }
    if(p.tag && $selected_tag.value != p.tag){
        $selected_tag = $all_tag_dict.get(p.tag);
}});

const onSelectTag = (tag)=>
()=>{
    selected_tag.set(tag);
    $goto("./", {...$params, tag: $selected_tag.value, nowPage:1})
}

const {open} = getContext("simple-modal");
const openModal = ()=>{open(TagModal, { tag: tag})}
let timeout;
$: onTouchDown = ()=>{
    if(base_tag_set.has(tag.value)){
        timeout = setTimeout(()=>{alert("기본 태그는 아직 수정할 수 없습니다.")}, 300)
    } else {
        timeout = setTimeout(openModal, 300);
    }
};
$: onTouchUp = e=>{ clearTimeout(timeout); }

const iconDict = new Map([
    ["생일", {icon: faBirthdayCake, color: "red-600"}],
    ["트위터", {icon: faTwitter, color: "blue-500"}],
    ["페이스북", {icon: faFacebook, color: "blue-900"}],
    ["인스타", {icon: faInstagram, color: "red-500"}],
    ["유튜브", {icon: faYoutube, color: "red-600"}],
]);

$: padding = tag.color=="#fff" ? "border-2 p-0.5" : "p-1";
$: border = onRemove || (canDelete && tag.value!="생일")
    ? "rounded-l border-r-0"
    : "rounded";
$: backgroud_color = tag.value=="타임캡슐" ? "#333333" : tag.color;
$: text_color = tag.value=="타임캡슐" ? "#b299e6"
        : tag.value=="💖" ? "#ffb40d"
            : "black";

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
style="
background-color: {backgroud_color};
color: {text_color};"
class="Tag-{tag.value.replace(" ", "-")} {padding} {border} m-0.5 mr-0 text-{size}
{tag.value=="💖" ? "pt-0" : ""}">
    {#if tag.value=="💖"}
        <Icon icon={faStar}>좋아요 태그</Icon>
    {:else}
        {#if iconDict.has(tag.value)}
        <Icon
        class="mb-1 text-{iconDict.get(tag.value).color}"
        icon={iconDict.get(tag.value).icon}></Icon>
        {/if}
    {tag.value}
    {/if}
</span>

{#if onRemove || (canDelete && tag.value!="생일")}
<span
on:click={onRemove ? onRemove : onDeleteTag}
style="
background-color: {backgroud_color};
color: {text_color};"
class="{onRemove ? "Remove" : "Delete"}Tag-{tag.value.replace(" ", "-")}
{tag.color=="#fff" ? "border-2 border-l-0 p-0.5 pl-1" : "p-1"}
rounded-r {onRemove ? "-ml-1" : "-ml-2"} mt-0.5 mb-0.5 text-{size}">
X</span>
{/if}
