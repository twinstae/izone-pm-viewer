<script lang="ts">
  import { getContext } from "svelte";
  const {close} = getContext('simple-modal');
  function onClick(){ close(); }

  export let src: string
</script>
<style>
  img {
    margin-left: auto;
    margin-right: auto;
    max-height: calc(100vh - 10rem);
    border-radius: 0.5rem;
  }
</style>

<img on:click={onClick} src={src} alt="">
