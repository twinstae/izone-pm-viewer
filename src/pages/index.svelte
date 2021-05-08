<script lang="ts">
import { goto, metatags, params, redirect } from '@roxi/routify';
metatags.title = 'IZ*ONE Private Mail Viewer'

import Modal from '../components/modals/Modal.svelte';
import MailDetailSection from "../components/MailDetailSection.svelte";
import MailListSection from "../components/MailListSection.svelte";
import { isDesktop, now_pm, show_list } from '../stores/now';
import { dateString, date_to_str, time_to_dateStr } from '../stores/date';
import { all_tag_dict, EMPTY_TAG} from '../stores/all_tag_dict';
import { selected_tag_value } from '../stores/tag';
import Background from '../components/Background.svelte';
import { initStores } from '../stores/initStores';
import { date_mail_n_dict } from '../stores/search';
import DateModal from '../components/modals/DateModal.svelte';
import api from '../api';
import { profile } from '../stores/preferences';

let haveInitiated = false;

initStores().then((new_list: MailT[])=>{
  haveInitiated=true;

  if ($params.now_pm){
    const now_time = new_list.filter(mail => mail.id == $params.now_pm)[0].time;
    dateString.set(time_to_dateStr(now_time));
    return goToInitPage(new_list[0].id);
  }

  if ($params.dateString && $params.dateString.slice(0,2) == "20"){
    dateString.set($params.dateString)
    return goToInitPage(new_list[0].id);
  }

  const today = new Date();

  function shuffle(array: number[]): number[] {
      let top = array.length;
      let current: number;
      if(top) while(--top) {
          current = Math.floor(Math.random() * (top + 1));
          [array[current], array[top]] = [array[top], array[current]];
      }
      return array;
  }

  for (const year of shuffle([2019, 2020, 2021])){
    const n_years_ago = new Date(year, today.getMonth(), today.getDate());
    const n_years_ago_str = date_to_str(n_years_ago);

    if($date_mail_n_dict.has(n_years_ago_str)){
      const n_years_ago_mail_list = new_list.filter((mail: MailT)=>{
        const mail_date_str = time_to_dateStr(mail.time);
        return mail_date_str == n_years_ago_str
      });

      n_years_ago_mail_list.forEach(mail=>api.notify_server(mail, $profile));
      now_pm.set(n_years_ago_mail_list[0]);
      dateString.set(n_years_ago_str);
      show = DateModal;
      return goToInitPage(n_years_ago_mail_list[0].id);
    }
  }

  goToInitPage(new_list[0].id);
});

let show = null;

function goToInitPage(pm_id: string){

  $goto("./", {
      dateString: $dateString,
      nowPage: $params.nowPage || 1,
      tag: $params.tag || "",
      search: $params.search || "",
      showList: $params.showList || true,
      now_pm: $params.now_pm || pm_id
  });
}

let width: number;
$: isDesktop.set(width > 700);

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

  .tooltiptext {
    display: none;
    font-size: 3reme;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 0 1rem;
    border-radius: 6px;
    border: 3px gray solid;
   
    position: absolute;
    z-index: 1;
  }

  .tooltip:hover .tooltiptext {
    display: initial;
  }

  .blur-off {
    color: transparent;
    text-shadow: 1px 1px 8px gray;
  }
</style>

<div
bind:clientWidth={width}
class="flex w-screen h-screen relative">
{#if haveInitiated }
  <Modal show={show} transitionBgProps={{duration: 500}}>
        <Background />
        <MailDetailSection />
        <MailListSection/>
    </Modal>
{/if}
</div>
