import { favorite_tag, member_tags, unread_tag } from "./stores/all_tag_dict";
import {mail_to_tag_dict_to_json } from "./stores/mail_to_tag_dict";
import {tag_to_mail_dict_to_entries } from "./stores/tag_to_mail_dict";


const API_ROOT = "http://" + window.location.hostname + ":8000" +"/api";

async function get(url: string){
    return await fetch(url);
}

async function post(url: string, body:any =""){
    if(body){
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(body)
        });
    }
    return fetch(url, { method: 'POST'});
}
async function put(url: string, body: any){
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body)
    })
};

async function del(url: string){
    return await fetch(url, {method: 'DELETE'});
};

async function postBackup(url: string, body: any){
    return post(url, body)
    .then(res=>{ console.log("백업 성공!"); return res;})
    .catch((e)=>{
        console.error(url+" 백업에 실패했습니다.");
        console.error(e)
    })
}
const process = (text: string, i: number)=>{
    try {
        console.log(`${i}+'차 시도`)
        console.log(text.slice(0,10));
        const arr = [];
        for (let i = 0; i<text.length; i+=2){
            arr.push(text[i])
        }
        return JSON.parse(arr.join(""));
    } catch (e) {
        if (i < 4){
            text = text.slice(1);
            return process(text, i+1);
        }
        throw e;
    }
};

const parse_json = (text: string) => {
    try {
        return JSON.parse(text);
    } catch (e) {
        if (text.slice(0, 9) == "<!DOCTYPE"){
            throw e; 
        }
        if (e instanceof SyntaxError) {
            console.log("json 읽기 실패. 재시도합니다.")
            return process(text.slice(2), 2);
        }
        console.error(e);
    }
}
const ALL_TAG_DICT_ROOT = API_ROOT+"/all-tag-dict";
const base_tag_list = member_tags.concat([favorite_tag]);
const AllTagDict = {
    get: async ()=>{
        const tag_list: TagT[] = await get(ALL_TAG_DICT_ROOT+"/")
            .then(res=>res.text())
            .then(parse_json)
            .then(data=>data.tag_list);
        return base_tag_list.concat(tag_list);
    },
    save: async (data:Map<string, TagT>)=>{
        const body = {
            tag_list: [...data].map(entry=>entry[1])
        };
        console.log(body);       
        return postBackup(ALL_TAG_DICT_ROOT+"/", body);
    },
    addTag: async (new_tag: TagT) => {
        return post(ALL_TAG_DICT_ROOT+'/tag', new_tag);
    },
    updateTag: async (old_tag_value:string, new_tag: TagT)=>{
        return await put(ALL_TAG_DICT_ROOT+"/tag/"+old_tag_value, new_tag)
    }
};

const member_tag_set = new Set(member_tags.map(tag=>tag.value))
const MAIL_TAG_ROOT = API_ROOT+"/mail-tag-dict";
const MailTagDict = {
    get: async ()=>{
        return await get(MAIL_TAG_ROOT+"/").then(res=>res.json());
    },
    save: async (mail_to_tag_dict: Map<string, Set<TagT>>, tag_to_mail_dict: Map<TagT, Set<string>>)=>{
        const body = {
            mail_to_tag_dict: mail_to_tag_dict_to_json(mail_to_tag_dict),
            tag_to_mail_dict: tag_to_mail_dict_to_entries(tag_to_mail_dict)
                .filter(entry=>!member_tag_set.has(entry[0]))
        };
        console.log(body);
        return postBackup(MAIL_TAG_ROOT+"/", body);
    },
    addTag: async (pm_id: string, tag_value: string)=>{
        return post(`${MAIL_TAG_ROOT}/mail/${pm_id}/tag/${tag_value}`)
            .then(res=>{console.log("서버에 태그 추가 완료."); return res;});
    },
    deleteTag: async (pm_id: string, tag_value: string)=>{
        return await del(`${MAIL_TAG_ROOT}/mail/${pm_id}/tag/${tag_value}`);
    }
};

function load_pm(user_id: string, token: string){
    return post(API_ROOT+"/private-mail/", {
        user_id: user_id,
        token: token
    });
}

function restore_birthday_pm(){
  post(API_ROOT+"/private-mail/restore-birthday-images");
}

function notify_server(mail: MailT, profile: string){
  const time = mail.time;
  const hour_minute = time.slice(time.length - 5);
  const now = new Date();

  if (hour_minute < now.toTimeString().slice(0,5)) return null;

  return fetch(API_ROOT + "/notification/" + profile, {method: 'POST', body: JSON.stringify(mail)})
}

async function load_favorite(user_id: string, token: string): Promise<string[]>{
  const response = await post(API_ROOT+"/private-mail/favorite", {
        user_id: user_id,
        token: token
    })
  return await response.json();
}

async function load_unread(user_id: string, token: string): Promise<string[]>{
  const response = await post(API_ROOT+"/private-mail/unread", {
        user_id: user_id,
        token: token
    })
  return await response.json();
}

async function add_profile_theme(theme: string, name: string){
  const response = await post(API_ROOT + `/profile/${theme}/name/${name}`);
  return response.status;
}

export default {
    AllTagDict,
    MailTagDict,
    load_pm,
    load_favorite,
    load_unread,
    restore_birthday_pm,
    notify_server,
    add_profile_theme
}
