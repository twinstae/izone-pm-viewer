<script lang="ts">
    import Tag from './Tag.svelte';
    import TimeStampTag from './TimeStampTag.svelte';
    import FavoriteHeart from './FavoriteHeart.svelte';
    import MemberTag from './MemberTag.svelte';
    import { mail_to_tag_dict } from '../stores/tag';
    import { now_pm } from '../stores/now';
    export let pm;

    const onMailSelected = (pm)=> ()=>{
        if(pm){$now_pm=pm}
    }
    
    $: getTags = pm => ($mail_to_tag_dict.has(pm.id) ? Array.from($mail_to_tag_dict.get(pm.id)): []);
</script>

<li
on:dblclick={onMailSelected(pm)}
class="border-b-2 rounded p-2">
    {#if pm.member}
        <p class="w-full truncate">
            <FavoriteHeart pm={pm}/>
            <MemberTag pm={pm}/>
            <TimeStampTag time={pm.time}/>
            {pm.subject}
        </p>        
        <p class="mt-2 text-sm truncate">
            {#each getTags(pm) as tag}
            <Tag tag={tag}/>
            {/each}
            {pm.preview || "..."}
        <p/>
    {:else}
        <span
        class="
        border-1 text-lg
        rounded bg-white text-white">
            ...<br/>...
        </span>
    {/if}
</li>
