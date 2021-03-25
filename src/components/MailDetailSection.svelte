<script lang="ts">
import MailDetailCard from './MailDetailCard.svelte';
import AllTagList from './tags/AllTagList.svelte';
import { selected_tag_value } from "../stores/tag";
import { isDesktop, isMobile, show_list, show_tag_list } from '../stores/now';
import SelectedTag from './tags/SelectedTag.svelte';
import PapagoLink from './buttons/PapagoLink.svelte';
import ShowTagListInput from './tags/ShowTagListInput.svelte';
import BackToListButton from './buttons/BackToListButton.svelte';

let height;
$: over = 650 < height;
</script>
<style>
    #MailDetailSection {
        animation:animateleft 0.4s;
    }
    @keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}
</style>

<section
id="MailDetailSection"
class:hidden={$isMobile && $show_list}
class="h-full p-3 {$isDesktop ? "w-4/12" :"w-full"} flex flex-col"
bind:clientHeight={height}>
    <div class="flex flex-row">
        {#if $isMobile} <BackToListButton />{/if}
        <PapagoLink />
        {#if !over && $isDesktop} <ShowTagListInput /> {/if}
        {#if $selected_tag_value} <SelectedTag /> {/if}
    </div>
    <AllTagList hidden={!((over || $show_tag_list) && $isDesktop)}/>
    <MailDetailCard show={over || $show_tag_list}/>
</section>