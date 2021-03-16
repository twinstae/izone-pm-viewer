import { writable } from 'svelte/store';
import {now_page} from './now';

const favorite_tag = {value: "💖", color: "white"};

export let mail_to_tag_dict = writable(new Map([["m0", new Set([favorite_tag])]]));
export let tag_to_mail_dict = writable(new Map(
    [[favorite_tag, new Set()]]
));
export let tag_input = writable("");
export let selected_tag = writable({color:null, value:null});

export let color_n = writable(1);
export const onSelectTag = (tag)=>
    ()=>{
        selected_tag.set(tag);
        now_page.set(1);
    }
