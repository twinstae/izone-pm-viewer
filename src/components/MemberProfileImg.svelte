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
on:mousedown={()=>{timeout = setTimeout(openModal, 500)}}
on:mouseup={e=>{ clearTimeout(timeout); }}
class="w-10 h-10 ml-1 mt-1 mr-2 rounded-full float-left border-gray-200 border-1"
alt=""/>