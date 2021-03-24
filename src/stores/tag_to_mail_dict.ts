
import { Writable, writable } from 'svelte/store';
import { all_tag_dict, EMPTY_TAG, favorite_tag, member_tags } from "./all_tag_dict";
import { selected_tag } from "./tag";

export let entries_to_tag_to_mail_dict: (entries: [string, string[]][]) => Map<Tag, Set<string>>;
all_tag_dict.subscribe(dict=>{
    entries_to_tag_to_mail_dict = (entries) => {
        return new Map(
            entries.map((entry_data)=>{
                const tag = dict.get(entry_data[0]);
                const mail_set = new Set(entry_data[1])
                return [tag, mail_set]
            })
        );
    };
})

function init_tag_to_mail_dict(): Map<Tag, Set<string>> {
    const create_empty_string_set: ()=>Set<string> = ()=>new Set();
    let result = member_tags
        .reduce((acc, tag)=>{
            acc.set(tag, create_empty_string_set());
            return acc;
        }, new Map([[favorite_tag, create_empty_string_set()]]));

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

export let tag_to_mail_dict: Writable<Map<Tag, Set<string>>> = writable(init_tag_to_mail_dict());

tag_to_mail_dict.subscribe(value=>{
    [...value].forEach(([tag, mail_set])=>{
        if (mail_set.size==0
            && tag.value!="💖" && ! member_tags.includes(tag)){ // 💖는 0 개여도 유지
            selected_tag.update(selected=>{
                if(selected == tag){
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
                // fetch(`/all-tag-dict/tag/${tag_value}`, {method: 'DELETE'})
                // .then(res=>{console.log("서버에서 태그 삭제 완료")});
                return dict;
            })
        }
    })


    if(!value) return null;
    const data = tag_to_mail_dict_to_entries(value);
    localStorage.setItem("tag_to_mail_dict", JSON.stringify(data));
})

export function tag_to_mail_dict_to_entries(dict: Map<Tag, Set<string>>): [string, string[]][]{
    return [...dict].map(entry=>{
        const tag = entry[0].value;
        const mail_list = [...entry[1]];
        return [tag, mail_list];
    })
}