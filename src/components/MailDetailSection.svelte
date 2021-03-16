<script lang="ts">
import Tag from './Tag.svelte';
import MailDetailCard from './MailDetailCard.svelte';
import AllTagList from './AllTagList.svelte';
import {selected_tag} from "../stores/tag";
import { now_page } from '../stores/now';

const remove_selected_tag = ()=>{
    selected_tag.set({color:null, value:null});
    now_page.set(1);
};

</script>

<section class="h-full">
    <div class="
    h-36 w-80
    ml-10 mt-2 p-2
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
    <MailDetailCard/>
</section>