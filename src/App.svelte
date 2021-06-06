<script lang="ts">
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
import { 
  register,
  init as init_i18n,
  getLocaleFromNavigator,
} from 'svelte-i18n';

import Modal from "./components/modals/Modal.svelte";
import Background from './components/Background.svelte';

import { initStores } from './stores/initStores';
import { isDesktop, raw_image_list } from "./stores/now";


let haveInitiated = false;

initStores().then((new_list: MailT[])=>{
  const image_list = new_list.filter(pm=>!!pm)
        .map(pm=>pm.images.map(path=>({
            pm_id: pm.id,
            path,
            date: pm.time.slice(0,10)
          })))
          .flat()
          .map((image, i)=>({...image, id: i}))

  raw_image_list.set(image_list);

  haveInitiated=true;
});

let show = null;

let width: number;
$: isDesktop.set(width > 700);

async function load_locale(path){
  const res = await fetch(path);
  const result = await res.json()

  console.log(result);
  return result;
}

register('ko', () => load_locale('./locales/ko.json'));
register('en', () => load_locale('./locales/en.json'));
register('ja', () => load_locale('./locales/ja.json'));

let locale = getLocaleFromNavigator().slice(0, 2)

init_i18n({
  fallbackLocale: 'ko',
  initialLocale: locale,
});

// $: lang =  ['ko', 'en', 'ja'].includes(locale) ? locale : "en";

</script>


<div
bind:clientWidth={width}
class="flex w-screen h-screen relative">
{#if haveInitiated }
  <Modal show={show} transitionBgProps={{duration: 500}}>
    <Background />
    <Router {routes} />
  </Modal>
{/if}
</div>


<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;

  @font-face {
    font-family: 'Noto Color Emoji';
    src: url(https://gitcdn.xyz/repo/googlefonts/noto-emoji/master/fonts/NotoColorEmoji.ttf);
  }

  body{
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Color Emoji", sans-serif;
    font-display: swap;
  }

  mark {
    background-color: #ffcded;
    border-radius: 0.3rem;
    padding: 0.1rem;
  }

  #MailDetailCardContent div p {
    margin-top: 8px;
  }

  .tooltiptext {
    display: none;
    font-size: 3reme;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 0 1rem;
    border-radius: 6px;
    border: 3px gray solid;
   
    position: absolute;
    z-index: 1;
  }
  
  @media all and (min-width:700px) {
    .tooltip:hover .tooltiptext {
      display: initial;
    }
  }

  .blur_off {
    color: transparent;
    text-shadow: 1px 1px 4px gray;
  }

  span.wizone {
    word-break: keep-all;
    border: 4px solid transparent;
    border-radius: 12px;
    position: relative;
    z-index: 4;
    background-clip: padding-box;
    padding: 0 0 0 2px;
  }

  span.wizone::after {
    background: linear-gradient(
      to right bottom,
      #f1d2e7,#f1c3aa,#e382a9, #e18784,
      #f3aa51, #fcf695, #fff,#cee5d5,
      #a7e0e1, #b7d3e9, #bbb0dc, #7592d7
    );
    position: absolute;
    top: -3px; bottom: -3px;
    left: -3px; right: -3px;
    content: '';
    z-index: -1;
    border-radius: 12px;
  }

</style>
