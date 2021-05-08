<script lang="ts">
import { dark } from "../../stores/preferences";

const color_iz_bg = `
background-image: linear-gradient(
    to right,
    #f1d2e7,#f1c3aa,#e382a9, #e18784,
    #f3aa51, #fcf695, #fff,#cee5d5,
    #a7e0e1, #b7d3e9, #bbb0dc, #7592d7)
`;
function change_dark_mode(){
  $dark = !$dark;
}
</script>

<button
   id="DarkModeButton"
    style="{$dark ? '' : color_iz_bg}"
    class="tooltip rounded pl-1 pr-1 mr-1 border-2 text-lg
    {$dark
        ? "text-gray-400 border-gray-900 bg-gray-800"
           : "text-red-300  border-red-300 border-2"}"
    on:click={change_dark_mode}>
        {$dark ? "다크" : "컬러"}
  <span class="tooltiptext">d ('D'ark mode)</span>
</button>
