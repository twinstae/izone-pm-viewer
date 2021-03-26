<script lang="ts">
import { translate_url } from "../../stores/now";
import { dark } from "../../stores/preferences";
</script>

<div class="w-16 p-1 shadow rounded mr-1
            {$dark ? "bg-gray-900 text-gray-300" : "bg-red-100"}">
    <a
    href={$translate_url}
    target="_blank">
        번역<img class="w-5 h-5 mt-0.5 float-right" src="./img/papago.png" alt="파파고 번역하기"/>
    </a>
</div>