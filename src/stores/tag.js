import { writable } from 'svelte/store';
import {now_page} from './now';

export let mail_to_tag_dict = writable(new Map([["m0", new Set(["💖"])]]));
export let tag_to_mail_dict = writable(new Map(
    [["💖", new Set()]]
));
export let tag_input = writable("");
export let selected_tag = writable("");

export const onSelectTag = (tag_item)=>
    ()=>{
        selected_tag.set(tag_item);
        now_page.set(1);
    }

export const remove_selected_tag = ()=>{
    selected_tag.set("");
    now_page.set(1);
};

export const onDeleteTag = (tag_item) => ()=>{
    const tag_set = tag_to_mail_dict.get(tag_item);
    tag_set.delete(now_pm.id);
    if (tag_set.size==0){
        tag_to_mail_dict.delete(tag_item);
        if(tag_item == selected_tag){
            selected_tag = null;
        }
    }
    
    tag_to_mail_dict=tag_to_mail_dict;

    mail_to_tag_dict.get(now_pm.id).delete(tag_item)
    mail_to_tag_dict=mail_to_tag_dict;
}