import { writable } from 'svelte/store';
import { all_tag_dict, favorite_tag } from "./all_tag_dict";

let json_to_mail_to_tag_dict;
all_tag_dict.subscribe(all_tag_dict=>{
    json_to_mail_to_tag_dict = (json) => {
        const data = JSON.parse(json);
        const entries = data.map(entry=>{
            const mail_id = entry[0];
            const tag_set = new Set(entry[1].map(value=>all_tag_dict.get(value)));
            return [mail_id, tag_set];
        })
        return new Map(entries);
    }
})

const init_mail_to_tag_dict = ()=>{
    const mail_to_tag_json = localStorage.getItem("mail_to_tag_dict");
    let result = new Map([["m0", new Set([favorite_tag])]]);
    if (mail_to_tag_json){
        result = json_to_mail_to_tag_dict(mail_to_tag_json);
    }
    return result;
}

export let mail_to_tag_dict = writable(init_mail_to_tag_dict());

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
    localStorage.setItem("mail_to_tag_dict", data);
})

function mail_to_tag_dict_to_json(dict){
    const data = [...dict].map(entry=>{
        const mail_id = entry[0];
        const tags = [...entry[1]].map(tag=>tag.value);
        return [mail_id, tags];
    });
    return JSON.stringify(data);
}