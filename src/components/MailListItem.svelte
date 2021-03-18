<script lang="ts">
    import Tag from './Tag.svelte';
    import TimeStampTag from './TimeStampTag.svelte';
    import FavoriteHeart from './FavoriteHeart.svelte';
    import MemberTag from './MemberTag.svelte';
    import { now_pm } from '../stores/now';
import { mail_to_tag_dict } from '../stores/mail_to_tag_dict';
import MemberProfileImg from './MemberProfileImg.svelte';
    export let pm;

    $: onMailSelected = ()=>{
        if(pm){$now_pm=pm}
    }
    
    $: getTags = pm => ($mail_to_tag_dict.has(pm.id) ? Array.from($mail_to_tag_dict.get(pm.id)): []);
</script>

<li
class="border-b-2 rounded p-2">
    {#if pm.member}
        <MemberProfileImg pm={pm} />
        <p class="w-10/12 truncate">
            <FavoriteHeart pm={pm}/>
            <MemberTag pm={pm}/>
            <TimeStampTag time={pm.time}/>
            {pm.subject}
        </p>        
        <p on:click={onMailSelected} class="mt-2 text-sm truncate">
            {#each getTags(pm) as tag}
            <Tag tag={tag}/>
            {/each}
            {pm.preview || "..."}
        </p>
    {:else}
        <span
        class="
        border-1 text-lg
        rounded bg-white text-white">
            ...<br/>...
        </span>
    {/if}
</li>
