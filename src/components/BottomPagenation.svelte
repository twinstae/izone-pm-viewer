<script lang="ts">
import { goto, params } from "@roxi/routify";
import { dateString, date_to_str, str_to_date, time_to_dateStr } from "../stores/date";
import { isMobile, now_page, now_pm, pm_list, show_list } from "../stores/now";
import { dark, dynamic_dark_bg, dynamic_dark_border } from "../stores/preferences";
import { selected_tag_value } from "../stores/tag";
import PinkButton from "./buttons/PinkButton.svelte";
import Datepicker from "./datepicker/Datepicker.svelte";
import Icon from 'fa-svelte';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { filtered_list } from "../stores/search";
import { favorite } from "../stores/tag_to_mail_dict";

export let maxPage: number;
export let parent_width: number;
export let mail_per_page: number;

$: overflow = parent_width < 450;

function toYesterday(){
    if ($selected_tag_value){
        if($now_page<maxPage)$now_page+=1;
        return null;
    }
    const [year, month, day] = $dateString.split("-").map(s=>parseInt(s))
    const yesterday = new Date(year, month -1, day-1); 

    dateString.set(date_to_str(yesterday));
    now_page.set(1);
    $goto("./", {...$params, dateString: $dateString, nowPage: 1 });
};

function toTomorrow(){
    if ($selected_tag_value){
        if($now_page>1)$now_page-=1;
        return null;
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

function goToPreviousPage(){
    if($now_page>1) {
        $now_page-=1
        $goto("./", {...$params, nowPage: $now_page});
    } else {
        toYesterday();
    }
}

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
  if (e.key == "PageDown") return goToNextPage();
  if (e.key == "PageUp") return goToPreviousPage();
  if (e.key == "ArrowRight" || e.key == "l") return toTomorrow();
  if (e.key == "ArrowLeft" || e.key == "h") return toYesterday();
  if (e.key == "r") return goToRandomMail();
  if (e.key == "c") {
    const calendarButton: HTMLButtonElement = document.querySelector("button.calendar-button");
    return calendarButton.click();
  }
  if (e.key == "m") {
  }
  if (e.key == "d"){ $dark = !$dark }
  if (e.key == "ArrowDown" || e.key == "j") return goToNextMail();
  if (e.key == "ArrowUp" || e.key == "k") return goToPreviousMail();
  if (e.key == "Enter" && $isMobile && $show_list){
    show_list.set(false);
    $goto("./", {...$params, showList: false})
  }
  if (e.key == "Escape" && $isMobile && !$show_list){
    show_list.set(true);
    $goto("./", {...$params, showList: true})
  }
  if (e.key == "f") return favorite($now_pm.id);

  console.log(e.key, e.code);
}


function goToNextMail(){
  const now_index = getNowMailIndex();
  if(now_index + 1 >= $filtered_list.length) return alert("마지막 메일입니다.");

  $now_pm = $filtered_list[now_index + 1];

  if ($now_page + 1 <= maxPage && now_index + 1 >= mail_per_page * $now_page){
    $now_page+=1
    $goto("./", {...$params, now_pm: $now_pm.id, nowPage: $now_page});
  } else {
    $goto("./", { ...$params, now_pm: $now_pm.id });
  }
}

function goToPreviousMail(){
  const now_index = getNowMailIndex();
  if(now_index - 1 < 0) return alert("첫 번째 메일입니다.");

  $now_pm = $filtered_list[now_index - 1];

  if ($now_page - 1 > 0 && now_index <= mail_per_page * ($now_page-1)){
    $now_page-=1
    $goto("./", {...$params, now_pm: $now_pm.id, nowPage: $now_page});
  } else {
    $goto("./", { ...$params, now_pm: $now_pm.id });
  }
}

function getNowMailIndex(){
  return $filtered_list.map(pm=>pm.id).indexOf($now_pm.id);
}

function goToRandomMail(){
  const random_pm = getRandomMail();
  now_pm.set(random_pm);
  show_list.set(false);
  $goto("./", {...$params, now_pm: random_pm.id, showList: false});
}

function getRandomMail(): MailT{
  const result = $pm_list[Math.floor(Math.random() * $pm_list.length)];
  return result.member != "운영팀" ? result : getRandomMail();
}

function onDateSelected(e: CustomEvent){
  const new_date = e.detail.date;
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
      if (mail_date <= new_date){
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
</script>

<svelte:body on:keydown={onKeydown} />

<PinkButton id="BackPageButton" onClick={goToPreviousPage} tooltip="PageUp">
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
    class="w-9 
    {isMaxPage
        ? ($dark ? 'text-gray-300 bg-red-600 ' : 'bg-red-300 ') + 'border-red-700'
        : $dynamic_dark_bg('bg-white')}"
    bind:value={$now_page}
    min={1} max={maxPage}>
    <span>/ {maxPage}</span>
</span>

<PinkButton id="NextPageButton" onClick={goToNextPage} tooltip="PageDown">
  <Icon icon={faArrowRight} />
</PinkButton>

<PinkButton id="RandomMailButton" onClick={goToRandomMail} tooltip="r">
  <span>🔀</span>
</PinkButton>

{#if overflow}<br/>{/if}

<PinkButton id="toYesterdayButton" onClick={toYesterday} tooltip="h 또는 ←">
    <Icon icon={faArrowLeft} />
</PinkButton>

{#key $dark}
<Datepicker
  on:dateSelected={onDateSelected}
  selected={str_to_date($dateString)}
  bind:formattedSelected={$dateString}
  format={"#{Y}-#{m}-#{d}"}
  start={new Date(2019 , 1 -1, 18)} end={new Date()}
  buttonTextColor={$dark ? "#ddd" : "black"}
  dayTextColor={$dark ? "#ddd" : "white"}
  buttonBorderColor={$dark ? "rgb(55, 65, 81)" : "rgb(243, 244, 246)"}
  buttonBackgroundColor={$dark ? "rgb(31, 41, 55)" : "white"}
  dayBackgroundColor={$dark ? "rgb(31, 41, 55)" : "white"}
  daysOfWeek={['일','월','화','수','목','금','토'].map(d=>[d+"요일", d])}
  monthsOfYear={[...Array(12).keys()].map(n=>[`${n+1}월`, `${n+1}월`])}
/>
{/key}

<PinkButton id="toTomorrowButton" onClick={toTomorrow} tooltip="l 또는 →">
    <Icon icon={faArrowRight} />
</PinkButton>
