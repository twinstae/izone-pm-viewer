<script lang="ts">
import { goto, metatags, params, redirect } from '@roxi/routify';
import { all_tag_dict, EMPTY_TAG} from '../stores/all_tag_dict';
import { selected_tag_value } from '../stores/tag';
import { now_pm, pm_list, show_list, show_album } from '../stores/now';
import { dateString, date_to_str, time_to_dateStr } from '../stores/date';
import { date_mail_n_dict } from '../stores/search';
import DateModal from '../components/modals/DateModal.svelte';
import api from '../api';
import { profile } from '../stores/preferences';
import MailDetailSection from "../components/MailDetailSection.svelte";
import MailListSection from "../components/MailListSection.svelte";
import Album from "../components/Album.svelte";
import { getContext } from 'svelte';

let { open } = getContext('simple-modal')

function init_page(){
  if ($params.now_pm){
    const now_time = $pm_list.filter(mail => mail.id == $params.now_pm)[0].time;
    dateString.set(time_to_dateStr(now_time));
    return goToInitPage($pm_list[0].id);
  }

  if ($params.dateString && $params.dateString.slice(0,2) == "20"){
    dateString.set($params.dateString)
    return goToInitPage($pm_list[0].id);
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
      const n_years_ago_mail_list = $pm_list.filter((mail: MailT)=>{
        const mail_date_str = time_to_dateStr(mail.time);
        return mail_date_str == n_years_ago_str
      });

      n_years_ago_mail_list.forEach(mail=>api.notify_server(mail, $profile));
      now_pm.set(n_years_ago_mail_list[0]);
      dateString.set(n_years_ago_str);
      open(DateModal);
      return goToInitPage(n_years_ago_mail_list[0].id);
    }
  }

  goToInitPage($pm_list[0].id);
}

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

init_page();


metatags.title = 'IZ*ONE Private Mail Viewer'

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

<MailDetailSection />
<MailListSection />
<Album />
