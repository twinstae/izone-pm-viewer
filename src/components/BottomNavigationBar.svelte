<script lang="ts">
import Icon from 'fa-svelte';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faImages } from '@fortawesome/free-solid-svg-icons/faImages';
import { isDesktop, show_list, show_album } from '../stores/now';
import { dynamic_dark_bg } from '../stores/preferences';
import { goto, params } from '@roxi/routify';
import { _ } from 'svelte-i18n';
import t from '../locales';

function goToGallery(e: MouseEvent){
  e.preventDefault();
  show_album.set(true);
  $goto("/", {...$params, show_album: true })
}

function goToList(e: MouseEvent){
  e.preventDefault();
  show_album.set(false)
  $goto('/', {...$params, show_album: false });
}

</script>


{#if $isDesktop || $show_album || $show_list }
  <nav
    class="absolute bottom-0 w-full flex justify-between rounded-lg">
    <a
      on:click={goToList}
      href="./"
      class:active={!$show_album}
      class="NavButton w-1/2 md:w-48 {$dynamic_dark_bg('bg-white')}">
      <Icon icon={faEnvelope} />
      {$_(t.메일)}
    </a>
    <a
      on:click={goToGallery}
      href="./"
      class:active={$show_album}
      class="NavButton w-1/2 md:w-48 {$dynamic_dark_bg('bg-white')}">
      <Icon icon={faImages} />
      {$_(t.앨범)}
    </a>
  </nav>
{/if}

<style>
  a.NavButton {
    padding: 0.2rem;
    margin: 0.2rem;
    border: solid 2px;
    border-radius: 1rem;
    text-align: center;
    font-size: 1rem;
    transition: font-size 1s;
  }

  @media all and (min-width:700px) {
    nav {
      justify-content: start;
    }
  }

  .active {
    font-size: 1.2rem;
    color: deeppink;
  }

</style>
