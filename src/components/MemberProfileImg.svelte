<script lang="ts">
import { getContext } from "svelte";
import { image_root } from "../stores/constants";
import { profile } from "../stores/preferences";
import ProfileModal from "./ProfileModal.svelte";

export let pm: {member: string};
$: src = pm.member == "운영팀" ? "izone-logo.png"
    :`profile/${$profile}/${pm.member}.jpg`;

const {open} = getContext("simple-modal");
const openModal = ()=>{open(ProfileModal, {})}
let timeout;
</script>

<img src="{image_root}{src}"
on:pointerdown={()=>{timeout = setTimeout(openModal, 300)}}
on:pointerup={e=>{ clearTimeout(timeout); }}
on:mousedown={()=>{timeout = setTimeout(openModal, 500)}}
on:mouseup={e=>{ clearTimeout(timeout); }}
class="w-11 h-11 rounded-full border-gray-100 border-2
float-left"
alt=""/>