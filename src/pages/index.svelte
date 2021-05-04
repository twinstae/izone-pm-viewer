<script lang="ts">
import { goto, metatags, params, redirect } from '@roxi/routify';
metatags.title = 'IZ*ONE Private Mail Viewer'

import Modal from '../components/modals/Modal.svelte';
import MailDetailSection from "../components/MailDetailSection.svelte";
import MailListSection from "../components/MailListSection.svelte";
import { isDesktop, show_list } from '../stores/now';
import { dateString, date_to_str, str_to_date, time_to_dateStr } from '../stores/date';
import { pm_list } from '../stores/now';
import { all_tag_dict, EMPTY_TAG} from '../stores/all_tag_dict';
import { selected_tag_value } from '../stores/tag';
import Background from '../components/Background.svelte';
import { initStores } from '../stores/initStores';
import { date_mail_n_dict, filtered_list } from '../stores/search';
import DateModal from '../components/modals/DateModal.svelte';
import { notify } from '../notifiaction';

let haveInitiated = false;

initStores().then((new_list: MailT[])=>{
  haveInitiated=true;

  if ($params.dateString && $params.dateString.slice(0,2) == "20"){
    dateString.set($params.dateString)
    return goToInitPage();
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

    new_list.forEach((mail: MailT)=>{
      const mail_date_str = time_to_dateStr(mail.time);
      if (mail_date_str == n_years_ago_str){
        const nowDateTime = new Date();
        const execDateTime = new Date(
            nowDateTime.getFullYear(),
            Number(mail.time.slice(5,6+1)) - 1,// month
            Number(mail.time.slice(8, 9+1)),// day
            Number(mail.time.slice(11, 12+1)), // hours
            Number(mail.time.slice(14, 15+1)), // minutes
          );

        const timeout = execDateTime.getTime() - nowDateTime.getTime();
        if (timeout < 0){
          return null;
        }

        setTimeout(()=>{notify(mail)}, timeout);
      }
    })

    if($date_mail_n_dict.has(n_years_ago_str)){
      dateString.set(n_years_ago_str);
      show = DateModal;
      return goToInitPage();
    }
  }
});

let show = null;

function goToInitPage(){

  $goto("./", {
      dateString: $dateString,
      nowPage: $params.nowPage || 1,
      tag: $params.tag || "",
      search: $params.search || "",
      showList: $params.showList || true,
      now_pm: $params.now_pm || $pm_list[0].id
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
