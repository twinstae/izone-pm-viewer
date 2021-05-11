<script lang="ts">
import { getContext } from "svelte";
import { image_root } from "../stores/constants";
import { dark, profile } from "../stores/preferences";
import ProfileModal from "./modals/ProfileModal.svelte";

export let member: string;

$: is_mp4 = $profile.includes("-mp4");
$: ending = is_mp4 ? '.mp4' : '.jpg';
$: is_staff = member == "운영팀";
$: src = is_staff ? "izone-logo.png" :`profile/${$profile}/${member}${ending}`;

const {open} = getContext("simple-modal");
const openModal = ()=>{open(ProfileModal, {})}
let timeout: ReturnType<typeof setTimeout>;

function onDown(){
  timeout = setTimeout(openModal, 300)
};

function onUp(_: Event){
  clearTimeout(timeout);
}


</script>
{#if is_mp4 && !is_staff}
  <video autoplay loop 
         on:pointerdown={onDown} on:pointerup={onUp}
         class="w-12 h-12 rounded-full border-2 float-left {$dark ? 'border-gray-700' : 'border-gray-100'}">
    <source src="{image_root}{src}" type="video/mp4">
    <track kind="captions">
  </video>
{:else}
<img src="{image_root}{src}"
     on:pointerdown={onDown} on:pointerup={onUp}
     class="w-12 h-12 rounded-full border-2 float-left
            {$dark ? 'border-gray-700' : 'border-gray-100'}"
     alt="" >
{/if}
