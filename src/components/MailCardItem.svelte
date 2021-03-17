<script lang="ts">
    import {image_root, member_dict, member_name_dict} from "../stores/constants";
    import Tag from './Tag.svelte';
    import TimeStampTag from './TimeStampTag.svelte';
    import FavoriteHeart from './FavoriteHeart.svelte';
    import { mail_to_tag_dict } from "../stores/tag";
    import { profile } from "../stores/preferences";
    import MemberTag from './MemberTag.svelte';
    import { now_pm } from '../stores/now';

    export let pm;

    $: getMemberName =(pm) => member_name_dict[$member_dict[pm.member]]

    const onMailSelected = (pm)=> ()=>{
        if(pm){$now_pm=pm}
    }

    $: getTags = pm => ($mail_to_tag_dict.has(pm.id) ? Array.from($mail_to_tag_dict.get(pm.id)): []);

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
        <img src="{image_root}profile/{$profile}/{getMemberName(pm)}.jpg"
        class="w-10 h-10 ml-1 mr-2 rounded-full float-left"
        alt=""/>
        <h4 class="text-lg m-1 w-11/12 h-12">{pm.subject}</h4>
    </div>
    <div class="absolute inset-y-0 right-0 m-1">
        <FavoriteHeart pm={pm}/>
    </div>
    
    <div class="flex flex-wrap">
        <MemberTag pm={pm}/>
        <TimeStampTag time={pm.time} />
        {#each getTags(pm) as tag_item}
            <Tag tag={tag_item} />
        {/each}
    </div>
    <p class="m-1">{pm.preview} ...</p>
    {:else}
        <img class="h-full pl-6" alt="no mail" src="{image_root}izone-logo.png"/>
    {/if}
</div>