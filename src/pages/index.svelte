
<script lang="ts">
import { goto, metatags, params, redirect } from '@roxi/routify';
import Modal from '../components/Modal.svelte';
metatags.title = 'IZ*ONE Private Mail Viewer'
import MailDetailSection from "../components/MailDetailSection.svelte";
import MailListSection from "../components/MailListSection.svelte";
import { isDesktop, show_list } from '../stores/now';
import { INIT_DATE } from '../stores/date';
import { now_pm, pm_list } from '../stores/now';
import { member_dict, member_name_dict } from "../stores/constants";
import { all_tag_dict, EMPTY_TAG } from '../stores/all_tag_dict';
import { tag_to_mail_dict } from '../stores/tag_to_mail_dict';
import { mail_to_tag_dict } from '../stores/mail_to_tag_dict';
import { ping } from '../stores/preferences';
import { selected_tag_value } from '../stores/tag';
import api from '../api';

let haveInitiated = false;

$: addTag = (the_tag, the_pm)=>{
    $tag_to_mail_dict.get(the_tag).add(the_pm.id);
    if($mail_to_tag_dict.has(the_pm.id)){
        $mail_to_tag_dict.get(the_pm.id).add(the_tag)
    } else {
        $mail_to_tag_dict.set(the_pm.id, new Set([the_tag]))
    }
}

const process = (text, i)=>{
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

const get_data = async (path) => {
    const res = await fetch(path);
    const text = await res.text();
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

async function init(){
    await Promise.all([
        get_data('./pm_list.json'),
        get_data("./member_name.json"),
        get_data("./mail_to_num_dict.json"),
        get_data("./mail_body_dict.json")
            .catch(e=>{
                console.log("mail_body_dict가 없습니다.");
                return null;
            })
    ]).then((values)=>{
        const mail_list_data = values[0];
        $member_dict = values[1];
        console.log($member_dict);
        const mail_to_num_dict = values[2];
        const mail_body_dict = values[3];

        $pm_list = mail_list_data.map((pm, i)=>{
            if (pm.id=="m20731"){$now_pm = pm;} // 메일 초기화
            pm.nick = pm.member;
            const member_n = $member_dict[pm.nick];
            pm.member = member_name_dict[member_n];
            if (!pm.member && mail_to_num_dict.has(pm.id)){
                const member_n = mail_to_num_dict[pm.id];
                $member_dict[pm.nick] = member_n;
                pm.member = member_name_dict[member_n];
                console.log("member_name.json 에 멤버 이름이 없습니다.");
                console.log(pm.nick, pm.member);
            }
            if (mail_body_dict){
                pm.body = mail_body_dict[pm.id];
            }
            return pm;
        })
        
        let missing = 0;
        const hitomi_tag = $all_tag_dict.get("혼다 히토미");
        if($tag_to_mail_dict.has(hitomi_tag)){
            $pm_list.forEach((pm)=>{
                const member_tag = $all_tag_dict.get(pm.member);
                const mail_set = $tag_to_mail_dict.get(member_tag);
                if (mail_set){
                    mail_set.add(pm.id)
                } else {
                    console.log(pm.id, pm.nick);
                    missing += 1;
                }
            })
            $tag_to_mail_dict = $tag_to_mail_dict;
        }
        console.log("누락", missing)
        
        if(!$all_tag_dict.has("생일")){
            const birthday_tag = {
                value: "생일",
                color: "LightPink"
            };
            $all_tag_dict.set(birthday_tag.value, birthday_tag)
            $all_tag_dict=$all_tag_dict;
        }
        const birthday_tag = $all_tag_dict.get("생일");
        if (!$tag_to_mail_dict.has(birthday_tag)){
            $tag_to_mail_dict.set(birthday_tag, new Set());
            $pm_list.map(pm=>{
                if(pm.id.slice(0,1) == "b"){
                    addTag(birthday_tag, pm);
                }
            })
            $tag_to_mail_dict=$tag_to_mail_dict;
            $mail_to_tag_dict=$mail_to_tag_dict;
        }
    });
}

init().then(()=>{haveInitiated=true});

api.ping.then(res=>res.status == 200)
.then(()=>{
    console.log("API 서버 연결 성공! 신 서버로 작동합니다. 태그 동기화 및 저장 기능을 사용할 수 있습니다.")
    $ping = true;
})
.catch(e=>{
    console.error(e);
    console.log("구 버전 서버로 작동합니다.");
});

let width;
$: isDesktop.set(width > 700);

let show = null;

params.subscribe(p=>{   
    const new_show_list = p.showList == 'true';
    if(new_show_list != $show_list){
        $show_list = new_show_list;
    }
})

params.subscribe(p=>{
    if (!p.tag && $selected_tag_value != EMPTY_TAG) {
        $selected_tag_value = EMPTY_TAG;
    }
    
    if (p.tag){
        if (!$all_tag_dict.has(p.tag)){
            $redirect("./", { ...$params, tag: ""});
            console.log("redirect to empty tag url");

        } else if ($selected_tag_value != p.tag){
            const new_tag = $all_tag_dict.get(p.tag);
            $selected_tag_value = new_tag.value;
        }
    }
});

if (!$params.dateString){
    $goto("./", {
        dateString:INIT_DATE,
        nowPage:1,
        tag:"",
        search:"",
        showList:true,
        now_pm:"m20731"
    })
};
</script>

<div
bind:clientWidth={width}
class="flex w-screen h-screen relative">
{#if haveInitiated }
    <Modal show={show}>
        <MailDetailSection />
        <MailListSection/>
    </Modal>
{/if}
</div>
