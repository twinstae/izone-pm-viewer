import { writable, Writable } from 'svelte/store';
import { all_tag_dict, favorite_tag } from "./all_tag_dict";

export let entries_to_mail_to_tag_dict: (data: [string, string[]][])=> Map<string, Set<TagT>>;
all_tag_dict.subscribe(all_tag_dict=>{
    entries_to_mail_to_tag_dict = (data) => {
        const entries: [string, Set<TagT>][] = data.map(entry=>{
            const mail_id = entry[0];
            const tag_list = entry[1]
                .filter(v=>all_tag_dict.has(v))
                .map(value=>all_tag_dict.get(value));
            const tag_set = new Set(tag_list);
            return [mail_id, tag_set];
        })
        return new Map(entries);
    }
})

function init_mail_to_tag_dict(): Map<string, Set<TagT>>{
    const mail_to_tag_json = localStorage.getItem("mail_to_tag_dict");
    let result = new Map([["m0", new Set([favorite_tag])]]);
    if (mail_to_tag_json){
        const data: [string, string[]][] = JSON.parse(mail_to_tag_json);
        result = entries_to_mail_to_tag_dict(data);
    }
    return result;
}

export let mail_to_tag_dict: Writable<Map<string, Set<TagT>>> = writable(init_mail_to_tag_dict());

mail_to_tag_dict.subscribe(dict=>{
    if(!dict) return null;
    [...dict].forEach((entry)=>{
        if(entry[1].size==0){
            mail_to_tag_dict.update(self=>{
                self.delete(entry[0])
                return self;
            })
        }
    })
    
    const data = mail_to_tag_dict_to_json(dict);
    localStorage.setItem("mail_to_tag_dict", JSON.stringify(data));
})

export function mail_to_tag_dict_to_json(dict): [string, string[]][]{
    return [...dict].map(entry=>{
        const mail_id = entry[0];
        const tags = [...entry[1]].map(tag=>tag.value);
        return [mail_id, tags];
    });
}
