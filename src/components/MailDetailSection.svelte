<script lang="ts">
import Tag from './Tag.svelte';
import MailDetailCard from './MailDetailCard.svelte';
import AllTagList from './AllTagList.svelte';
import {selected_tag} from "../stores/tag";
import { now_page, isDesktop, show_list } from '../stores/now';
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
class="max-h-3/4 m-5 {$isDesktop ? "" :"w-full"}"
bind:clientHeight={height}>
    {#if 650 >= height && $isDesktop}
    <label for="isListView">태그 목록 보기</label>
    <input id="isListView" type=checkbox bind:checked={show}>
    {/if}

    {#if 650 < height && $isDesktop || show }
    <div class="
    h-36 w-80
    p-2
    bg-white shadow-2xl rounded-md
    overflow-y-auto">
        {#if $selected_tag.value}
        <span class="text-xs">현재 선택된 태그 : 
            <Tag tag={$selected_tag}/>
        </span>
        <button
        class="text-xs shadow rounded bg-red-400 p-1"
        on:click={remove_selected_tag}>
            돌아가기
        </button>
        <br/>
        {/if}
        <AllTagList/>
    </div>
    {/if}
    {#if !$isDesktop}
    <button
    class="text-base shadow rounded bg-red-200 p-1 mt-5"
    on:click={()=>{$show_list=true}}>
        돌아가기 🗃️
    </button>
    {/if}
    <MailDetailCard/>
</section>