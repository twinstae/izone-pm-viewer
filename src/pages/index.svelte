<script lang="ts">
import { goto, metatags, params, redirect } from '@roxi/routify';
metatags.title = 'IZ*ONE Private Mail Viewer'

import Modal from '../components/Modal.svelte';
import MailDetailSection from "../components/MailDetailSection.svelte";
import MailListSection from "../components/MailListSection.svelte";
import { isDesktop, show_list } from '../stores/now';
import { INIT_DATE } from '../stores/date';
import { pm_list } from '../stores/now';
import { all_tag_dict, EMPTY_TAG} from '../stores/all_tag_dict';
import { selected_tag_value } from '../stores/tag';
import Background from '../components/Background.svelte';
import { initStores } from '../stores/initStores';

let haveInitiated = false;

initStores().then(()=>{
  if (!$params.dateString){
      $goto("./", {
          dateString: $params.dateString || INIT_DATE,
          nowPage: $params.nowPage || 1,
          tag: $params.tag || "",
          search: $params.search || "",
          showList: $params.showList || true,
          now_pm: $params.now_pm || $pm_list[0].id
      })
  };

  haveInitiated=true
});

let width: number;
$: isDesktop.set(width > 700);

let show = null;

params.subscribe(p=>{   
    if ($show_list != (p.showList == "true")){
        show_list.set(p.showList == "true")
    }
})

params.subscribe(p=>{
    if (!p.tag && $selected_tag_value) {
        selected_tag_value.set(EMPTY_TAG);
    }
    
    if (p.tag){
        if (!$all_tag_dict.has(p.tag)){
            $redirect("./", { ...$params, tag: ""});
            console.log("redirect to empty tag url");
            return null;
        }
        if ($selected_tag_value != p.tag){
            const new_tag = $all_tag_dict.get(p.tag);
            selected_tag_value.set(new_tag.value);
        }
    }
});

</script>

<style global>
  #MailDetailCardContent div p {
    margin-top: 8px;
  }
</style>

<div
bind:clientWidth={width}
class="flex w-screen h-screen relative">
{#if haveInitiated }
    <Modal show={show}>
        <Background />
        <MailDetailSection />
        <MailListSection/>
    </Modal>
{/if}
</div>
