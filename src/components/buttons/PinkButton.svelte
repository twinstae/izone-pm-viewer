<script lang="ts">
import { dark } from "../../stores/preferences";
export let onClick;
export let id: string;
export let strong: boolean = false;
</script>

<button
id={id}
class="rounded m-1 p-0.5 pl-1 pr-1
    {$dark
        ? "text-gray-300 " + (strong ? "bg-gray-900" : "bg-gray-800")
        : "bg-red-100"}"
on:click={onClick}>
<slot></slot>
</button>
    