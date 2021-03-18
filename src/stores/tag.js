import { writable } from 'svelte/store';
import {now_page} from './now';

export let tag_input = writable("");
export let color_n = writable(Math.floor(Math.random()*12));

export let selected_tag = writable({color:null, value:null});

export const onSelectTag = (tag)=>
    ()=>{
        selected_tag.set(tag);
        now_page.set(1);
    }