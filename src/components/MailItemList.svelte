<script lang="ts">
import { isMobile, show_tag_list } from "../stores/now";
import { dynamic_dark_bg } from "../stores/preferences";
import MailListItem from "./MailListItem.svelte";

export let mail_list: MailT[];
export let isTyping: boolean;

$: hidden = (i: number)=> $isMobile
        && (isTyping || $show_tag_list)
        && i > 0;
</script>

<style>
  ul#MailItemList {
    max-width: 728px;
  }
</style>

<ul id="MailItemList"
class="{$dynamic_dark_bg('bg-white')} rounded shadow-xl m-1">
    {#each mail_list as pm, i}
        <MailListItem index={i} pm={pm} hidden={hidden(i)}/>
    {/each}
</ul>
