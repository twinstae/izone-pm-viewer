<script lang="ts">
import { page } from "@roxi/routify";
import { afterUpdate } from "svelte";
import pm_list from "./_pm_list.json";

import Tag from './_Tag.svelte';
import BottomPagenation from '../../components/BottomPagenation.svelte';
import { member_dict, member_name_dict, getMemberName} from "./_constants";
import ListItem from "../../components/MailListItem.svelte";
import MailCardItem from '../../components/MailCardItem.svelte';
import MailDetailCard from '../../components/MailDetailCard.svelte';
import AllTagList from '../../components/AllTagList.svelte';
import { date_to_str, str_to_date, time_to_dateStr } from "../../stores/date";

const profile_list = ["one-the-story", "latest"];
const preferences = {
    profile: "latest",
    isListView: false
};

let dateString = date_to_str(new Date());
let lastDateString;


function toYesterday(){
    if (selected_tag){
        if(now_page<maxPage)now_page+=1;
        return null;
    }
    const [year, month, day] = dateString.split("-").map(s=>parseInt(s))

    const newDate = new Date(year, month -1, day-1); //month는 0부터 시작하기에 보정

    dateString = date_to_str(newDate);
    now_page = 1;
};

function toTomorrow(){
    if (selected_tag){
        if(now_page>1)now_page-=1;
        return null;
    }
    const [year, month, day] = dateString.split("-").map(s=>parseInt(s))

    const newDate = new Date(year, month -1, day+1);
    
    dateString = date_to_str(newDate);
    now_page = 1;
}

afterUpdate(() => {
    const now_date = str_to_date(dateString)
    if (now_date > new Date()){
        dateString = date_to_str(new Date());
        alert("미래로 갈 수는 없습니다.")
        return null;
    }
	if (!selected_tag) {
        return null
    }
    if (lastDateString == dateString){
        const first_date_str = time_to_dateStr(mail_list[0].time);
        dateString = first_date_str
        lastDateString = dateString;
        return null;
    } 

    let result = false;
    filtered_list.forEach((mail, i)=>{
        if (result){
            return null;
        }
        const mail_date_str = time_to_dateStr(mail.time);
        const mail_date = str_to_date(mail_date_str);
        if (mail_date <= now_date){
            now_page = Math.ceil((i+1) / mail_per_page);
            dateString = mail_date_str;
            result = true;
        }
    })

    if (result==false){
        now_page = maxPage;
        const last_mail = filtered_list[filtered_list.length-1];
        dateString = time_to_dateStr(last_mail.time);
    }
    lastDateString = dateString;
});

const filterByDate = mail => mail.time.split(" ")[0].replaceAll("/", "-") == dateString;

let mail_to_tag_dict: Map<string, Set<string>> = new Map();
let tag_to_mail_dict: Map<string, Set<string>> = new Map(
    [["💖", new Set()]]
);
let tag_input;

$: all_tags = Array.from(tag_to_mail_dict.keys());

let selected_tag: string = "";
const onSelectTag = (tag_item)=>
    ()=>{
        selected_tag=tag_item;
        now_page = 1;
    }

const remove_selected_tag = ()=>{
    selected_tag="";
    now_page = 1;
};
$: selected_tag_mail_set = tag_to_mail_dict.get(selected_tag);
$: filterByTag = (mail)=> selected_tag_mail_set.has(mail.id);

$: getTags = pm => (mail_to_tag_dict.has(pm.id) ? Array.from(mail_to_tag_dict.get(pm.id)): []);
$: now_tags = getTags(now_pm);

const onAddTag = e => {
    if(e.code==="Enter"){
        if (tag_to_mail_dict.has(tag_input)){
            tag_to_mail_dict.get(tag_input).add(now_pm.id);
        } else {
            tag_to_mail_dict.set(tag_input, new Set([now_pm.id]));
        }
        tag_to_mail_dict=tag_to_mail_dict;

        if (mail_to_tag_dict.has(now_pm.id)){
            mail_to_tag_dict.get(now_pm.id).add(tag_input)
        } else {
            mail_to_tag_dict.set(now_pm.id, new Set([tag_input]));
        }       
        mail_to_tag_dict=mail_to_tag_dict;

        tag_input="";                 
    }
}

const onDeleteTag = (tag_item) => ()=>{
    const tag_set = tag_to_mail_dict.get(tag_item);
    tag_set.delete(now_pm.id);
    if (tag_set.size==0){
        tag_to_mail_dict.delete(tag_item);
        if(tag_item == selected_tag){
            selected_tag = null;
        }
    }
    
    tag_to_mail_dict=tag_to_mail_dict;

    mail_to_tag_dict.get(now_pm.id).delete(tag_item)
    mail_to_tag_dict=mail_to_tag_dict;
    console.log("deleted");
}

$: favorite_set = tag_to_mail_dict.get("💖");
$: favorited = pm => favorite_set && favorite_set.has(pm.id);

$: onFavorite = (pm)=>()=>{
    if (tag_to_mail_dict.get("💖").has(pm.id)){
        tag_to_mail_dict.get("💖").delete(pm.id);
    } else {
        tag_to_mail_dict.get("💖").add(pm.id);
    }
    tag_to_mail_dict = tag_to_mail_dict;
}

const no_filter = (mail)=>true;

$: filter_by = 
    (selected_tag && filterByTag) ||
    (dateString && filterByDate) || 
    no_filter;
$: filtered_list = pm_list.filter(filter_by);

let mail_list_width;
let mail_list_height;
$: mail_per_width =  Math.floor((mail_list_width) / 280)
$: mail_per_height = Math.floor(mail_list_height * 5/6 / 200);
$: mail_per_page = preferences.isListView ? 10 : mail_per_width * mail_per_height || 6;

$: maxPage = Math.ceil(filtered_list.length/mail_per_page)
let now_page = 1;
$: pagination = (now_page-1) * mail_per_page;
$: getPage = ()=>{
    const page = filtered_list.slice(pagination, pagination + mail_per_page)
    if(page.length < mail_per_page){
        return page.concat(Array(mail_per_page-page.length).fill({"id": "", "member": "", "time": "", "subject": "", "preview": ""}))
    }
    return page;
}
$: mail_list = filtered_list && getPage();

let now_mail = "m20731";
let now_pm = {"id": "m20731", "member": "광배", "time": "2021/03/09 19:23", "subject": "사탕", "preview": "위즈원 사탕 푸딩 맛 있는거 알았어?? 맛있어보여서 사서 언제먹을지 고민중이야 ."};

const onMailSelected = (pm)=> ()=>{
    if(pm.id){
        now_mail=pm.id;
        now_pm=pm;
    }
}

Object.keys(member_dict).forEach(member_n=>{
    const member_name = member_name_dict[member_dict[member_n]];
    tag_to_mail_dict.set(member_name, new Set());
})

pm_list.forEach(pm=>{
    const member_name = getMemberName(pm);
    tag_to_mail_dict.has(member_name) && tag_to_mail_dict.get(member_name).add(pm.id);
})
</script>

<style>
    #coloriz-bg {
        background-image: linear-gradient(to bottom right,
        #f1d2e7,#f1c3aa,#d9598c, #db706c,
        #f3aa51, #fcf695, #fff,#cee5d5,
        #a7e0e1, #b7d3e9, #bbb0dc, #567ace);
        opacity: 0.6;
        z-index:-1;
    }
</style>

<div id="coloriz-bg" class="absolute w-screen h-screen"></div>
<div
class="flex h-screen w-screen relative">
    <section class="h-full">
        <div class="
        h-36 w-80
        ml-10 mt-2 p-2
        bg-white shadow-2xl rounded-md
        overflow-y-auto">
            {#if selected_tag}
            <span class="text-xs">현재 선택된 태그 : 
                <Tag tag={selected_tag} bgColor="pink"/>
            </span>
            <button
            class="text-xs shadow rounded bg-red-400 p-1"
            on:click={remove_selected_tag}>
                돌아가기
            </button>
            <br/>
            {/if}
            <AllTagList allTags={all_tags} onSelectTag={onSelectTag}/>
        </div>
        <label class="ml-10" for="isListView">리스트뷰 {preferences.isListView ? "on": "off"}</label>
        <input id="isListView" type=checkbox bind:checked={preferences.isListView}>
        <MailDetailCard 
        now_pm={now_pm}
        now_mail={now_mail}
        now_tags={now_tags}
        onFavorite={onFavorite}
        favorited={favorited}
        onSelectTag={onSelectTag}
        onDeleteTag={onDeleteTag}
        onAddTag={onAddTag}
        preferences={preferences}
        bind:tag_input={tag_input}/>
    </section>
    <section
    bind:clientWidth={mail_list_width}
    bind:clientHeight={mail_list_height}
    class="h-5/6 relative m-5">
        {#if !preferences.isListView}
            <div
            class="
            h-9/12
            flex flex-wrap">
                {#each mail_list as pm}
                <MailCardItem 
                pm={pm}
                onMailSelected={onMailSelected}
                onFavorite={onFavorite} 
                favorited={favorited}
                onSelectTag={onSelectTag} 
                getTags={getTags}
                preferences={preferences}/>
                {/each}            
            </div>
        {:else}
            <ul class="bg-white rounded w-3/4">
                {#each mail_list as pm}
                    <ListItem
                    pm={pm}
                    onMailSelected={onMailSelected}
                    onFavorite={onFavorite} 
                    favorited={favorited}
                    onSelectTag={onSelectTag} 
                    getTags={getTags}/>
                {/each}
            </ul>
        {/if}
        
        <BottomPagenation
        toTomorrow={toTomorrow}
        toYesterday={toYesterday}
        bind:dateString={dateString}
        maxPage={maxPage}
        bind:nowPage={now_page}/>
    </section>
</div>
