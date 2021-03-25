import { favorite_tag, member_tags } from "./stores/all_tag_dict";
import {mail_to_tag_dict_to_json, entries_to_mail_to_tag_dict} from "./stores/mail_to_tag_dict";
import {tag_to_mail_dict_to_entries, entries_to_tag_to_mail_dict} from "./stores/tag_to_mail_dict";


const API_ROOT = "http://localhost:8000/api";

async function get(url: string){
    return await fetch(API_ROOT+url);
}

async function post(url: string, body:any =""){
    if(body){
        return fetch(API_ROOT+url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        });
    }
    return fetch(API_ROOT+url, { method: 'POST'});
}
async function put(url: string, body: any){
    fetch(API_ROOT+url, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    })
};

async function del(url){
    return await fetch(API_ROOT+url, {method: 'DELETE'});
};

function postBackup(url: string, body: any){
    return post(url, body)
    .then(res=>{ console.log(body); return res;})
    .catch((e)=>{
        console.error(url+" 백업에 실패했습니다.");
        console.error(e)
    })
}

const ALL_TAG_DICT_ROOT = "/all-tag-dict";
const AllTagDict = {
    get: async ()=>{
        const tag_list: Tag[] = await get(ALL_TAG_DICT_ROOT+"/")
            .then(res=>res.json())
            .then(data=>data.tag_list);
        let result = member_tags.reduce(((acc, tag) => {
            acc.set(tag.value, tag);
            return acc;
        }), new Map([
            ["💖", favorite_tag],
        ]));
        
        return tag_list.reduce((acc, tag)=>{
            acc.set(tag.value, tag);
            return acc;
        }, result);;
    },
    save: async (data:Map<string, Tag>)=>{
        return postBackup(ALL_TAG_DICT_ROOT+"/", { tag_list: [...data].map(entry=>entry[1])});
    },
    addTag: async (new_tag: Tag) => {
        return post(ALL_TAG_DICT_ROOT+'/tag', new_tag);
    },
    deleteTag: async (tag_value: string) => {
        return await del(`${ALL_TAG_DICT_ROOT}/tag/${tag_value}`)
            .then(res=>{console.log("서버에서 태그 삭제 완료"); return res;});
    },
    updateTag: async (old_tag_value:string, new_tag: Tag)=>{
        return await put(ALL_TAG_DICT_ROOT+"/tag/"+old_tag_value, new_tag)
    }
};

const MAIL_TAG_ROOT = "/mail-tag-dict";
const MailTagDict = {
    get: async ()=>{
        const data = await get(MAIL_TAG_ROOT+"/").then(res=>res.json())
        const result: {
            tag_to_mail_dict: ()=>Map<Tag, Set<string>>,
            mail_to_tag_dict: ()=>Map<string, Set<Tag>>
        } = {
            tag_to_mail_dict: ()=>entries_to_tag_to_mail_dict(data.tag_to_mail_dict),
            mail_to_tag_dict: ()=>entries_to_mail_to_tag_dict(data.mail_to_tag_dict)
        }
        return result;
    },
    save: async (mail_to_tag_dict: Map<string, Set<Tag>>, tag_to_mail_dict: Map<Tag, Set<string>>)=>{
        return postBackup(MAIL_TAG_ROOT+"/", {
            mail_to_tag_dict: mail_to_tag_dict_to_json(mail_to_tag_dict),
            tag_to_mail_dict: tag_to_mail_dict_to_entries(tag_to_mail_dict)
        })
    },
    addTag: async (pm_id: string, tag_value: string)=>{
        return post(`${MAIL_TAG_ROOT}/mail/${pm_id}/tag/${tag_value}`)
            .then(res=>{console.log("서버에 태그 추가 완료."); return res;});
    },
    deleteTag: async (pm_id: string, tag_value: string)=>{
        return await del(`${MAIL_TAG_ROOT}/mail/${pm_id}/tag/${tag_value}`);
    }
};

const ping = fetch(API_ROOT+"/ping")

export default {
    AllTagDict,
    MailTagDict,
    ping
}