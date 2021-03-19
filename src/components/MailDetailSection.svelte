<script lang="ts">
import Tag from './Tag.svelte';
import MailDetailCard from './MailDetailCard.svelte';
import AllTagList from './AllTagList.svelte';
import {selected_tag} from "../stores/tag";
import { now_page, isDesktop, translate_url, show_list } from '../stores/now';
import { fly } from 'svelte/transition';

const remove_selected_tag = ()=>{
    $selected_tag = {color:null, value:null};
    $now_page = 1;
};

let height;
let show;
</script>

<section 
transition:fly={{x:-400, duration:400}}
class="h-full p-5 {$isDesktop ? "" :"w-full"} flex flex-col"
bind:clientHeight={height}>
    <div>
        {#if 650 >= height && $isDesktop}
        <label for="isListView">태그 목록 보기</label>
        <input id="isListView" type=checkbox bind:checked={show}>
        {/if}
        <a class="
        p-1 shadow rounded bg-red-100"
        href={$translate_url}
        target="_blank">
            파파고 번역 🇯🇵🇰🇷
        </a>
        {#if !$isDesktop}
        <button
        class="shadow rounded bg-red-200 p-1"
        on:click={()=>{$show_list=true}}>
            돌아가기 🗃️
        </button>
        {/if}
        {#if $selected_tag.value}
            <span>현재 :</span>
            <Tag tag={$selected_tag} canDelete={true} onRemove={remove_selected_tag}/>
        {/if}
    </div>
    {#if (650 < height || show) && $isDesktop }
        <div
        style="min-height:43px;"
        class="
        h-36 w-80 mt-3 mb-3 p-2
        bg-white shadow-2xl rounded-md
        overflow-y-auto">
            <AllTagList/>
        </div>
    {/if}
    <MailDetailCard show={650 < height || show}/>
</section>