<script>
  import { createEventDispatcher } from 'svelte';
import { dynamic_dark_bg } from '../../stores/preferences';
import { fly } from 'svelte/transition';
  const dispatch = createEventDispatcher();

  export let month;
  export let year;
  export let start;
  export let end;
  export let monthsOfYear;

  let monthSelectorOpen = false;
  let availableMonths;

  $: {
    let isOnLowerBoundary = start.getFullYear() === year;
    let isOnUpperBoundary = end.getFullYear() === year;
    availableMonths = monthsOfYear.map((m, i) => {
      return Object.assign({}, {
        name: m[0],
        abbrev: m[1]
      }, {
        selectable:
          (!isOnLowerBoundary && !isOnUpperBoundary)
          || (
            (!isOnLowerBoundary || i >= start.getMonth())
            && (!isOnUpperBoundary || i <= end.getMonth())
          )
      });
    });
  }

  function toggleMonthSelectorOpen() {
    monthSelectorOpen = !monthSelectorOpen;
  }

  function monthSelected(event, { m, i }) {
    event.stopPropagation();
    if (!m.selectable) return;
    dispatch('monthSelected', i);
    toggleMonthSelectorOpen();
  }

  let direction;
</script>

<div class="title">
  <div class="heading-section flex justify-center p-2">
    <div class="leading-tight">
      <span class="label" on:click={() => {
        direction = -1;
        dispatch('incrementYear', -1);
      }}>◁</span>
      <span class="label">
        {year}년
      </span> 
      <span class="label" on:click={() => {
        direction = 1;
        dispatch('incrementYear', 1);
      }}>▷</span>
    </div>
    <div class="leading-tight mr-4 ml-4">
      <span class="label" on:click={() => {
        direction = -1;
        dispatch('incrementMonth', -1);
      }}>◁</span>
      <span class="label" on:click={toggleMonthSelectorOpen}>
        {monthsOfYear[month][0]}
      </span> 
      <span class="label" on:click={() => { 
        direction = 1;
        dispatch('incrementMonth', 1);
      }}>▷</span>
    </div>
  </div>
  <div
  class="month-selector {$dynamic_dark_bg("bg-white")}"
  class:open={monthSelectorOpen}>
    {#key year}
    {#each availableMonths as monthDefinition, index}
      <div 
        in:fly={{x: direction * 100}}
        class="month-selector--month" 
        class:selected={index === month}
        class:selectable={monthDefinition.selectable}
        on:click={e => monthSelected(e, { m: monthDefinition, i: index })}
      >
        <span>{monthDefinition.abbrev}</span>
      </div>
    {/each}
    {/key}
  </div>
</div>

<style>
  .heading-section { 
    font-size: 20px;
    font-weight: bold;
  }
  .label { 
    cursor: pointer;
  }
  .month-selector { 
    position: absolute;
    top: 75px; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    transition: all 300ms; 
    transform: scale(1.2); 
    opacity: 0; 
    visibility: hidden;
    z-index: 1;
    text-align: center;
  }
  .month-selector.open { 
    transform: scale(1); 
    visibility: visible;
    opacity: 1;
  }
  .month-selector--month { 
    width: 31.333%; 
    margin: .5%; 
    height: 23%;
    display: inline-block;
    border: 1px solid #efefef;
    opacity: 0.2;
  }
  .month-selector--month.selectable { 
    opacity: 1; 
  }
  .month-selector--month.selectable:hover { 
    cursor: pointer;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.15);
  }
  .month-selector--month.selected { 
    background: var(--highlight-color);
    color: #fff;
  }
  .month-selector--month:before { 
    content: ' ';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .month-selector--month span { 
    vertical-align: middle; 
    display: inline-block;
  }
</style>
