<script lang="ts">
import { SERVER_ROOT } from "../api";
import { fade } from "svelte/transition";
import DarkModeButton from "./buttons/DarkModeButton.svelte";
import { getContext } from "svelte";
import ImageDetailModal from "./modals/ImageDetailModal.svelte";
import { goto, params } from "@roxi/routify";
import { dateString, date_to_str, str_to_date } from "../stores/date";
import { dark, dynamic_dark_bg } from "../stores/preferences";
import BarLoader from "./BarLoader.svelte";
import Datepicker from "./datepicker/Datepicker.svelte";
import { _ } from "svelte-i18n";
import t from "../locales/index";
import { date_image_dict, max_index, show_favorite, sorted_date_list } from "../stores/album";
import { show_album } from "../stores/now";

show_album.subscribe((v)=>{
  if (v){
    goToDate($dateString);
  }
})

  let start_index = 0;
  let now_index = start_index + 4;
  let loading = false;

  const PAGE_N = 10;

  const get_page_from_index = (index) => Math.floor(index / PAGE_N) + 1;
  
  let height: number;
  let width: number;
  let full_height: number;
  $: box_n_in_row = Math.ceil(width / 100);
  $: box_size = (width-9) / box_n_in_row - 5;
  //const box_size = 128;

  async function load_down(){
    const origin_id = 'ImgList' + $sorted_date_list[now_index-1].replace(/\//g, '-');

    now_index = Math.min(now_index + 2, $max_index);

    //console.log("down", origin_id)
    document.getElementById(origin_id).scrollIntoView({block: "end", behavior: "smooth"});

    if (get_page_from_index(now_index-1)-1 > get_page_from_index(start_index)){
      await down_page()
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function down_page(){
    await sleep(100);
    start_index = now_index - 4;
    await sleep(10);
    const page_anchor = "Anchor-" + get_page_from_index(start_index)
    //console.log("page down", page_anchor)
    document.getElementById(page_anchor).scrollIntoView({block: "end"});

    goToNowDateString(now_index);
  }

  async function load_up(){
    const origin_id = "Head"+$sorted_date_list[start_index].replace(/\//g, '-');

    start_index = Math.max(start_index-2, 0);
    //console.log("up", origin_id)
    await sleep(5)
    document.getElementById(origin_id).scrollIntoView({block: "start"})

    if (get_page_from_index(now_index-1)-1 > get_page_from_index(start_index)){
      await up_page();
    }
  }

  async function up_page(){
    const page_anchor = "Anchor-" + get_page_from_index(start_index);
    //console.log("page up", page_anchor);
    await sleep(100);
    now_index = start_index + 4
    await sleep(10);
    document.getElementById(page_anchor).scrollIntoView({block: "start"});

    goToNowDateString(start_index);
  }

  function goToNowDateString(new_index){
    const new_date_str = $sorted_date_list[new_index].replace(/\//g, '-');

    dateString.set(new_date_str);
    $goto("/", { ...$params, dateString: new_date_str});
  }

  function onScroll(e){
    if(loading) return null;

    if(e.target.scrollTop + height + 10 > full_height && (now_index < $max_index)) {
      return with_loading(load_down);
    }

    if(e.target.scrollTop < 4 && (start_index > 1)){
      return with_loading(load_up);
    }
  }

  async function with_loading(job){
      loading = true;
      
      await job();

      setTimeout(()=>{
        loading = false;
      }, 200)
  }

  const { open } = getContext('simple-modal');
  function onClickImage(image) {
   return () => {
      open(ImageDetailModal, { image }, { large: true });
    }
  }

  $: image_page = [ ...$sorted_date_list.slice(start_index, now_index)];
//  $: console.log("page", image_page);

async function onDateSelected(e){
  const new_date: Date = e.detail.date;
  const new_date_str = date_to_str(new_date);
  dateString.set(new_date_str);

  await goToDate(new_date_str);
  $goto("/", { ...$params, dateString: new_date_str})
}

if ($params.dateString && !$show_favorite){
  sleep(500).then(()=>{
    goToDate($params.dateString)
  });
 }

async function goToDate(new_date_str){
  const new_index = $sorted_date_list && $sorted_date_list.indexOf(new_date_str.replace(/-/g, "/"));

  start_index = Math.max(new_index-2, 0);
  now_index = Math.min(start_index + 4, $max_index);
  await sleep(100)
  document.getElementById("Head"+new_date_str).scrollIntoView({block: "start"});
}

/*
import PinkButton from "../../components/buttons/PinkButton.svelte";

<PinkButton id="AlbumListButton" onClick={show_album_list}>
      {show_favorite ? '전체보기' : '❤️보기'}
    </PinkButton>

*/

</script>
<svelte:window bind:innerWidth={width} />
<section id="Album" class="flex flex-col w-full" class:hidden={!$show_album}>
  <nav class="w-full p-1" style="z-index: 1;">
    <DarkModeButton />

    {#key $dark}
    <Datepicker
      on:dateSelected={onDateSelected}
      selected={str_to_date($dateString || "2021-04-28")}
      bind:formattedSelected={$dateString}
      format={"#{Y}-#{m}-#{d}"}
      start={new Date(2018 , 8 -1, 31)} end={new Date()}
      buttonTextColor={$dark ? "#ddd" : "black"}
      dayTextColor={$dark ? "#ddd" : "white"}
      buttonBorderColor={$dark ? "rgb(55, 65, 81)" : "rgb(243, 244, 246)"}
      buttonBackgroundColor={$dark ? "rgb(31, 41, 55)" : "white"}
      dayBackgroundColor={$dark ? "rgb(31, 41, 55)" : "white"}
      daysOfWeek={['일','월','화','수','목','금','토'].map(d=>[d+"요일", d])}
      monthsOfYear={[...Array(12).keys()].map(n=>[`${n+1}월`, `${n+1}월`])}
      />
    {/key}
  </nav>
  <section
    class="w-full overflow-y-scroll"
      style="height: calc(100% - 6rem);"
       in:fade={{ duration : 500 }}
       bind:clientHeight={height}
       on:scroll={onScroll}>
    <div class="flex flex-col" bind:clientHeight={full_height}>
      {#each image_page as date_string, date_i (date_string)}
        <h3 id="Head{date_string.replace(/\//g,'-')}" 
            class="{$dynamic_dark_bg('bg-white')} bg-opacity-40 rounded ml-1 mr-1 p-1 pl-2 text-lg">
          {date_string}
        </h3>
        <ul
          id="ImgList{date_string.replace(/\//g,'-')}" 
          class="flex flex-wrap {$dynamic_dark_bg('bg-white')} m-1 p-0.5 bg-opacity-50 rounded-lg">
          {#each $date_image_dict.get(date_string) as image, image_i (image.id)}
            <svg class="ImageBox m-0.5 rounded {$dynamic_dark_bg('bg-white bg-opacity-50')}"
                 in:fade={{duration: Math.floor(Math.random() * 16)* 8 + image_i * 32 + 256 }}
                 style="width: {box_size}; height: {box_size};"
                 on:click={onClickImage(image)}>
              <image width="100%" height="100%"
                     preserveAspectRatio="xMidYMid slice"
                     xlink:href="{SERVER_ROOT}/{image.path.split('.')[0]}_tmb.jpg"/>
            </svg>
          {/each}
        </ul>
        {#if (start_index + date_i) % PAGE_N == PAGE_N - 1}
          <h3 id="Anchor-{get_page_from_index(start_index+date_i)}"
            class="bg-red-300 bg-opacity-70 rounded m-0.5 p-1 text-lg">
            {get_page_from_index(start_index + date_i)} Page
          </h3>
        {/if}
      {/each}
    </div>
  </section>
{#if loading}
  <BarLoader color={ $dark ? "#d02f6f" : "#ff50A0"} duration="0.8s"/>
{/if}
</section>
