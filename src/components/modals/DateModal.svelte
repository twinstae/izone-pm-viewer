<script lang="ts">
  import { getContext } from 'svelte';
  import { dateString, str_to_date } from "../../stores/date";
  import { dark } from "../../stores/preferences";

  const startDate = str_to_date($dateString);

  const { close } = getContext('simple-modal');

  setTimeout(()=>{
    close();
  }, 1500);
</script>

<style>
  h3 {font-size: 2rem;}
  p {font-size: 1.5rem;}
  h3, p {text-align: center;}
</style>

<div class="{$dark ? 'text-gray-300': 'text-black'}">
  <h3 class="m-3">{new Date().getFullYear() - startDate.getFullYear()} 년 전 오늘</h3>
    <p>{startDate.toLocaleDateString()}</p>
</div> 
