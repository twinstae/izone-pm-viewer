<script lang="ts">
import { image_root } from "../stores/constants";
import { profile } from "../stores/preferences";

export let pm;

$: src = pm.member == "운영팀" ? "izone-logo.png"
    :`profile/${$profile}/${pm.member}.jpg`;

</script>

<img src="{image_root}{src}"
class="w-12 h-12 ml-1 mr-2 rounded-full float-left border-gray-200 border-1"
alt=""/>