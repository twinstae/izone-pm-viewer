<script lang="ts">
import { goto, params } from '@roxi/routify'
import { getContext } from 'svelte';
import { _ } from 'svelte-i18n';
import t from '../locales';
import { now_page, show_list } from "../stores/now";
import { dynamic_dark_bg, dynamic_dark_border } from '../stores/preferences';
import { search_input } from "../stores/search";
import PinkButton from './buttons/PinkButton.svelte';
import ImageSearchModal from './modals/ImageSearchModal.svelte';

export let search_length: number;

params.subscribe(p=>{
    if ($search_input != p.search){
        $search_input = p.search || "";
    }
})

let now_input = $search_input;

let timeout: ReturnType<typeof setTimeout>;
$: search = ()=>{
    $now_page=1;
    $search_input = now_input;
    $show_list = true;
    $goto("./", {...$params, showList:true, search: now_input, nowPage: 1});
}

function onKeydown(event: KeyboardEvent){
  clearTimeout(timeout);
  if (event.key == "Enter") return search();
  timeout = setTimeout(search, 500);
}

const {open} = getContext("simple-modal");
</script>

<span class="tooltip">
  <span id="MailCounter"
  class="m-1 rounded p-1 {$dynamic_dark_bg('bg-red-100')}">
      {search_length}건
  </span>
  <input
  id="SearchInput"
  class="w-28 p-0.5 rounded border-2 {$dynamic_dark_border} {$dynamic_dark_bg('bg-white')}"
  on:keydown={onKeydown}
  type="text" bind:value={now_input} placeholder="{$_(t.검색어입력)}"/>

  <span class="tooltiptext">/ (나오려면 Esc)</span>
</span>
<PinkButton id="ImageSearchButton" onClick={()=>{open(ImageSearchModal)}}>
  🖼️
</PinkButton>
