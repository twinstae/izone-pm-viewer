<script lang="ts">
import { getContext } from "svelte";
import { image_root } from "../stores/constants";
import { dark, profile } from "../stores/preferences";
import ProfileModal from "./modals/ProfileModal.svelte";

export let member: string;
$: src = member == "운영팀" ? "izone-logo.png"
    :`profile/${$profile}/${member}.jpg`;

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

<img src="{image_root}{src}"
     on:pointerdown={onDown} on:pointerup={onUp}
     class="w-12 h-12 rounded-full border-2 float-left
            {$dark ? "border-gray-700" : "border-gray-100"}"
     alt="" >
