<script lang="ts">
import MailDetailCard from './MailDetailCard.svelte';
import AllTagList from './tags/AllTagList.svelte';
import { isDesktop, isMobile, show_album, show_list, show_tag_list } from '../stores/now';
import PapagoLink from './buttons/PapagoLink.svelte';
import DarkModeButton from './buttons/DarkModeButton.svelte';

</script>
<style>
    #MailDetailSection {
        animation:animateleft 0.4s;
    }
    @keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}
</style>

<section
id="MailDetailSection"
class:hidden={($isMobile && $show_list) || $show_album}
class="h-full p-3 {$isDesktop ? 'w-1/2 lg:w-1/3 xl:w-1/4' :'w-full'} flex flex-col">
  <div class="flex flex-row m-1" style="z-index:1;">
    <PapagoLink />
    <DarkModeButton />
  </div>
  <AllTagList hidden={$isMobile}/>
  <MailDetailCard />
</section>
