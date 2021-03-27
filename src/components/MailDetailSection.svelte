<script lang="ts">
import MailDetailCard from './MailDetailCard.svelte';
import AllTagList from './tags/AllTagList.svelte';
import { isDesktop, isMobile, show_list, show_tag_list } from '../stores/now';
import PapagoLink from './buttons/PapagoLink.svelte';
import ShowTagListInput from './tags/ShowTagListInput.svelte';
import DarkModeButton from './buttons/DarkModeButton.svelte';

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
class="h-full p-3 {$isDesktop ? "w-1/2 lg:w-1/3 xl:w-1/4" :"w-full"} flex flex-col"
bind:clientHeight={height}>
    <div class="flex flex-row m-1">
        <PapagoLink />
        <DarkModeButton />
        {#if !over && $isDesktop} 
            <ShowTagListInput />
        {/if}
    </div>
    <AllTagList hidden={!((over || $show_tag_list) && $isDesktop)}/>
    <MailDetailCard show={over || $show_tag_list}/>
</section>