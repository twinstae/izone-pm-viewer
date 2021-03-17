import { writable } from 'svelte/store';
import {now_page} from './now';
import {member_name_dict, member_color_dict} from './constants';

const favorite_tag = {value: "💖", color: "white"};

const member_tags = [6,1,7,3,11,9,5,8,10,2,4,0,12]
    .map((member_n)=>({
        value: member_name_dict[member_n],
        color: member_color_dict[member_n]
    }));

export let all_tag_dict = writable(new Map([
    ["💖", favorite_tag],
    ...Array.from(member_tags.map(tag=>[tag.value, tag]))
]));

export let mail_to_tag_dict = writable(new Map([["m0", new Set([favorite_tag])]]));

export let tag_to_mail_dict = writable(new Map(
    [[favorite_tag, new Set()],
    ...member_tags.map(tag=>[tag, new Set()])]
));

export let tag_input = writable("");
export let selected_tag = writable({color:null, value:null});

export let color_n = writable(1);
export const onSelectTag = (tag)=>
    ()=>{
        selected_tag.set(tag);
        now_page.set(1);
    }
