<script lang="ts">
import Tag from './Tag.svelte';
import MailDetailCard from './MailDetailCard.svelte';
import AllTagList from './AllTagList.svelte';
import {selected_tag} from "../stores/tag";
import { now_page, isDesktop, translate_url, show_list, isMobile } from '../stores/now';
import { fly } from 'svelte/transition';
import { EMPTY_TAG } from '../stores/all_tag_dict';
import { goto, params } from '@roxi/routify';

const remove_selected_tag = ()=>{
    $selected_tag = EMPTY_TAG;
    $now_page = 1;
    $goto("./", {...$params, tag: ""})
};

let height;
let show;

</script>

<section
class:hidden={$isMobile && $show_list}
transition:fly={{x:-400, duration:400}}
class="h-full p-3 {$isDesktop ? "w-4/12" :"w-full"} flex flex-col"
bind:clientHeight={height}>
    <div class="flex flex-row">
        {#if $isMobile}
        <button
        class="shadow rounded bg-red-200 p-1 mr-1"
        on:click={()=>{
            $show_list=true;
            $goto("./", { ...$params, showList: true});
        }}>
            목록🗃️
        </button>
        {/if}
        <div class="w-16 p-1 shadow rounded bg-red-100 mr-1">
            <a
            href={$translate_url}
            target="_blank">
                번역<img class="w-5 h-5 mt-0.5 float-right" src="./img/papago.png" alt="파파고 번역하기"/>
            </a>
        </div>
        {#if 650 >= height && $isDesktop}
        <label class="p-1" for="isListView">태그 목록 <input id="isListView" type=checkbox bind:checked={show}></label>
        
        {/if}
        {#if $selected_tag.value}
            <span class="ml-1 mt-1">현재 :</span>
            <Tag tag={$selected_tag} canDelete={true} onRemove={remove_selected_tag}/>
        {/if}
    </div>

    <div
    class:hidden={!((650 < height || show) && $isDesktop)}
    style="min-height:43px;"
    class="
    h-36 mt-3 mb-3 p-2
    bg-white shadow-2xl rounded-md
    overflow-y-auto">
        <AllTagList/>
    </div>
    <MailDetailCard show={650 < height || show}/>
</section>