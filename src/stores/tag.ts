import { Writable, writable } from 'svelte/store';

export let tag_input: Writable<string> = writable("");
export let color_n: Writable<number> = writable(Math.floor(Math.random()*12));

export let selected_tag_value: Writable<string> = writable(null);