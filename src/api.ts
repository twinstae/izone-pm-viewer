import {mail_to_tag_dict_to_json, entries_to_mail_to_tag_dict} from "./stores/mail_to_tag_dict";
import {tag_to_mail_dict_to_entries, entries_to_tag_to_mail_dict} from "./stores/tag_to_mail_dict";
import {favorite_tag} from "./stores/all_tag_dict";

async function post(url: string, body:any =""){
    if(body){
        return fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        });
    }
    return fetch(url, { method: 'POST'});
}

function postBackup(url: string, body: any){
    return post(url, body)
    .then(res=>{ console.log(body); return res;})
    .catch((e)=>{
        console.error(url+" 백업에 실패했습니다.");
        console.error(e)
    })
}

const AllTagDict = {
    get: async ()=>{
        const tag_list: Tag[] = await fetch("/all-tag-dict/")
            .then(res=>res.json())
            .then(data=>data.tag_list)

        const result: Map<string, Tag> = tag_list.reduce((acc, tag)=>{
            acc.set(tag.value, tag);
            return acc;
        }, new Map([["💖", favorite_tag]]));

        return result;
    },
    save: async (data:Map<string, Tag>)=>{
        return postBackup("/all-tag-dict/", { tag_list: [...data].map(entry=>entry[1])});
    },
    addTag: async (new_tag: Tag) => {
        return post('/all-tag-dict/tag', new_tag);
    },
    deleteTag: async (tag_value: string) => {
        return fetch(`/all-tag-dict/tag/${tag_value}`, {method: 'DELETE'})
            .then(res=>{console.log("서버에서 태그 삭제 완료"); return res;});
    }
};

const MailTagDict = {
    get: async ()=>{
        const data = await fetch("/mail-tag-dict/").then(res=>res.json())
        const result: {
            tag_to_mail_dict: Map<Tag, Set<string>>,
            mail_to_tag_dict: Map<string, Set<Tag>>
        } = {
            tag_to_mail_dict: entries_to_tag_to_mail_dict(data.tag_to_mail_dict),
            mail_to_tag_dict: entries_to_mail_to_tag_dict(data.mail_to_tag_dict)
        }
        return result;
    },
    save: async (mail_to_tag_dict: Map<string, Set<Tag>>, tag_to_mail_dict: Map<Tag, Set<string>>)=>{
        return postBackup("/mail-tag-dict/", {
            mail_to_tag_dict: mail_to_tag_dict_to_json(mail_to_tag_dict),
            tag_to_mail_dict: tag_to_mail_dict_to_entries(tag_to_mail_dict)
        })
    },
    addTag: async (pm_id: string, tag_value: string)=>{
        return post(`/mail-tag-dict/mail/${pm_id}/tag/${tag_value}`)
            .then(res=>{console.log("서버에 태그 추가 완료."); return res;});
    },
    deleteTag: async (pm_id: string, tag_value: string)=>{
        return await fetch(`/mail-tag-dict/mail/${pm_id}/tag/${tag_value}`, {method: 'DELETE'});
    }
};

export default {
    AllTagDict,
    MailTagDict
}