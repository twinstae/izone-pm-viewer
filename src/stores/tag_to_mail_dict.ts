import { Writable, writable, derived } from 'svelte/store';
import { all_tag_dict, EMPTY_TAG, favorite_tag, member_tags, birthday_tag, unread_tag } from "./all_tag_dict";
import { selected_tag_value } from "./tag";
import {mail_to_tag_dict} from './mail_to_tag_dict';

export let value_to_tag_entries: (entries: [string, string[]][]) => [TagT, Set<string>][];
all_tag_dict.subscribe(dict=>{
    value_to_tag_entries = (entries) => {
      return entries
        .filter(([tag_value, _])=> dict.has(tag_value))
        .map(([tag_value, mail_list])=>{
          const tag = dict.get(tag_value);
          const mail_set = new Set(mail_list);
          return [tag, mail_set];
        })
    };
})

function init_tag_to_mail_dict(): Map<TagT, Set<string>> {
  const create_empty_string_set: ()=>Set<string> = () => new Set()
  const base_tags = [...member_tags, birthday_tag, favorite_tag, unread_tag];
  let result = new Map(base_tags.map((tag: TagT) => [tag, create_empty_string_set()]));

  const tag_to_mail_json = localStorage.getItem("tag_to_mail_dict");
  if(tag_to_mail_json){
      const entries: [string, string[]][] = JSON.parse(tag_to_mail_json);
      const new_entries = [...value_to_tag_entries(entries)];

      return new Map([...result, ...new_entries]);
  }
  return result
}

export let tag_to_mail_dict: Writable<Map<TagT, Set<string>>> = writable(init_tag_to_mail_dict());

const base_tag_set = new Set(["💖", "장원영", "미야와키 사쿠라", "조유리", "최예나", "안유진", "야부키 나코", "권은비", "강혜원", "혼다 히토미", "김채원", "김민주", "이채연", "운영팀", "생일", "읽지 않음", "전체"]);

tag_to_mail_dict.subscribe(value=>{
    [...value].forEach(([tag, mail_set])=>{
        if(!mail_set){
            console.log(tag, mail_set);
            console.log(value);
        }
        if (!tag){
          console.log(tag);
          return null;
        }
        if (mail_set.size==0 && !base_tag_set.has(tag.value)
        ){        
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
    return [...dict]
      .filter(entry=>entry[0])
      .map(entry=>{
        const tag_value = entry[0].value;
        const mail_list = [...entry[1]];
        return [tag_value, mail_list];
    })
}

export let addTag = derived(
  [all_tag_dict],
  ([$all_tag_dict])=> async (pm_id: string, tag: TagT) => {
    const the_tag = $all_tag_dict.get(tag.value);

    tag_to_mail_dict.update(dict=>{
      dict.get(the_tag).add(pm_id);
      return dict;
    });

    mail_to_tag_dict.update(dict=>{
      dict.get(pm_id).add(the_tag);
      return dict;
    })
})
export let is_unread = derived(
  [tag_to_mail_dict],
  ([$tag_to_mail_dict])=> {
    const unread_set = $tag_to_mail_dict.get(unread_tag);
    return (pm_id: string) => unread_set.has(pm_id);
})

