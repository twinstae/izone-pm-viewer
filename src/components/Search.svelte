<script lang="ts">
import { search_input, fuzzy } from "../stores/search";
export let search_length;
</script>

<span class="bg-red-100 rounded p-0.5 m-1">
    <label for="fuzzy">부분 일치</label>
    <input id="fuzzy" type="checkbox" bind:checked={$fuzzy}/>
</span>

<input class="m-1 border-1 border-gray-400 rounded w-32"
type="text" bind:value={$search_input} placeholder="검색"/>

{#if $search_input}
    <span class="bg-red-100 rounded pr-1">
        {search_length}건
    </span>
{/if}