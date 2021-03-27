<script lang="ts">
import BottomPagenation from './BottomPagenation.svelte';
import AllTagList from './tags/AllTagList.svelte';
import { afterUpdate } from "svelte";
import { dateString, date_to_str, str_to_date, time_to_dateStr } from "../stores/date";
import { selected_tag_value } from "../stores/tag";
import { now_page, isDesktop, show_list, isMobile, show_tag_list } from '../stores/now';
import { filtered_list, getPage } from '../stores/search';
import Search from './Search.svelte';
import { params, redirect } from '@roxi/routify';
import SelectedTag from './tags/SelectedTag.svelte';
import ShowTagListInput from './tags/ShowTagListInput.svelte';
import SyncTagButtons from './buttons/SyncTagButtons.svelte';
import MailItemList from './MailItemList.svelte';
import MailCardView from './MailCardView.svelte';
import { dynamic_dark_bg, ping } from '../stores/preferences';
import DarkModeButton from './buttons/DarkModeButton.svelte';
import NYearsAgoButton from './buttons/NYearsAgoButton.svelte';

let section_width;
let section_height;
$: mail_per_width =  Math.floor((section_width - 32) / 292)
$: mail_per_height = Math.floor((section_height - 220) / 164);
$: mail_per_page = $isMobile
    ? 5
    : isListView
        ? Math.floor((section_height - 200) / 62)
        : mail_per_width * mail_per_height;

$: maxPage = Math.ceil($filtered_list.length/mail_per_page);
$: isTyping = section_height < 400;

$: mail_list = $filtered_list ? $getPage(mail_per_page) : [];

$: now_date = str_to_date($dateString);
let lastDateString;
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
        $filtered_list.forEach((mail,i)=>{
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
        $filtered_list.forEach((mail, i)=>{
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

        if (result==false && $filtered_list.length > 0){
            $now_page = maxPage;
            const last_mail = $filtered_list[$filtered_list.length-1];
            $dateString = time_to_dateStr(last_mail.time);
        }
        lastDateString = $dateString;
        $redirect("./", {...$params, nowPage: $now_page, dateString: $dateString});
        return null;
    }
});

let isListView = false;
$: min_height = isListView || $isMobile
    ? ($show_tag_list ? 520:360)
    : 490;

</script>
<style>
    #MailListSection {
        animation:animateright 0.4s;
    }
    @keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}
</style>

<section
id="MailListSection"
class:hidden={$isMobile && !$show_list}
bind:clientWidth={section_width}
bind:clientHeight={section_height}
style="
min-height: {min_height}px;"
class="h-full {$isDesktop ? "w-1/2 lg:w-2/3 xl:w-3/4": "w-full"}
relative pl-4 pr-4 pt-2">
    <div class="ml-2 flex flex-row">
        {#if $isMobile}
            <DarkModeButton />
            <ShowTagListInput /> 
        {:else}
            <label class="p-1 rounded {$dynamic_dark_bg("bg-red-100")}" for="isListViewInput">
                리스트뷰 {isListView ? "on": "off"}
                <input id="isListViewInput" type=checkbox bind:checked={isListView}>
            </label>
        {/if}
        {#if $selected_tag_value} <SelectedTag /> {/if}
    </div>
    {#if $ping} <SyncTagButtons /> {/if}
    <AllTagList hidden={!($isMobile && $show_tag_list)} />
    {#if !isListView && $isDesktop}
        <MailCardView mail_list={mail_list} />
    {:else}
        <MailItemList mail_list={mail_list} isTyping={isTyping} />
    {/if}
    <BottomPagenation maxPage={maxPage}/>
    <br/>
    <Search search_length={$filtered_list.length}/>
    <NYearsAgoButton />
</section>