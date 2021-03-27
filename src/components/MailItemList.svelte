<script lang="ts">
import { isMobile, show_tag_list } from "../stores/now";
import { dynamic_dark_bg } from "../stores/preferences";
import MailListItem from "./MailListItem.svelte";

export let mail_list: Mail[];
export let isTyping: boolean;
</script>
<ul id="MailItemList"
style="max-width: 728px;"
class="{$dynamic_dark_bg("bg-white")} rounded shadow-xl m-1">
    {#each mail_list as pm, i}
        <MailListItem index={i} pm={pm}
        hidden={$isMobile
        && (isTyping || $show_tag_list)
        && i>0}/>
    {/each}
</ul>