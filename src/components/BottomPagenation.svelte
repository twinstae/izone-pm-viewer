<script lang="ts">
    export let nowPage: number;
    export let maxPage: number;
    export let dateString: string;
    export let toYesterday: ()=>void;
    export let toTomorrow: ()=>void | null;
</script>


<div class="static bottom-0">
    <button
    class="rounded bg-red-100 m-2 pl-1 pr-1"
    on:click={()=>{if(nowPage>1) {
        nowPage-=1
    } else {
        alert("시작 페이지입니다.")  
    }}}>
    이전 페이지</button>
    
    <span
    class="bg-white border-2 border-white w-24"
    class:bg-red-300={maxPage==nowPage}
    class:border-red-300={maxPage==nowPage}>
        <input
        type="number"
        class="w-9"
        class:bg-red-300={maxPage==nowPage}
        bind:value={nowPage}
        min=1 max={maxPage}>
        <span>/ {maxPage}</span>
    </span>
    
    <button
    class="rounded bg-red-100 m-2 pl-1 pr-1"
    on:click={()=>{if(nowPage<maxPage){
        nowPage+=1
    } else {
        alert("마지막 페이지입니다.");
    }}}>
        다음 페이지
    </button>
    
    {#if maxPage==nowPage}
        <span>마지막입니다.</span>
    {/if}
    
    <br/>
    
    <button
    class="rounded bg-red-100 m-2 pl-1 pr-1"
    on:click={toYesterday}>
    어제로</button>

    <input type=date class="w-36" bind:value={dateString}>

    <button
    class="rounded bg-red-100 m-2 pl-1 pr-1"
    on:click={toTomorrow}>
        내일로
    </button>
</div>