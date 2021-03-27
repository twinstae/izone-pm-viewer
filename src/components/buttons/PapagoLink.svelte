<script lang="ts">
import { translate_url } from "../../stores/now";
import { dynamic_dark_bg } from "../../stores/preferences";
</script>

<div class="w-16 p-1 shadow rounded mr-1 {$dynamic_dark_bg("bg-red-100")}">
    <a
    href={$translate_url}
    target="_blank">
        번역<img class="w-5 h-5 mt-0.5 float-right" src="./img/papago.png" alt="파파고 번역하기"/>
    </a>
</div>