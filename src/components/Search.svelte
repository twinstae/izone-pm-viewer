<script lang="ts">
import { search_input, fuzzy, pm_list_after_search } from "../stores/search";

</script>

<span class="bg-red-100 rounded p-0.5 m-2">
    <label for="fuzzy">부분 일치</label>
    <input id="fuzzy" type="checkbox" bind:checked={$fuzzy}/>
</span>

<input class="m-2 border-1 border-gray-400 rounded w-32"
type="text" bind:value={$search_input} placeholder="검색"/>

{#if $search_input}
    <span class="bg-red-100 rounded pl-1 pr-1">
        총 {$pm_list_after_search.length} 장
    </span>
{/if}