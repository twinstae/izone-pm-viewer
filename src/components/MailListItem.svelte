<script lang="ts">
    import {getMemberName, getMemberColor} from "../pages/door/_constants";
    import Tag from './Tag.svelte';
    import FavoriteHeart from './FavoriteHeart.svelte';

    export let pm;
    export let onMailSelected;
    export let getTags: (pm)=>{value:string, color:string}[];
</script>

<li
on:dblclick={onMailSelected(pm)}
class="border-b-2 rounded p-2">
    {#if pm.member}
        <FavoriteHeart pm={pm}/>
        <Tag
            tag={{value: getMemberName(pm),
                 color: getMemberColor(pm)}}/>
        <Tag tag={{value: pm.time, color: "pink"}}/>

        <span class="text-base m-1 ">{pm.subject}</span>
        
        <br/>
        
        <p class="mt-1 text-sm truncate">
            {#each getTags(pm) as tag}
            <Tag tag={tag}/>
            {/each}
            {pm.preview}
        <p/>
    {:else}
        <span
        class="
        border-1 m-1 p-1 
        rounded bg-white
        text-base text-white">
            ...<br/>...
        </span>
    {/if}
</li>
