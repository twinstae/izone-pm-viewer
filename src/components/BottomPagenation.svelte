<script lang="ts">
import { goto, params } from "@roxi/routify";
import { dateString, date_to_str, str_to_date, time_to_dateStr } from "../stores/date";
import { isMobile, now_page, now_pm, show_album, show_list } from "../stores/now";
import { dark, dynamic_dark_bg, dynamic_dark_border, reverse } from "../stores/preferences";
import { favorite, selected_tag_value } from "../stores/tag";
import PinkButton from "./buttons/PinkButton.svelte";
import Datepicker from "./datepicker/Datepicker.svelte";
import Icon from 'fa-svelte';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faRandom } from "@fortawesome/free-solid-svg-icons/faRandom";
import { filtered_list, pm_list_after_search } from "../stores/search";
import { is_unread } from "../stores/tag_to_mail_dict";
import { _ } from 'svelte-i18n';
import t from '../locales';

export let maxPage: number;
export let parent_width: number;
export let mail_per_page: number;

$: overflow = parent_width < 520;

function toYesterday(){
    if ($selected_tag_value){
        return $reverse ? goToPreviousPage() : goToNextPage();
    }
    const [year, month, day] = $dateString.split("-").map(s=>parseInt(s))
    const yesterday = new Date(year, month -1, day-1); 

    dateString.set(date_to_str(yesterday));
    now_page.set(1);
    $goto("./", {...$params, dateString: $dateString, nowPage: 1 });
};

function toTomorrow(){
    if ($selected_tag_value){
        return $reverse ? goToNextPage() : goToPreviousPage();
    }

    const [year, month, day] = $dateString.split("-").map(s=>parseInt(s))
    const tomorrow = new Date(year, month -1, day+1); 
    if (tomorrow > new Date()){
      console.error("미래로 갈 수는 없습니다.");
      return null;
    }

    const tomorrowStr = date_to_str(tomorrow);
    dateString.set(tomorrowStr);
    now_page.set(1);
    $goto("./", {...$params, dateString: tomorrowStr, nowPage: 1});
}

function goToNextPage(){
    if($now_page<maxPage){
        $now_page+=1
        $goto("./", {...$params, nowPage: $now_page});
    } else {
        toTomorrow();
    }
}

function onPageInputKeyDown(e: KeyboardEvent){
  if(e.key == "Enter"){
    $goto("./", {...$params, nowPage: $now_page});
  }
}

function goToPreviousPage(){
    if($now_page>1) {
        $now_page-=1
        $goto("./", {...$params, nowPage: $now_page});
    } else {
        toYesterday();
    }
}

function onPageChange(e){
  if (e.target.value == 0) return null;

  setTimeout(()=>{
    if ($now_page != parseInt($params.nowPage)){
      $goto("./", {...$params, nowPage: $now_page});
    }
  }, 100)
}

show_album.subscribe(v=>{
  if (!v){
    goToNewDate(str_to_date($dateString))
  }
})

params.subscribe(p=>{
    const new_page = parseInt(p.nowPage);
    if($now_page != new_page){
        $now_page = new_page;
    }
    
    if($dateString != p.dateString){
        $dateString = p.dateString;
    }
})

$: isMaxPage = maxPage<=$now_page;


function onKeydown(e: KeyboardEvent){
  if(document.activeElement.className.includes("calendar-button")) return null;
  if(document.activeElement.id == 'EditBody') return null;
  if(document.activeElement.tagName == "INPUT") {
    if (e.key == "Escape") return document.activeElement.blur();
    return null;
  }
  console.log(e.key, e.code);
  if (e.key == "ArrowRight" || e.key == "l") return goToNextMail();
  if (e.key == "ArrowLeft" || e.key == "h") return goToPreviousMail();
  if (e.key == "ArrowDown" || e.key == "j") return scrollUpDown(200);
  if (e.key == "ArrowUp" || e.key == "k") return scrollUpDown(-200);
  if (e.key == "t") return toTomorrow();
  if (e.key == "y") return toYesterday();
  if (e.key == "PageDown" || e.key == "o") return goToNextPage();
  if (e.key == "PageUp" || e.key == "u") return goToPreviousPage();
  if (e.key == "F1") return null; // open help
  if (e.key == "r") return goToRandomMail();
  if (e.key == "p") return click_button("PapagoLink");
  if (e.key == "c") {
    const calendarButton: HTMLButtonElement = document.querySelector("button.calendar-button");
    calendarButton.focus();
    return calendarButton.click();
  }
  if (e.key == "a") return focusById('TagInput');
  if (e.key == "/") return focusById('SearchInput');
  if (e.key == "m") return click_button("ListModeButton");
  if (e.key == "d"){ $dark = !$dark; return null;}
  if ((e.key == "Enter" || e.key == "i") && $isMobile && $show_list) return show_mail();
  if ((e.key == "Escape" || e.key == "q") && $isMobile && !$show_list) return back_to_list();
  if (e.code == "Space" && $is_unread($now_pm.id)) return click_button("ReadButton");
  if (e.key == "f") return favorite($now_pm.id);
}

function show_mail(){
  show_list.set(false);
  $goto("./", {...$params, showList: false})
}

function back_to_list(){
  show_list.set(true);
  $goto("./", {...$params, showList: true});
}

function scrollUpDown(delta: number){
  const el = document.getElementById('MailDetailCardContent');
  el.scrollTo({
    left: 0,
    top: el.scrollTop + delta,
    behavior: 'smooth'
  });
}

function click_button(element_id: string){
  const el = document.getElementById(element_id);
  el.click();
}

function focusById(element_id: string){
  const el = document.getElementById(element_id);
  setTimeout(()=>el.focus(), 100);
}

function goToNextMail(){
  const now_index = getNowMailIndex() + 1;
  if(!$selected_tag_value && now_index >= $filtered_list.length) return goToNextPage();

  now_pm.set($filtered_list[now_index]);
  goToNowMailPage();
}

function goToPreviousMail(){
  const raw_index = getNowMailIndex();
  if(!$selected_tag_value && raw_index == 0) return goToPreviousPage();

  const now_index = raw_index == -1
    ? $filtered_list.length - 1
    : raw_index - 1;

  $now_pm = $filtered_list[now_index];

  goToNowMailPage();
}

function getNowMailIndex(){
  return $filtered_list.map(pm=>pm.id).indexOf($now_pm.id);
}

function goToRandomMail(){
  const random_pm = getRandomMail();
  dateString.set(time_to_dateStr(random_pm.time));
  now_pm.set(random_pm);
  
  show_list.set(false);
  goToNowMailPage();
}

function getRandomMail(): MailT{
  if ($selected_tag_value){
    const i = Math.floor(Math.random() * $filtered_list.length)
    return $filtered_list[i];
  } else {
    const result = $pm_list_after_search[Math.floor(Math.random() * $pm_list_after_search.length)];
    return result.member != "운영팀" ? result : getRandomMail();
  }
}

function onDateSelected(e: CustomEvent){
  const new_date = e.detail.date;
  goToNewDate(new_date)
}

function goToNewDate(new_date){
  if ($selected_tag_value == null || $selected_tag_value == ""){
    now_page.set(1);
    $goto("./", {...$params, dateString: date_to_str(new_date), nowPage: 1});
    return null;
  }

  let result = false;
  $filtered_list.forEach((mail, i)=>{
      if (result) return null;

      const mail_date_str = time_to_dateStr(mail.time);
      const mail_date = str_to_date(mail_date_str);
      if ($reverse ? new_date <= mail_date : mail_date <= new_date){
          const new_page = Math.ceil((i+1) / mail_per_page)
          now_page.set(new_page);
          dateString.set(mail_date_str);
          $goto("./", {...$params, dateString: mail_date_str, nowPage: new_page});

          result = true;
      }
  })
  
  if (! result && $filtered_list.length > 0){
      now_page.set(maxPage);
      const last_mail = $filtered_list[$filtered_list.length-1];
      const newDateString = time_to_dateStr(last_mail.time)
      dateString.set(newDateString);
      $goto("./", {...$params, dateString: newDateString, nowPage: maxPage});
  }
}

function onReverseButtonClick(_){
  reverse.update(v=> !v);

  goToNowMailPage();
}

function goToNowMailPage(){
  const now_index = $filtered_list.map(pm=>pm.id).indexOf($now_pm.id);
  if (now_index == -1){
    $now_page = 1
    $goto("./", {...$params, nowPage: $now_page, now_pm: $now_pm});
  } else {
    const expected_page = Math.floor((now_index) / mail_per_page) + 1
    $now_page = expected_page
    $goto("./", {...$params,
      nowPage: $now_page,
      now_pm: $now_pm.id,
      dateString: time_to_dateStr($now_pm.time),
      showList: $show_list
    });
  }
}

</script>

<svelte:body on:keydown={onKeydown} />

<PinkButton id="BackPageButton" onClick={goToPreviousPage} tooltip="PageUp 또는 u (page'U'p)">
    <Icon icon={faArrowLeft} />
</PinkButton>

<span
id="NowPageSpan"
class="{isMaxPage
    ? ($dark ? 'text-gray-300 bg-red-600 ' : 'bg-red-300 ') + 'border-red-700'
    : $dynamic_dark_bg('bg-white') + " " + $dynamic_dark_border}
    border-2 rounded w-24 p-0.5 pl-2 pr-2"
class:border-red-700={isMaxPage}>
    <input
    id="NowPageInput"
    type="number"
    class="w-12
    {isMaxPage
        ? ($dark ? 'text-gray-300 bg-red-600 ' : 'bg-red-300 ') + 'border-red-700'
        : $dynamic_dark_bg('bg-white')}"
    bind:value={$now_page}
    on:keydown={onPageInputKeyDown}
    on:change={onPageChange}
    min={1} max={maxPage}>
    <span>/ {maxPage}</span>
</span>

<PinkButton id="NextPageButton" onClick={goToNextPage} tooltip="PageDown 또는 o (paged'o'wn)">
  <Icon icon={faArrowRight} />
</PinkButton>

<PinkButton id="RandomMailButton" onClick={goToRandomMail} tooltip="r ('R'andom)">
  <Icon icon={faRandom} />
</PinkButton>

{#if overflow}<br/>{/if}

<PinkButton id="toYesterdayButton" onClick={toYesterday} tooltip="y ('Y'esterday)">
  <Icon icon={faArrowLeft} />
</PinkButton>

{#key $dark}
<Datepicker
  on:dateSelected={onDateSelected}
  selected={str_to_date($dateString)}
  bind:formattedSelected={$dateString}
  format={"#{Y}-#{m}-#{d}"}
  start={new Date(2018 , 8 -1, 31)} end={new Date()}
  buttonTextColor={$dark ? "#ddd" : "black"}
  dayTextColor={$dark ? "#ddd" : "white"}
  buttonBorderColor={$dark ? "rgb(55, 65, 81)" : "rgb(243, 244, 246)"}
  buttonBackgroundColor={$dark ? "rgb(31, 41, 55)" : "white"}
  dayBackgroundColor={$dark ? "rgb(31, 41, 55)" : "white"}
  daysOfWeek={['일','월','화','수','목','금','토'].map(d=>[d+"요일", d])}
  monthsOfYear={[...Array(12).keys()].map(n=>[`${n+1}월`, `${n+1}월`])}
/>
{/key}

<PinkButton id="toTomorrowButton" onClick={toTomorrow} tooltip="t ('T'omorrow)">
    <Icon icon={faArrowRight} />
</PinkButton>

<PinkButton id="ReverseButton" onClick={onReverseButtonClick}>
  {$reverse ? $_(t["오래된 순"]) : $_(t["최신순"]) }
</PinkButton>
