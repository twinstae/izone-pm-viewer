<script lang="ts">
import { goto, params } from "@roxi/routify";
import { dateString, date_to_str, INIT_DATE, str_to_date } from "../stores/date";
import { now_page } from "../stores/now";
import { dark, dynamic_dark_bg, dynamic_dark_border } from "../stores/preferences";
import { selected_tag_value } from "../stores/tag";
import PinkButton from "./buttons/PinkButton.svelte";
import Datepicker from "./datepicker/Datepicker.svelte";
import Icon from 'fa-svelte';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

export let maxPage;
export let parent_width;

$: overflow = parent_width < 400;

function toYesterday(){
    if ($selected_tag_value){
        if($now_page<maxPage)$now_page+=1;
        return null;
    }
    const [year, month, day] = $dateString.split("-").map(s=>parseInt(s))
    const yesterday = new Date(year, month -1, day-1); 
    
    $dateString = date_to_str(yesterday);
    $now_page = 1;
    $goto("./", {...$params, nowPage: 1, dateString: $dateString});
};

function toTomorrow(){
    if ($selected_tag_value){
        if($now_page>1)$now_page-=1;
        return null;
    }
    const [year, month, day] = $dateString.split("-").map(s=>parseInt(s))
    const tomorrow = new Date(year, month -1, day+1); 
    
    $dateString = date_to_str(tomorrow);
    $now_page = 1;
    $goto("./", {...$params, nowPage: 1, dateString: $dateString});
}

function goToNextPage(){
    if($now_page<maxPage){
        $now_page+=1
        $goto("./", {...$params, nowPage: $now_page});
    } else {
        alert("마지막 페이지입니다.");
    }
}

function goToBackPage(){
    if($now_page>1) {
        $now_page-=1
        $goto("./", {...$params, nowPage: $now_page});
    } else {
        alert("시작 페이지입니다.")
    }
}

let lastDateString;

params.subscribe(p=>{
    const new_page = parseInt(p.nowPage);
    if($now_page != new_page){
        $now_page = p.nowPage ? new_page : 1;
    }
    
    if(p.dateString == "NaN-Na-Na" || $dateString == "NaN-Na-Na"){
        $dateString = lastDateString;
        $goto("./", {...$params, dateString: lastDateString})
        return null;
    }

    if($dateString != p.dateString){
        $dateString = p.dateString || INIT_DATE;
        lastDateString = $dateString;
    }
})

$: isMaxPage = maxPage<=$now_page;


const onKeydown = (e)=>{
    if (e.key == "PageDown"){
        if(isMaxPage){ toTomorrow(); }
        else { goToNextPage();}
    }
    if (e.key == "PageUp"){
        if($now_page == 1){ toYesterday(); }
        else { goToBackPage(); }
    }
};

</script>

<svelte:body on:keydown={onKeydown} />

<PinkButton id="BackPageButton" onClick={goToBackPage}>
    <Icon icon={faArrowLeft} />
</PinkButton>

<span
id="NowPageSpan"
class="{isMaxPage
    ? ($dark ? "text-gray-300 bg-red-600 " : "bg-red-300 ") + "border-red-700"
    : $dynamic_dark_bg("bg-white") + " " + $dynamic_dark_border}
    border-2 rounded w-24 p-0.5 pl-2 pr-2"
class:border-red-700={isMaxPage}>
    <input
    id="NowPageInput"
    type="number"
    class="w-9 
    {isMaxPage
        ? ($dark ? "text-gray-300 bg-red-600 " : "bg-red-300 ") + "border-red-700"
        : $dynamic_dark_bg("bg-white")}"
    bind:value={$now_page}
    min=1 max={maxPage}>
    <span>/ {maxPage}</span>
</span>

<PinkButton id="NextPageButton" onClick={goToNextPage}>
    <Icon icon={faArrowRight} />
</PinkButton>

{#if overflow}<br/>{/if}

<PinkButton id="toYesterdayButton" onClick={toYesterday}>
    <Icon icon={faArrowLeft} />
</PinkButton>

{#key $dark}
<Datepicker
on:dateSelected={(e)=>{    
    $now_page = 1;
    $goto("./", {...$params, nowPage: 1, dateString: $dateString});
}}
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

<PinkButton id="toTomorrowButton" onClick={toTomorrow}>
    <Icon icon={faArrowRight} />
</PinkButton>
