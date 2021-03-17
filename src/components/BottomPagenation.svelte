<script lang="ts">
import { dateString, date_to_str } from "../stores/date";
import { now_page } from "../stores/now";
import { selected_tag } from "../stores/tag";
export let maxPage: number;

function toYesterday(){
    if ($selected_tag.value){
        if($now_page<maxPage)$now_page+=1;
        return null;
    }
    const [year, month, day] = $dateString.split("-").map(s=>parseInt(s))
    const yesterday = new Date(year, month -1, day-1); 
    
    dateString.set(date_to_str(yesterday));
    $now_page = 1;
};

function toTomorrow(){
    if ($selected_tag.value){
        if($now_page>1)$now_page-=1;
        return null;
    }
    const [year, month, day] = $dateString.split("-").map(s=>parseInt(s))
    const tomorrow = new Date(year, month -1, day+1); 
    
    dateString.set(date_to_str(tomorrow));
    $now_page = 1;
}
</script>


<div class="static bottom-0">
    <button
    class="rounded bg-red-100 m-2 pl-1 pr-1"
    on:click={()=>{if($now_page>1) {
        $now_page-=1
    } else {
        alert("시작 페이지입니다.")  
    }}}>
    이전 페이지</button>
    
    <span
    class="bg-white border-2 border-gray-400 rounded w-24"
    class:bg-red-300={maxPage<=$now_page}
    class:border-red-300={maxPage<=$now_page}>
        <input
        type="number"
        class="w-9 "
        class:bg-red-300={maxPage<=$now_page}
        bind:value={$now_page}
        min=1 max={maxPage}>
        <span>/ {maxPage}</span>
    </span>
    
    <button
    class="rounded bg-red-100 m-2 pl-1 pr-1"
    on:click={()=>{if($now_page<maxPage){
        $now_page+=1
    } else {
        alert("마지막 페이지입니다.");
    }}}>
        다음 페이지
    </button>
    
    {#if maxPage <= $now_page}
        <span>마지막입니다.</span>
    {/if}
    
    <br/>
    
    <button
    class="rounded bg-red-100 m-2 pl-1 pr-1"
    on:click={toYesterday}>
    어제로</button>

    <input type=date class="border-2 border-gray-400 rounded" bind:value={$dateString}>

    <button
    class="rounded bg-red-100 m-2 pl-1 pr-1"
    on:click={toTomorrow}>
        내일로
    </button>
</div>