
import { writable } from 'svelte/store';
import { all_tag_dict, favorite_tag, member_tags } from "./all_tag_dict";

let json_to_tag_to_mail_dict;
all_tag_dict.subscribe(dict=>{
    json_to_tag_to_mail_dict = (json) => {
        const data = JSON.parse(json);
        const entries = data.map((entry_data)=>{
            const tag = dict.get(entry_data[0]);
            const mail_set = new Set(entry_data[1])
            return [tag, mail_set]
        })
        return new Map(entries);
    };
})

const init_tag_to_mail_dict = ()=>{
    let result = member_tags
    .reduce((acc, tag)=>{
        acc.set(tag, new Set());
        return acc;
    }, new Map([[favorite_tag, new Set()]]));

    const tag_to_mail_json = localStorage.getItem("tag_to_mail_dict");
    if(tag_to_mail_json){
        result = [...json_to_tag_to_mail_dict(tag_to_mail_json)]
            .reduce((acc, entry)=>{
                acc.set(entry[0], entry[1]);
                return acc;
            }, result);
    }
    return result
}

export let tag_to_mail_dict = writable(init_tag_to_mail_dict());

tag_to_mail_dict.subscribe(value=>{
    [...value].forEach(([tag, mail_set])=>{
        if (mail_set.size==0
            && tag.value!="💖" && ! member_tags.includes(tag)){ // 💖는 0 개여도 유지
            tag_to_mail_dict.update(dict=>{
                dict.delete(tag);
                console.log(dict);
                return dict;
            });
            all_tag_dict.update(dict=>{
                dict.delete(tag.value);
                
                console.log(dict);
                return dict;
            })
        }
    })


    if(!value) return null;
    const data = tag_to_mail_dict_to_json(value);
    localStorage.setItem("tag_to_mail_dict", data);
})

function tag_to_mail_dict_to_json(dict){
    const entries = [...dict].map(entry=>{
        const tag = entry[0].value;
        const mail_list = [...entry[1]];
        return [tag, mail_list];
    })
    return JSON.stringify(entries);
}