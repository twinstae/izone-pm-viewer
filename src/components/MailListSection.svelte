<script lang="ts">
import BottomPagenation from './BottomPagenation.svelte';
import ListItem from "./MailListItem.svelte";
import MailCardItem from './MailCardItem.svelte';
import Tag from './Tag.svelte';
import AllTagList from './AllTagList.svelte';
import { afterUpdate } from "svelte";
import { dateString, date_to_str, str_to_date, time_to_dateStr } from "../stores/date";
import {selected_tag} from "../stores/tag";
import { now_page, isDesktop } from '../stores/now';
import { pm_list_after_search, search_input } from '../stores/search';
import { tag_to_mail_dict } from '../stores/tag_to_mail_dict';
import { fly } from 'svelte/transition';
import Search from './Search.svelte';

let lastDateString;
$: now_date = str_to_date($dateString);

let lastNowPage=1;
let lastMailPerPage=3;
let anchor_mail;
    
afterUpdate(() => {
    if (0 >= $now_page || $now_page == null){
        $now_page=1;
        return null;
    }

    if (maxPage < $now_page){
        $now_page=maxPage;
        return null;
    }

    const first_mail = mail_list[0];
    if (
        lastNowPage != $now_page
        || lastDateString != $dateString
        && first_mail
    ){
        anchor_mail = first_mail;
        lastNowPage = $now_page;
    }

    if (lastMailPerPage != mail_per_page && anchor_mail){
        let first_mail_index = 0;
        filtered_list.forEach((mail,i)=>{
            if (first_mail_index==null && mail==anchor_mail){
                first_mail_index = i;
            }
        })
        $now_page=Math.ceil((first_mail_index+1) / mail_per_page);
        lastNowPage=$now_page;
        lastMailPerPage = mail_per_page;
        return null;
    }

    if (now_date > new Date()){
        $dateString = date_to_str(new Date());
        alert("미래로 갈 수는 없습니다.")
        return null;
    }

    if (!$selected_tag.value || mail_list.length==0) {
        return null
    }

    if (lastDateString != $dateString){

        let result = false;
        filtered_list.forEach((mail, i)=>{
            if (result){
                return null;
            }
            const mail_date_str = time_to_dateStr(mail.time);
            const mail_date = str_to_date(mail_date_str);
            if (mail_date <= now_date){
                $now_page = Math.ceil((i+1) / mail_per_page);
                $dateString = mail_date_str;
                result = true;
            }
        })

        if (result==false){
            $now_page = maxPage;
            const last_mail = filtered_list[filtered_list.length-1];
            $dateString = time_to_dateStr(last_mail.time);
        }
        lastDateString = $dateString;
        return null;
    }
    const first_date_str = time_to_dateStr(mail_list[0].time);
    $dateString = first_date_str;
    lastDateString = first_date_str;
});

$: selected_tag_mail_set = $tag_to_mail_dict.get($selected_tag);

$: filterByTag = (mail)=> selected_tag_mail_set.has(mail.id);

const filterByDate = mail => {
    const date_str = mail.time.split(" ")[0]
    if(typeof(date_str)!=typeof("")) console.log(date_str);
    
    try{
        return date_str.replace(/\//g, "-") == $dateString;
    } catch (e) {
        console.error(e);
        console.log(date_str)
    }
    
    return true;
};

const no_filter = (mail)=>true;

$: filter_by = 
    ($selected_tag.value && filterByTag) ||
    ($search_input && no_filter)||
    ($dateString && filterByDate) || 
    no_filter;
$: filtered_list = $pm_list_after_search.filter(filter_by);

let mail_list_width;
let mail_list_height;
$: mail_per_width =  Math.floor((mail_list_width) / 280)
$: mail_per_height = Math.floor((mail_list_height - 220) / 208);

$: list_length = Math.floor((mail_list_height - 200 - (show ? 150 : 0)) / 102);
$: mail_per_page = !$isDesktop
    ? Math.min(list_length, 7)
    : isListView ?
        Math.floor((mail_list_height - 200) / 74)
        : mail_per_width * mail_per_height;

$: maxPage = Math.ceil(filtered_list.length/mail_per_page);

$: pagination = ($now_page-1) * mail_per_page;
$: getPage = ()=>{
    const page = filtered_list.slice(pagination, pagination + mail_per_page)
    if(page.length < mail_per_page){
        return page.concat(Array(mail_per_page-page.length).fill({"id": "", "member": "", "time": "", "subject": "", "preview": ""}))
    }
    return page;
}
$: mail_list = filtered_list && getPage();

let isListView = false;
let show = false;

const remove_selected_tag = ()=>{
    $selected_tag = {color:null, value:null};
    $now_page = 1;
};

</script>

<section
transition:fly={{x:200, duration:200}}
bind:clientWidth={mail_list_width}
bind:clientHeight={mail_list_height}
style="min-height: {isListView
    ? (show ? 480:320)
    : 450}px;"
class="
{$isDesktop ? "h-full w-1/2 lg:w-7/12": "h-full w-full"}
relative p-5">
    <div class="mb-3 flex flex-row">
        {#if !$isDesktop}
            <label class="p-1" for="isListView">태그 목록 <input id="isListView" type=checkbox bind:checked={show}></label>
            {#if $selected_tag.value}
                <span class="ml-1 mt-1">현재 :</span>
                <Tag tag={$selected_tag} canDelete={true} onRemove={remove_selected_tag}/>    
            {/if}
        {:else}
            <label class="p-1" for="isListView">리스트뷰 {isListView ? "on": "off"} <input id="isListView" type=checkbox bind:checked={isListView}></label>
        {/if}
    </div>
    {#if !$isDesktop && show }
        <div class="
        h-36 p-2 mb-3
        bg-white shadow-2xl rounded-md
        overflow-y-auto">
            <AllTagList/>
        </div>
    {/if}

    {#if !isListView && $isDesktop}
        <div
        class="
        h-9/12 mb-3
        flex flex-wrap">
            {#each mail_list as pm}
            <MailCardItem pm={pm}/>
            {/each}            
        </div>
    {:else}
        <ul class="bg-white rounded shadow mb-3">
            {#each mail_list as pm}
                <ListItem pm={pm}/>
            {/each}
        </ul>
    {/if}
    <BottomPagenation maxPage={maxPage}/>
    <br/>
    <Search search_length={filtered_list.length}/>
</section>