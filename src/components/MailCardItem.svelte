<script lang="ts">
    import {image_root} from "../stores/constants";
    import Tag from './Tag.svelte';
    import TimeStampTag from './TimeStampTag.svelte';
    import FavoriteHeart from './FavoriteHeart.svelte';
    import MemberTag from './MemberTag.svelte';
    import { now_pm, show_list } from '../stores/now';
    import { mail_to_tag_dict } from "../stores/mail_to_tag_dict";
    import MemberProfileImg from "./MemberProfileImg.svelte";

    export let pm;
    export let index;

    $: getTags = pm => ($mail_to_tag_dict.has(pm.id) ? Array.from($mail_to_tag_dict.get(pm.id)): []);

    $: selectMail = ()=>{
        if(pm){
            $now_pm=pm;
            $show_list = false;
        }
    }

</script>

<div
id="MailCard-{index}"
style="height:152px"
class="
w-64 m-3 p-1
relative
bg-white
shadow-md rounded-md">
    {#if pm.member}
        <div on:click={selectMail}>
            <MemberProfileImg pm={pm}/>
            <h4 class="w-10/12 h-12">{pm.subject}</h4>
        </div>
        <div class="absolute inset-y-0 right-0 m-2">
            <FavoriteHeart pm={pm}/>
        </div>
        
        <div class="flex flex-wrap">
            <MemberTag pm={pm}/>
            <TimeStampTag time={pm.time} />
            {#each getTags(pm) as tag_item}
                <Tag tag={tag_item} />
            {/each}
        </div>
        <p on:click={selectMail} class="m-1 text-sm">{pm.preview}</p>
    {:else}
        <img class="ml-5 m-3 w-10/12" alt="no mail" src="{image_root}izone-logo-card.png"/>
    {/if}
</div>