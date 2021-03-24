<script lang="ts">
import { goto, params } from '@roxi/routify'
import { now_page } from "../stores/now";
import { search_input } from "../stores/search";
export let search_length;

params.subscribe(p=>{
    if ($search_input != p.search){
        $search_input = p.search || "";
    }
})

search_input.subscribe((value)=>{
    $now_page=1;
    $goto("./", {...$params, search: $search_input});
});
</script>

<span id="MailCounter" class="m-2 bg-red-100 rounded p-0.5">
    {search_length}건
</span>
<input
id="SearchInput"
class="border-1 border-gray-400 rounded w-28 pl-1"
type="text" bind:value={$search_input} placeholder="검색"/>
