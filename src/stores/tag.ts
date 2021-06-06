import { Writable, writable, derived } from 'svelte/store';
import {tag_to_mail_dict} from './tag_to_mail_dict';
import {all_tag_dict, favorite_tag} from './all_tag_dict';
import {now_pm} from './now';
import {mail_to_tag_dict} from './mail_to_tag_dict';
import api from '../api';


export let tag_input: Writable<string> = writable("");
export let color_n: Writable<number> = writable(Math.floor(Math.random()*12));

export let selected_tag_value: Writable<string> = writable(null);

export async function favorite(pm_id: string){
    tag_to_mail_dict.update(dict=>{
      const favorite_set = dict.get(favorite_tag);
      if (favorite_set.has(pm_id)){
          favorite_set.delete(pm_id);
          api.MailTagDict.deleteTag(pm_id, favorite_tag.value);
      } else {
          favorite_set.add(pm_id);
          api.MailTagDict.addTag(pm_id, favorite_tag.value);
      }
      return dict;
    })
}

export let onDeleteTag = derived(
  [all_tag_dict, now_pm],
  ([$all_tag_dict, $now_pm])=> async (tag: TagT)=>{
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
