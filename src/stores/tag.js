import { writable } from 'svelte/store';

export let tag_input = writable("");
export let color_n = writable(Math.floor(Math.random()*12));

export let selected_tag = writable({color:null, value:null});