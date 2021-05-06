<script lang="ts">
import { dark } from "../../stores/preferences";
export let onClick;
export let id: string;
export let strong: boolean = false;
export let tooltip: string = "";
</script>

<style>
/* Tooltip text */
.tooltiptext {
  visibility: hidden;
  font-size: 3reme;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  border-radius: 6px;
  border: 3px gray solid;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.Button:hover .tooltiptext {
  visibility: visible;
}
</style>

<button
id={id}
class="Button rounded m-1 p-0.5 pl-1 pr-1
    {$dark
        ? "text-gray-300 " + (strong ? "bg-gray-900" : "bg-gray-800")
        : "bg-red-100"}"
on:click={onClick}>
  <slot></slot>
  {#if tooltip} <span class="tooltiptext">{tooltip}</span> {/if}
</button>
    
