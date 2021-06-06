<script lang="ts">
import { dark } from "../../stores/preferences";
export let onClick;
export let id: string;
export let margin: string = "m-1";
export let strong: boolean = false;
export let tooltip: string = "";
</script>

<button
  id={id}
  class:tooltip={tooltip}
  class="Button rounded {margin} p-0.5 pl-1 pr-1
         {$dark
            ? 'text-gray-300 ' + (strong ? 'bg-gray-900' : 'bg-gray-800')
            : 'bg-red-100'}"
on:click={onClick}>
  <slot></slot>
  {#if tooltip} <span class="tooltiptext">{tooltip}</span> {/if}
</button>
    
