<script lang="ts">
    import Tag from './Tag.svelte';
    import TimeStampTag from './TimeStampTag.svelte';
    import FavoriteHeart from './FavoriteHeart.svelte';
    import MemberTag from './MemberTag.svelte';
    export let pm;
    export let onMailSelected;
    export let getTags: (pm)=>{value:string, color:string}[];
</script>

<li
on:dblclick={onMailSelected(pm)}
class="border-b-2 rounded p-2">
    {#if pm.member}
        <FavoriteHeart pm={pm}/>
        <MemberTag pm={pm}/>
        <TimeStampTag time={pm.time}/>

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
