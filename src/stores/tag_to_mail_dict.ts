import { Writable, writable, derived } from 'svelte/store';
import { all_tag_dict, EMPTY_TAG, favorite_tag, member_tags, birthday_tag, unread_tag } from "./all_tag_dict";
import { selected_tag_value } from "./tag";
import api from '../api';
import {now_pm} from './now';
import {mail_to_tag_dict} from './mail_to_tag_dict';

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
          [birthday_tag, create_empty_string_set()],
          [unread_tag  , create_empty_string_set()]
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
        if (mail_set.size==0
            && tag.value!=favorite_tag.value
            && tag.value!=unread_tag.value
            && ! member_tags.includes(tag)
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
    return [...dict].filter(entry=>entry[0]).map(entry=>{
        const tag = entry[0].value;
        const mail_list = [...entry[1]];
        return [tag, mail_list];
    })
}


export async function favorite(pm_id: string){
    tag_to_mail_dict.update(dict=>{
      const favorite_set = dict.get(favorite_tag);
      if (favorite_set.has(pm_id)){
          favorite_set.delete(pm_id);

          api.MailTagDict.deleteTag(pm_id, "💖");
      } else {
          favorite_set.add(pm_id);
          api.MailTagDict.addTag(pm_id, "💖");
      }
      return dict;
    })
}

export let is_unread = derived(
  [tag_to_mail_dict],
  ([$tag_to_mail_dict])=> {
    const unread_set = $tag_to_mail_dict.get(unread_tag);
    return (pm_id: string) => unread_set.has(pm_id);
})

export let onDeleteTag = derived(
  [all_tag_dict, now_pm],
  ([$all_tag_dict, $now_pm])=>async (tag: TagT)=>{
    const the_tag = $all_tag_dict.get(tag.value);   

    tag_to_mail_dict.update(dict=>{
      if (dict.has(the_tag)){
          dict.get(the_tag).delete($now_pm.id);
      }
      return dict;
    })

    mail_to_tag_dict.update(dict=>{
      if (dict.has($now_pm.id)){
          dict.get($now_pm.id).delete(the_tag)
      }
      return dict;
    });

    await api.MailTagDict.deleteTag($now_pm.id, tag.value)
      .then((_)=>{console.log("서버에서 태그 삭제 성공")});
})
