import { Writable, writable } from 'svelte/store';
        
import { all_tag_dict, EMPTY_TAG, favorite_tag, member_tags, birthday_tag } from "./all_tag_dict";
import { ping } from './preferences';
import { selected_tag_value } from "./tag";

export let entries_to_tag_to_mail_dict: (entries: [string, string[]][]) => Map<TagT, Set<string>>;
all_tag_dict.subscribe(dict=>{
    entries_to_tag_to_mail_dict = (entries) => {
        return new Map(
            entries
            .filter(entry=>dict.has(entry[0]))
            .map((entry)=>{
                const tag = dict.get(entry[0]);
                const mail_set = new Set(entry[1])
                return [tag, mail_set]
            })
        );
    };
})

function init_tag_to_mail_dict(): Map<TagT, Set<string>> {
    const create_empty_string_set: ()=>Set<string> = ()=>new Set();

    let result = member_tags
        .reduce((acc, tag)=>{
            acc.set(tag, create_empty_string_set());
            return acc;
        }, new Map([
          [favorite_tag, create_empty_string_set()],
          [birthday_tag, create_empty_string_set()]
        ]));

    const tag_to_mail_json = localStorage.getItem("tag_to_mail_dict");
    if(tag_to_mail_json){
        const entries: [string, string[]][] = JSON.parse(tag_to_mail_json);
        result = [...entries_to_tag_to_mail_dict(entries)]
            .reduce((acc, entry)=>{
                acc.set(entry[0], entry[1]);
                return acc;
            }, result);
    }
    return result
}

export let tag_to_mail_dict: Writable<Map<TagT, Set<string>>> = writable(init_tag_to_mail_dict());

let isPing;
ping.subscribe((value)=>{
    isPing = value;
})

tag_to_mail_dict.subscribe(value=>{
    [...value].forEach(([tag, mail_set])=>{
        if(!mail_set){
            console.log(tag, mail_set);
            console.log(value);
        }
        if (mail_set.size==0
            && tag.value!="💖" && ! member_tags.includes(tag)){ // 💖는 0 개여도 유지
            selected_tag_value.update(selected=>{
                if(selected == tag.value){
                    return EMPTY_TAG;
                }
                return selected;
            })
            
            const tag_value = tag.value;
            tag_to_mail_dict.update(dict=>{
                dict.delete(tag);
                return dict;
            });

            all_tag_dict.update(dict=>{
                dict.delete(tag_value);
                return dict;
            })
        }
    })


    if(!value) return null;
    const data = tag_to_mail_dict_to_entries(value);
    localStorage.setItem("tag_to_mail_dict", JSON.stringify(data));
})

export function tag_to_mail_dict_to_entries(dict: Map<TagT, Set<string>>): [string, string[]][]{
    return [...dict].map(entry=>{
        const tag = entry[0].value;
        const mail_list = [...entry[1]];
        return [tag, mail_list];
    })
}
