<script lang="ts">
import { getContext } from "svelte";

import { all_tag_dict } from "../stores/all_tag_dict";
import PinkButton from "./PinkButton.svelte";
export let tag: {
    value: string,
    color: string
};

let value: string = tag.value;
let color: string = tag.color;

let choices = [
    {"value":"수놓은별빛","color":"#bbb0dc"},
    {"value":"벚꽃핑크","color":"#f1d2e7"},
    {"value":"강코랄","color":"#db706c"},
    {"value":"옌로우","color":"#fcf695"},
    {"value":"챈메랄드","color":"#a7e0e1"},
    {"value":"챔무","color":"#cee5d5"},
    {"value":"나부키하늘","color":"#b7d3e9"},
    {"value":"토미베이지","color":"#f1c3aa"},
    {"value":"백설민주","color":"#fff"},
    {"value":"율렌지","color":"#f3aa51"},
    {"value":"블루지니","color":"#567ace"},
    {"value":"캔디핑크","color":"#d9598c"},
];

const {close} = getContext("simple-modal");

$: onClick = ()=>{
    const the_tag = $all_tag_dict.get(tag.value);

    $all_tag_dict.delete(the_tag.value);

    the_tag.value = value;
    the_tag.color = color;
    $all_tag_dict.set(value, the_tag);

    $all_tag_dict = $all_tag_dict;
    close();
}
</script>

<style>
h3 {
        font-size: 1.5rem;
        text-align: center;
    }
</style>

<div style="text-align: center;">
    <h3>태그 수정</h3>
    <input type="text"
    style="background-color:{color}; text-align: center;"
    class="{color=="#fff" ? "p-0 border-2 border-gray" : "p-0.5"}
    rounded m-3 pl-1 pr-1.5 w-20"
    bind:value={value}>
</div>
<div class="flex flex-wrap p-1">
    {#each choices as choice}
    <label
    style="background-color:{choice.color}"
    class="{choice.color=="#fff" ? "p-0 border-2 border-gray" : "p-0.5"}
    rounded m-0.5 pl-1 pr-1.5">
        <input
        type="radio" bind:group={color} value={choice.color}>
        {choice.value}
    </label>
    {/each}
</div>
<PinkButton onClick={onClick}>
    결정했어요!
</PinkButton>