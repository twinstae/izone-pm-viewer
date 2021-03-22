<script lang="ts">
import { goto, params } from '@roxi/routify'
import { now_page } from "../stores/now";
import { search_input, fuzzy } from "../stores/search";
export let search_length;

params.subscribe(p=>{
    if ($search_input != p.search){
        $search_input = p.search || "";
    }
})

let onChange = ()=>{
    $now_page=1;
    $goto("./", {...$params, search: $search_input});
};
</script>

<span class="bg-red-100 rounded p-0.5 m-1">
    <label for="fuzzy">부분 일치</label>
    <input id="fuzzy" type="checkbox" bind:checked={$fuzzy}/>
</span>

<input
on:change={onChange}
class="m-1 border-1 border-gray-400 rounded w-28"
type="text" bind:value={$search_input} placeholder="검색"/>

{#if $search_input}
    <span class="bg-red-100 rounded pr-1">
        {search_length}건
    </span>
{/if}