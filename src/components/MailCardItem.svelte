<script lang="ts">
    import {getMemberName, getMemberColor} from "../pages/door/_constants";
    import Tag from './Tag.svelte';
    import TimeStampTag from './TimeStampTag.svelte';

    export let pm;
    export let onMailSelected;
    export let onFavorite;
    export let favorited;
    export let onSelectTag;
    export let preferences;
    export let getTags: (pm)=>string[];
</script>

<div
on:dblclick={onMailSelected(pm)}
class="w-64 h-52 m-3 p-2
relative
bg-white
shadow-md rounded-md
overflow-y-auto">
    {#if pm.member}
    <div class="relative overflow-hidden">
        <img src="/img/profile/{preferences.profile}/{getMemberName(pm)}.jpg"
        class="w-10 h-10 ml-1 mr-2 rounded-full float-left"
        alt=""/>
        <h4 class="text-lg m-1 w-11/12 h-12">{pm.subject}</h4>
    </div>
    <div
    class="
    absolute
    inset-y-0 right-1 m-1">
        <label
        class="text-xl"
        on:click={onFavorite(pm)}
        for="favorite-{pm.id}">
            {#if favorited(pm)}💖{:else}🤍{/if}
        </label>
        <input type="checkbox"
        class="hidden"
        id="favorite-{pm.id}"/>
    </div>
    <div class="flex flex-wrap">
        <Tag
            tag={getMemberName(pm)}
            bgColor={getMemberColor(pm)}
            onSelectTag={onSelectTag}/>
        <TimeStampTag time={pm.time} />
        {#each getTags(pm) as tag_item}
            <Tag tag={tag_item} onSelectTag={onSelectTag} />
        {/each}
    </div>
    <p class="m-1">{pm.preview} ...</p>
    {:else}
        <img class="object-center p-10 pt-12" alt="no mail" src="/img/izone-logo.png"/>
    {/if}
</div>