<script lang="ts">
import BottomPagenation from './BottomPagenation.svelte';
import ListItem from "./MailListItem.svelte";
import MailCardItem from './MailCardItem.svelte';
import Tag from './Tag.svelte';
import AllTagList from './AllTagList.svelte';
import { afterUpdate } from "svelte";
import { dateString, date_to_str, str_to_date, time_to_dateStr } from "../stores/date";
import {selected_tag} from "../stores/tag";
import { now_page, pm_list, isDesktop } from '../stores/now';
import Fuse from 'fuse.js'
import { tag_to_mail_dict } from '../stores/tag_to_mail_dict';
import { fly } from 'svelte/transition';
const options = {
    useExtendedSearch: true,
    keys: [
        "subject",
        "preview",
    ]
};

const fuse = new Fuse($pm_list, options);
let search_input ="";
let fuzzy = false;
$: prefix = fuzzy ? "" : "'"; // fuzzy or include
$: searchBy = prefix + search_input
$: search_result = fuse.search(searchBy);
$: pm_list_after_search = search_input
    ? search_result.map(result=>result.item) 
    : $pm_list;

let lastDateString;
$: now_date = str_to_date($dateString);

let lastNowPage=1;
let lastMailPerPage=3;
let anchor_mail;
    
afterUpdate(() => {
    if (maxPage < $now_page){
        $now_page=maxPage;
        return null;
    }
    if (0 >= $now_page || $now_page == null){
        $now_page=1;
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
        let first_mail_index;
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
    (search_input && no_filter)||
    ($dateString && filterByDate) || 
    no_filter;
$: filtered_list = pm_list_after_search.filter(filter_by);

let mail_list_width;
let mail_list_height;
$: mail_per_width =  Math.floor((mail_list_width) / 280)
$: mail_per_height = Math.floor(mail_list_height * 5/6 / 200);

$: list_length = Math.floor((mail_list_height - 280) / 88)
        - (show ? 2 : 0);
$: mail_per_page = !$isDesktop
    ? Math.min(list_length, 7)
    : isListView ?
        Math.floor((mail_list_height - 200) / 56)
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

$: show ? null : remove_selected_tag();

const remove_selected_tag = ()=>{
    $selected_tag = {color:null, value:null};
    $now_page = 1;
};

</script>

<section
transition:fly={{x:200, duration:200}}
bind:clientWidth={mail_list_width}
bind:clientHeight={mail_list_height}
class="
{$isDesktop ? "h-5/6 w-1/2 lg:w-7/12": "h-full w-11/12"}
relative m-5">

    {#if !$isDesktop}
    <label class="ml-3" for="isListView">태그 목록 보기</label>
    <input id="isListView" type=checkbox bind:checked={show}>
    {:else}
    <label class="ml-5" for="isListView">리스트뷰 {isListView ? "on": "off"}</label>
    <input id="isListView" type=checkbox bind:checked={isListView}>
    {/if}
    {#if !$isDesktop && show }
    <div class="
    h-36 
    m-3 p-2
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

    {#if !isListView && $isDesktop}
        <div
        class="
        h-9/12
        flex flex-wrap">
            {#each mail_list as pm}
            <MailCardItem pm={pm}/>
            {/each}            
        </div>
    {:else}
        <ul class="bg-white rounded shadow m-3">
            {#each mail_list as pm}
                <ListItem pm={pm}/>
            {/each}
        </ul>
    {/if}
    <BottomPagenation maxPage={maxPage}/>
    <span class="bg-red-100 rounded w-content p-0.5 ml-2">
        <label for="fuzzy">부분 일치</label>
        <input id="fuzzy" type="checkbox" bind:checked={fuzzy}/>
    </span>
    <input class="m-2 border-1 border-gray-400 rounded w-32"
    type="text" bind:value={search_input} placeholder="검색"/>
    {#if search_input}
        <span class="bg-red-100 rounded pl-1 pr-1">
            총 {pm_list_after_search.length} 장
        </span>
    {/if}
</section>