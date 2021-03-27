<script lang="ts">
import { dynamic_dark_bg } from "../../stores/preferences";
    export let onClick;
    export let id: string;
</script>

<button
id={id}
class="rounded {$dynamic_dark_bg("bg-red-100")} m-1 p-0.5 pl-1 pr-1"
on:click={onClick}>
<slot></slot>
</button>
    