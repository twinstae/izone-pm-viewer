<script lang="ts">
  import { getContext } from "svelte";
  import { wizoneNick, oldNick, dark } from "../../stores/preferences";

  const { close } = getContext('simple-modal')

  function onKeyPress(e: KeyboardEvent){
    if(e.key == "Enter"){
      close();
    }
  }

</script>

<style>
  h3 {font-size: 2rem; text-align: center;}

  input.wizone {
    text-align: center;
    background-image: linear-gradient(
      to right,
      #f1d2e7,#f1c3aa,#e382a9, #e18784,
      #f3aa51, #fcf695, #fff,#cee5d5,
      #a7e0e1, #b7d3e9, #bbb0dc, #7592d7);
    color: black;
  }

  div#NickModal {
    text-align: center;
  }
</style>

<div id="NickModal" class={$dark ? 'text-gray-300':'text-black'}>
  <h3 class="m-3">위즈원 별명 바꾸기</h3>
   <input
    on:keypress={onKeyPress}
    type="text"
    id="NickOldInput"
    class="wizone rounded m-3 pl-1 pr-1.5 w-20"
    bind:value={$oldNick}>에서
   ➔
  <input
    on:keypress={onKeyPress}
    type="text"
    id="NickUpdateInput"
    class="wizone rounded m-3 pl-1 pr-1.5 w-20"
    bind:value={$wizoneNick}
    >으로 바꿉니다.
</div> 
