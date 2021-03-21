
<script lang="ts">
import { metatags } from '@roxi/routify'
metatags.title = 'IZ*ONE Private Mail Viewer'
import MailDetailSection from "../components/MailDetailSection.svelte";
import MailListSection from "../components/MailListSection.svelte";
import { member_dict, member_name_dict } from "../stores/constants";
import { isDesktop, now_pm, pm_list } from '../stores/now';
import { all_tag_dict } from '../stores/all_tag_dict';
import { tag_to_mail_dict } from '../stores/tag_to_mail_dict';
import { mail_to_tag_dict } from '../stores/mail_to_tag_dict';

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
            return JSON.parse(arr.join(""));
        } catch (e) {
            if (i < 4){
                text = text.slice(1);
                return process(text, i+1);
            }
            throw e;
        }
    };

    const get_data = async (path) => {
        try {
            const res = await fetch(path);
            return await res.json();
        } catch (e) {
            console.log("json 로드 실패");
            const res = await fetch(path);
            const text = await res.text();
            return process(text, 0);
        }
    }

    async function init(){
        console.log("메일 리스트 로딩 시작");
        const mail_list_data = await get_data('./pm_list.json');
        console.log("메일 리스트 로딩 완료");
        
        console.log("이름 dict 로딩 시작");
        $member_dict = await get_data("./member_name.json");
        console.log("이름 dict 로딩 끝");
        console.log($member_dict);
        
        const mail_to_num_dict_res = await fetch("./mail_to_num_dict.json");
        const mail_to_num_dict = await mail_to_num_dict_res.json();

        $pm_list = mail_list_data.map((pm, i)=>{
            if (pm.id=="m20731"){$now_pm = pm;} // 메일 초기화
            pm.nick = pm.member;
            const member_n = $member_dict[pm.member];
            pm.member = member_name_dict[member_n];
            if (!pm.member && i <5700){                
                const member_n = mail_to_num_dict[pm.id];
                $member_dict[pm.nick] = member_n;
                pm.member = member_name_dict[member_n];
                console.log(pm.nick, pm.member);
            }
            return pm;
        })

        console.log("all_tag_dict", $all_tag_dict);
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
            $tag_to_mail_dict.set(birthday_tag, new Set());

            $pm_list.map(pm=>{
                if(pm.id.slice(0,1) == "b"){
                    addTag(birthday_tag, pm);
                }
            })
            $tag_to_mail_dict=$tag_to_mail_dict;
            $mail_to_tag_dict=$mail_to_tag_dict;
        }
    }

    init().then(()=>{haveInitiated=true});

    let width;
    $: isDesktop.set(width > 800);
    
</script>

<div
bind:clientWidth={width}
class="flex w-screen h-screen relative">
    {#if haveInitiated}
        <MailDetailSection />
        <MailListSection/>
    {/if}
</div>