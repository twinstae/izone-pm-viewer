<script lang="ts">
  import { goto } from "@roxi/routify";
  import { getContext } from "svelte";
  import { SERVER_ROOT } from "../../api";
  import Icon from 'fa-svelte';
  import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope';
  import { is_favorite, favorite_image } from "../../stores/favoriteImage";
import { show_album, show_list } from "../../stores/now";
import { dateString } from "../../stores/date";

  const {close} = getContext('simple-modal');
  function onClick(){ close(); }

  export let image: ImageT;

  function on_favorite_image(e: MouseEvent){
    e.stopPropagation();
    favorite_image(image);
  }

  function goToMail(e){
    e.preventDefault();
    e.stopPropagation();
    show_list.set(false);
    show_album.set(false);
    dateString.set(image.date.replace(/\//g,'-'));
    $goto('./', { now_pm: image.pm_id, showList: false, show_album: false, dateString: $dateString });
    close();
  }

  $: emoji = $is_favorite(image) ? "❤️" : "🤍";
  
</script>
<header class="mb-2">
  <a class="text-black bg-white bg-opacity-70 rounded p-0.5" href="./?now_pm={image.pm_id}" on:click={goToMail}>
    <Icon icon={faEnvelope} />{image.pm_id}
  </a>
  <label
    on:click={on_favorite_image}
    for="favorite">
    {emoji}
  </label>
  <input type="checkbox"
  class="hidden"
  id="favorite-image"/>
</header>

<img class="float-none" on:click={onClick} src="{SERVER_ROOT}/{image.path}" alt="">


<style>
  img {
    max-height: calc(100vh - 6rem);
    border-radius: 0.5rem;
  }
</style>
