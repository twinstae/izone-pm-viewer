<script lang="ts">
import { goto, params } from "@roxi/routify";

import { dateString, date_to_str, INIT_DATE } from "../stores/date";
import { now_page } from "../stores/now";
import { selected_tag } from "../stores/tag";
import PinkButton from "./PinkButton.svelte";
export let maxPage: number;

function toYesterday(){
    if ($selected_tag.value){
        if($now_page<maxPage)$now_page+=1;
        return null;
    }
    const [year, month, day] = $dateString.split("-").map(s=>parseInt(s))
    const yesterday = new Date(year, month -1, day-1); 
    
    $dateString = date_to_str(yesterday);
    $now_page = 1;
    $goto("./", {...$params, nowPage: $now_page, dateString: $dateString});
};

function toTomorrow(){
    if ($selected_tag.value){
        if($now_page>1)$now_page-=1;
        return null;
    }
    const [year, month, day] = $dateString.split("-").map(s=>parseInt(s))
    const tomorrow = new Date(year, month -1, day+1); 
    
    $dateString = date_to_str(tomorrow);
    $now_page = 1;
    $goto("./", {...$params, nowPage: $now_page, dateString: $dateString});
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

params.subscribe(p=>{
    const new_page = parseInt(p.nowPage);
    if($now_page != new_page){
        $now_page = p.nowPage ? new_page : 1;
    }
    if($dateString != p.dateString){
        $dateString = p.dateString || INIT_DATE;
    }
})

</script>

    <PinkButton id="BackPageButton" onClick={goToBackPage}> 이전 </PinkButton>
    
    <span
    id="NowPageSpan"
    class="bg-white border-2 border-gray-400 rounded w-24 p-1"
    class:bg-red-300={maxPage<=$now_page}
    class:border-red-300={maxPage<=$now_page}>
        <input
        id="NowPageInput"
        type="number"
        class="w-9"
        class:bg-red-300={maxPage<=$now_page}
        bind:value={$now_page}
        min=1 max={maxPage}>
        <span>/ {maxPage}</span>
    </span>
    
    <PinkButton id="NextPageButton" onClick={goToNextPage}> 다음 </PinkButton>
    
    <br/>
    
    <PinkButton id="toYesterdayButton" onClick={toYesterday}> 어제 </PinkButton>

    <input type=date class="border-1 w-36 border-gray-400 rounded"
    bind:value={$dateString} on:change={()=>{
        $now_page = 1;
        $goto("./", {...$params, nowPage: $now_page, dateString: $dateString});
    }}>

    <PinkButton id="toTomorrowButton" onClick={toTomorrow}> 내일 </PinkButton>
