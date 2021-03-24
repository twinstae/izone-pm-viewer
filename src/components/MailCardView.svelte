<script lang="ts">
import MailCardItem from "./MailCardItem.svelte";
export let mail_list: Mail[];

</script>
<div
id="MailCardView"
class="mb-3 flex flex-wrap">
    {#each mail_list as pm, i}
        <MailCardItem pm={pm} index={i}/>
    {/each}            
</div>