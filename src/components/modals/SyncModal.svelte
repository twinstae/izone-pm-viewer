<script lang="ts">
import { dark } from "../../stores/preferences";
import Icon from "fa-svelte";
import {faSync} from "@fortawesome/free-solid-svg-icons/faSync"
import PinkButton from "../buttons/PinkButton.svelte";
import api from "../../api";
import { pm_list } from "../../stores/now";
import { member_dict, member_name_dict } from "../../stores/constants";
import { all_tag_dict } from "../../stores/all_tag_dict";
import { tag_to_mail_dict } from "../../stores/tag_to_mail_dict";

let user_id: string = localStorage.getItem("pm-user-id");
let token: string = localStorage.getItem("pm-access-token");

function process(text: string, i: number){
    try {
        console.log(`${i}차 시도`)
        console.log(text.slice(0,10));
        const arr = [];
        for (let i = 0; i<text.length; i+=2){
            arr.push(text[i])
        }
        const result = JSON.parse(arr.join(""));
        console.log("로딩 성공!")
        return result;
    } catch (e) {
        if (i < 4){
            text = text.slice(1);
            return process(text, i+1);
        }
        throw e;
    }
};

function get_data_from_text(text: string){
    try {
        return JSON.parse(text);
    } catch (e) {
        if (text.slice(0, 9) == "<!DOCTYPE"){
            throw e; 
        }
        if (e instanceof SyntaxError) {
            console.log("json 읽기 실패. 재시도합니다.");
            return process(text.slice(2), 2);
        }
        console.error(e);
    }
}

$: load_pm_list = async ()=>{
    localStorage.setItem("pm-user-id", user_id);
    localStorage.setItem("pm-access-token", token);
    console.log(user_id, token);
    const res = await api.load_pm(user_id, token);
    const text = await res.text();
    const data = get_data_from_text(text);
    
    const new_pm_list_data: MailT[] = data.pm_list;
    const mail_body_dict = data.mail_body_dict;

    const new_pm_list = new_pm_list_data.map(pm=>{
        pm.nick = pm.member;
        const member_n = $member_dict[pm.nick];
        pm.member = member_name_dict[member_n];
        const {body, images} = mail_body_dict[pm.id];
        pm.body = body;
        pm.images = images;
        return pm;
    });

    new_pm_list.forEach(pm=>{
        const member_tag = $all_tag_dict.get(pm.member);
        const mail_set = $tag_to_mail_dict.get(member_tag);
        if (mail_set) mail_set.add(pm.id);
    })
    
    $tag_to_mail_dict = $tag_to_mail_dict;
    $pm_list = new_pm_list.concat($pm_list);
}

async function restore_birthday_pm(){
  
}

async function load_favorite_list(){
  
}

async function load_unread_list(){

}

async function one_click(){
}
</script>


<style>
    h3 {font-size: 1.5rem;}
    h3, p, input {text-align: center;}

    div.SyncBody {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1rem;
    }
</style>
<div class="{$dark ? "text-gray-300": "text-black"}">

    <h3 class="m-3">
        최신 Private Mail을 불러옵니다.<Icon icon={faSync}/>
    </h3>
    
    <p>Id와 보안 토큰을 등록해주세요.</p>
    <p class="text-sm">값은 브라우저에 저장됩니다.</p>
    <p class="text-sm">기존 앱에서 이어받으면 토큰이 초기화됩니다.</p>
    <p class="text-sm">초기화된 경우 다시 토큰을 받아주세요.</p>
    <div class="SyncBody">
      <label for="UserIdInput">
        User Id
        <input
          bind:value={user_id}
          id="UserIdInput"
          class="w-32 rounded m-1 p-1 {$dark ? "bg-gray-900": "border-gray-200 border-2"}"
          placeholder="User Id"/>
      </label>
      
      <label for="AccessTokenInput">
        Access Token
        <input
          id="AccessTokenInput"
          bind:value={token}
          class="w-64 rounded m-1 p-1 {$dark ? "bg-gray-900": "border-gray-200 border-2"}"
          placeholder="Access Token"/>
      </label>
      <PinkButton onClick={load_pm_list} strong={true}>
        📧 남은 메일 불러오기
      </PinkButton>
      <PinkButton onClick={restore_birthday_pm} strong={true}>
        🎂 생일 프메 사진 복구
      </PinkButton>
      <PinkButton onClick={load_favorite_list} strong={true}>
        ⭐ 중요 메일 가져오기
      </PinkButton>
      <PinkButton onClick={load_unread_list} strong={true}>
        안 읽은 메일 가져오기
      </PinkButton>
      <PinkButton onClick={one_click} strong={true}>
        ⚠️ ONE CLICK ⚠️ 
      </PinkButton>
  </div>
</div> 
