<script lang="ts">
import { dark } from "../../stores/preferences";


    export let onClick;
    export let id: string;
</script>

<button
id={id}
class="rounded {$dark ? "bg-gray-700 text-gray-300" : "bg-red-100"} m-2 pl-1 pr-1"
on:click={onClick}>
<slot></slot>
</button>
    