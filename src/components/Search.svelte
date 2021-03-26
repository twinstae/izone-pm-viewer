<script lang="ts">
import { goto, params } from '@roxi/routify'
import { now_page } from "../stores/now";
import { dark, dynamic_dark_bg, dynamic_dark_border } from '../stores/preferences';
import { search_input } from "../stores/search";
export let search_length;

params.subscribe(p=>{
    if ($search_input != p.search){
        $search_input = p.search || "";
    }
})

search_input.subscribe((value)=>{
    $now_page=1;
    $goto("./", {...$params, search: value});
});
</script>

<span id="MailCounter"
class="m-2 rounded p-0.5
{$dark ? "bg-gray-800 text-gray-300" : "bg-red-100"}">
    {search_length}건
</span>
<input
id="SearchInput"
class="border-2 {$dynamic_dark_border} rounded pl-1 {$dynamic_dark_bg}"
style="width: 170px;"
type="text" bind:value={$search_input} placeholder="검색"/>