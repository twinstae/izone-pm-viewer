<script lang="ts">
import BottomPagenation from './BottomPagenation.svelte';
import AllTagList from './tags/AllTagList.svelte';
import { params, redirect } from '@roxi/routify';
import { afterUpdate } from "svelte";
import { dateString, date_to_str, str_to_date, time_to_dateStr } from "../stores/date";
import { selected_tag_value } from "../stores/tag";
import { now_page, isDesktop, show_list, isMobile, show_tag_list, show_album } from '../stores/now';
import { filtered_list, getPage } from '../stores/search';
import Search from './Search.svelte';
import SelectedTag from './tags/SelectedTag.svelte';
import ShowTagListInput from './tags/ShowTagListInput.svelte';
import MailItemList from './MailItemList.svelte';
import MailCardView from './MailCardView.svelte';
import DarkModeButton from './buttons/DarkModeButton.svelte';
import PinkButton from './buttons/PinkButton.svelte';
import { EMPTY_MAIL } from '../stores/constants';
import { _ } from 'svelte-i18n';
import t from '../locales';

let section_width: number;
let section_height: number;

$: bottom = section_width < 600 ? 220 : 140;
$: mail_per_width =  Math.floor(section_width / 307)
$: mail_per_height = Math.floor((section_height - bottom) / 150);

$: mail_in_list = Math.floor((section_height - bottom) / 62);

$: mail_per_page = $isMobile
    ? (isListView ? 6 : 4)
    : (isListView
        ? mail_in_list
        : mail_per_width * mail_per_height);

$: maxPage = Math.ceil($filtered_list.length/mail_per_page) || 1;
$: isTyping = section_height < 512;

$: mail_list = $getPage(mail_per_page) || [EMPTY_MAIL];

$: now_date = str_to_date($dateString);

let anchor_mail_index = 0;
let last_mail_per_page = mail_per_page;

afterUpdate(() => {
    // 미래로 갈 수는 없다.
    if (now_date > new Date()){
      dateString.set(date_to_str(new Date()));
      $redirect("./", {...$params, dateString: $dateString});
      return null;
    }

    const first_mail = $filtered_list[0];
    // 메일이 없으면 1 페이지로 간다.
    if (!first_mail){
      if ($now_page > 1){
        now_page.set(1);
        $redirect("./", {...$params, nowPage: 1});
      }
      return null;
    }

    // 화면 크기를 바꿔도 anchor 메일에 머무른다.
    if (last_mail_per_page != mail_per_page){
      const anchor_page = Math.floor(anchor_mail_index / mail_per_page) + 1;

      now_page.set(anchor_page);
      last_mail_per_page = mail_per_page;
      $redirect("./", { ...$params, nowPage: anchor_page})
      return null;
    }     

    // 화면 크기가 바뀌지 않았는데, page가 바뀌면 = anchor 메일의 범위를 벗어나면 => anchor로 설정한다.
    const first_mail_index = ($now_page-1) * mail_per_page;
    const last_mail_index = first_mail_index + mail_per_page;
    if (anchor_mail_index < first_mail_index || last_mail_index <= anchor_mail_index ){
      anchor_mail_index = first_mail_index;
    }

    if (!$selected_tag_value) return null; // 태그 선택 중이고
    if (mail_list.length == 0 || mail_list[0].id == "") return null; // 리스트에 메일이 있고
    const page_head = mail_list[0];   
    if (time_to_dateStr(page_head.time) == $dateString) return null;
    // 페이지가 바뀌면 첫 메일의 날짜로 이동한다.
    dateString.set(time_to_dateStr(page_head.time));
});

let isListView = false;
$: min_height = isListView || $isMobile
    ? ($show_tag_list ? 520:360)
    : 490;

function onListModeButtonClick(){
  isListView=!isListView;
}

</script>
<style>
    #MailListSection {
        animation:animateright 0.4s;
    }
    @keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}
</style>

<section
id="MailListSection"
class:hidden={($isMobile && !$show_list) || $show_album}
bind:clientWidth={section_width}
bind:clientHeight={section_height}
style="min-height: {min_height}px;"
class="h-full {$isDesktop ? "w-1/2 lg:w-2/3 xl:w-3/4": "w-full"}
relative p-4">
  <div class="ml-2 flex flex-wrap">
      {#if $isMobile} <ShowTagListInput /> {/if}
      {#if $isMobile}<DarkModeButton />{/if}
        <PinkButton
          id="ListModeButton"
          margin="m-0.5"
          tooltip="m (List 'M'ode)"
          onClick={onListModeButtonClick}>
          {isListView ? "List": "Card"}
        </PinkButton>
        {#if $selected_tag_value} <SelectedTag /> {/if}
    </div>
    <AllTagList hidden={!($isMobile && $show_tag_list)} />
    {#if isListView}
        <MailItemList mail_list={mail_list} isTyping={isTyping} />
    {:else}
        <MailCardView mail_list={mail_list} />
    {/if}
    <BottomPagenation maxPage={maxPage} parent_width={section_width} mail_per_page={mail_per_page}/>
    {#if section_width < 600}
        <br>
    {/if}
    <Search search_length={$filtered_list.length} />
</section>
