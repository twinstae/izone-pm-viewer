<script lang="ts">
import { _ } from "svelte-i18n";
import t from "../../locales";
import { dark } from "../../stores/preferences";

function change_dark_mode(){
  $dark = !$dark;
}
</script>

<button
   id="DarkModeButton"
    class:color_iz={!$dark}
    class="tooltip rounded pl-1 pr-1 m-0.5 border-2 text-lg
    {$dark
        ? 'text-gray-400 border-gray-900 bg-gray-800'
           : 'text-red-300  border-red-300 border-2'}"
    on:click={change_dark_mode}>
        {$dark ? $_(t.다크) :  $_(t.컬러)}
  <span class="tooltiptext">d ('D'ark mode)</span>
</button>

<style>
  .color_iz {
    background-image: linear-gradient(
      to right bottom,
      #f1d2e7,#f1c3aa,#e382a9, #e18784,
      #f3aa51, #fcf695, #fff,#cee5d5,
      #a7e0e1, #b7d3e9, #bbb0dc, #7592d7
    )
  }

</style>
