<script lang="ts">
import { isMobile, show_tag_list } from "../stores/now";
import MailListItem from "./MailListItem.svelte";

export let mail_list: Mail[];
export let isTyping: boolean;
</script>
<ul id="MailItemList"
style="max-width: 728px;"
class="bg-white rounded shadow-xl mb-3">
    {#each mail_list as pm, i}
        <MailListItem index={i} pm={pm}
        hidden={$isMobile
        && (isTyping || $show_tag_list)
        && i>0}/>
    {/each}
</ul>