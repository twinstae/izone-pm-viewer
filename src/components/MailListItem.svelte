<script lang="ts">
    import {getMemberName, getMemberColor} from "../pages/door/_constants";
    import Tag from './Tag.svelte';
    import TimeStampTag from './TimeStampTag.svelte';

    export let pm;
    export let onMailSelected;
    export let onFavorite;
    export let favorited;
    export let onSelectTag;
    export let getTags: (pm)=>string[];
</script>

<li
on:dblclick={onMailSelected(pm)}
class="border-b-2 rounded p-2">
    {#if pm.member}
        <label
        class="text-base"
        on:click={onFavorite(pm)}
        for="favorite-{pm.id}">
            {#if favorited(pm)}💖{:else}🤍{/if}
        </label>
        <input type="checkbox"
        class="hidden"
        id="favorite-{pm.id}"/>

        <Tag
            tag={getMemberName(pm)}
            bgColor={getMemberColor(pm)}
            onSelectTag={onSelectTag}/>
        <TimeStampTag time={pm.time} />

        <span class="text-base m-1 ">{pm.subject}</span>
        
        <br/>
        
        <p class="mt-1 text-sm truncate">
            {#each getTags(pm) as tag_item}
            <Tag tag={tag_item} onSelectTag={onSelectTag} />
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
