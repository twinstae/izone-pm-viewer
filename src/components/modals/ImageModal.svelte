<script lang="ts">
import { getContext } from "svelte";


  export let src: string

  const {close} = getContext('simple-modal');
  function onClick(){
    close();
  }
</script>
<style>
  img {
    margin-left: auto;
    margin-right: auto;
    max-height: calc(100vh - 10rem);
    border-radius: 1rem;
  }
</style>

<img on:click={onClick} src={src} alt="">
