<script lang="ts">
    import Tag from './Tag.svelte';
    import TimeStampTag from './TimeStampTag.svelte';
    import FavoriteHeart from './FavoriteHeart.svelte';
    import MemberTag from './MemberTag.svelte';
    import { isDesktop, isMobile, now_pm, show_list } from '../stores/now';
    import { mail_to_tag_dict } from '../stores/mail_to_tag_dict';
    import MemberProfileImg from './MemberProfileImg.svelte';
    export let pm;
    export let hidden;

    $: onMailSelected = ()=>{
        if(pm){$now_pm=pm}
        $show_list = false;
    }
    
    $: getTags = pm => ($mail_to_tag_dict.has(pm.id) ? Array.from($mail_to_tag_dict.get(pm.id)): []);
</script>

<li
class:hidden={hidden}
style="height: {$isDesktop ? '62px' : '84px'}"
class="border-b-2 rounded p-1 w-full">
    <div>
    {#if pm.member}
        <MemberProfileImg pm={pm}/>
        <p class="truncate">
            <FavoriteHeart pm={pm}/>
            <MemberTag pm={pm}/>
            <TimeStampTag time={pm.time}/>
            {#if $isMobile }<br/>{/if}
            {pm.subject}
        </p>        
        <p on:click={onMailSelected} class="ml-1 mt-1 text-sm truncate">
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
        </span>
    {/if}
    </div>
</li>
{#if hidden}
<li class="border-b-2 rounded w-full text-gray-500 truncate" style="font-size:10px; height: 20px;">
    {#if pm.member}
    <MemberTag pm={pm} size=""/>
    <TimeStampTag time={pm.time} size=""/>
    <strong>{pm.subject}</strong>{" "+pm.preview}
    {/if}
</li>
{/if}
