<script lang="ts">
import BottomPagenation from './BottomPagenation.svelte';
import ListItem from "./MailListItem.svelte";
import MailCardItem from './MailCardItem.svelte';
import Tag from './Tag.svelte';
import AllTagList from './AllTagList.svelte';
import { afterUpdate } from "svelte";
import { dateString, date_to_str, str_to_date, time_to_dateStr } from "../stores/date";
import {selected_tag} from "../stores/tag";
import { now_page, isDesktop, show_list, isMobile } from '../stores/now';
import { pm_list_after_search, search_input } from '../stores/search';
import { entries_to_tag_to_mail_dict, tag_to_mail_dict, tag_to_mail_dict_to_entries } from '../stores/tag_to_mail_dict';
import { fly } from 'svelte/transition';
import Search from './Search.svelte';
import PinkButton from './PinkButton.svelte';
import { all_tag_dict, EMPTY_TAG, favorite_tag } from '../stores/all_tag_dict';
import { entries_to_mail_to_tag_dict, mail_to_tag_dict, mail_to_tag_dict_to_json } from '../stores/mail_to_tag_dict';
import { goto, params, redirect } from '@roxi/routify';

let lastDateString;
$: now_date = str_to_date($dateString);

let lastNowPage=1;
let lastMailPerPage=3;
let anchor_mail;

afterUpdate(() => {
    const first_mail = mail_list[0];
    if (
        lastMailPerPage == mail_per_page &&
        (lastNowPage != $now_page || lastDateString != dateString)
    ) {
        anchor_mail = first_mail;
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
        $redirect("./", {...$params, nowPage: $now_page});
        return null;
    }

    if (now_date > new Date()){
        $dateString = date_to_str(new Date());
        alert("미래로 갈 수는 없습니다.")
        $redirect("./", {...$params, dateString: $dateString});
        return null;
    }

    if (mail_list.length==0 || !first_mail && $params.nowPage != 1) {
        $redirect("./", {...$params, nowPage: 1});
        return null
    }

    if (lastNowPage != $now_page){
        lastNowPage = $now_page;
        const first_date_str = time_to_dateStr(first_mail.time);
        $dateString = first_date_str;
        lastDateString = first_date_str;
        $redirect("./", {
            ...$params,
            nowPage: $now_page, dateString: first_date_str});

        return null;
    }

    if (lastDateString !== $dateString){
        let result = false;
        filtered_list.forEach((mail, i)=>{
            if (result || !mail){
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

        if (result==false && filtered_list.length > 0){
            $now_page = maxPage;
            const last_mail = filtered_list[filtered_list.length-1];
            $dateString = time_to_dateStr(last_mail.time);
        }
        lastDateString = $dateString;
        $redirect("./", {...$params, nowPage: $now_page, dateString: $dateString});
        return null;
    }
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

let section_width;
let section_height;
$: mail_per_width =  Math.floor((section_width - 33) / 280)
$: mail_per_height = Math.floor((section_height - 220) / 164);
$: mail_per_page = $isMobile
    ? 5
    : isListView
        ? Math.floor((section_height - 200) / 62)
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
    $selected_tag = EMPTY_TAG;
    $now_page = 1;
    $goto("./", {...$params, tag: ""})
};

function postBackup(url, data){
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res=>{ console.log(data) })
    .catch((e)=>{
        console.error(url+" 백업에 실패했습니다.");
        console.error(e)
    })
}

const upload_tags = ()=>{
    postBackup("/all-tag-dict/", {
        tag_list: [...$all_tag_dict].map(entry=>entry[1])
    })
    postBackup("/mail-tag-dict/", {
        mail_to_tag_dict: mail_to_tag_dict_to_json($mail_to_tag_dict),
        tag_to_mail_dict: tag_to_mail_dict_to_entries($tag_to_mail_dict)
    })
}

const download_tags = async () => {
    const tag_list: { value: string, color: string }[] = 
        await fetch("/all-tag-dict/")
        .then(res=>res.json()).then(data=>data.tag_list);
    
    const data = await fetch("/mail-tag-dict/").then(res=>res.json())
    
    const tag_to_mail_entries = data.tag_to_mail_dict;
    const mail_to_tag_entrise = data.mail_to_tag_dict;

    $selected_tag = EMPTY_TAG;
    
    $all_tag_dict = tag_list.reduce((acc, tag)=>{
        acc.set(tag.value, tag);
        return acc;
    }, new Map([["💖", favorite_tag]]));
    console.log("all_tag_dict 백업 다운로드 완료");

    $tag_to_mail_dict = entries_to_tag_to_mail_dict(tag_to_mail_entries);
    $mail_to_tag_dict = entries_to_mail_to_tag_dict(mail_to_tag_entrise);
    console.log("mail_tag_dict 백업 다운로드 완료");
};

</script>

<section
id="MailListSection"
class:hidden={$isMobile && !$show_list}
transition:fly={{x:200, duration:200}}
bind:clientWidth={section_width}
bind:clientHeight={section_height}
style="
min-height: {isListView || $isMobile
    ? (show ? 520:360)
    : 490}px;
"
class="h-full
{$isDesktop ? "w-8/12": "h-full w-full"}
relative pl-4 pr-4 pt-2">
    <div class="mb-1 flex flex-row">
        {#if $isMobile}
            <label class="p-1" for="isListView">
                태그 목록
                <input id="isListView" type=checkbox bind:checked={show}>
            </label>
            {#if $selected_tag.value}
                <span class="ml-1 mt-1">현재 :</span>
                <Tag tag={$selected_tag} canDelete={true} onRemove={remove_selected_tag}/>    
            {/if}
        {:else}
            <label class="p-1" for="isListView">
                리스트뷰 {isListView ? "on": "off"}
                <input id="isListView" type=checkbox bind:checked={isListView}>
            </label>
        {/if}
    </div>
    {#if false}
    <div class="mb-1 flex flex-row">
        <PinkButton id="backup" onClick={download_tags}>태그 불러오기⬇️</PinkButton>
        <PinkButton id="backup" onClick={upload_tags}>태그 올리기⬆️</PinkButton>
    </div>
    {/if}
    <div
    class:hidden={!($isMobile && show)}
    class="
    h-36 p-2 mb-3
    bg-white shadow-2xl rounded-md
    overflow-y-auto">
        <AllTagList/>
    </div>
    {#if !isListView && $isDesktop}
        <div
        id="MailCardView"
        class="
        mb-3 flex flex-wrap">
            {#each mail_list as pm, i}
            <MailCardItem pm={pm} index={i}/>
            {/each}            
        </div>
    {:else}
        <ul id="MailItemList"
        style="max-width: 728px;"
        class="bg-white rounded shadow-xl mb-3">
            {#each mail_list as pm, i}
                <ListItem index={i} pm={pm} hidden={$isMobile  && (section_height < 400 || show) && i>0}/>
            {/each}
        </ul>
    {/if}
    <BottomPagenation maxPage={maxPage}/>
    <br/>
    <Search search_length={filtered_list.length}/>
</section>