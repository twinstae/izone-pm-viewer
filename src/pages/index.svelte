
<script lang="ts">
import { metatags } from '@roxi/routify'
metatags.title = 'IZ*ONE Private Mail Viewer'
import MailDetailSection from "../components/MailDetailSection.svelte";
import MailListSection from "../components/MailListSection.svelte";
import { member_dict, member_name_dict } from "../stores/constants";
import { isDesktop, now_pm, pm_list, show_list } from '../stores/now';
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

    async function init(){
        const mail_list_res = await fetch('./pm_list.json');
        const mail_list_data = await mail_list_res.json();
        const name_dict_res = await fetch("./member_name.json");
        $member_dict = await name_dict_res.json();

        $pm_list = mail_list_data.map((pm)=>{
            if (pm.id=="m20731"){$now_pm = pm;} // 메일 초기화
            const member_n = $member_dict[pm.member];
            pm.member = member_name_dict[member_n];
            return pm;
        })

        const hitomi_tag = $all_tag_dict.get("혼다 히토미");
        if($tag_to_mail_dict.has(hitomi_tag)){
            $pm_list.map(pm=>{
                const member_tag = $all_tag_dict.get(pm.member);
                $tag_to_mail_dict.get(member_tag).add(pm.id);
            })
            $tag_to_mail_dict = $tag_to_mail_dict;
        }
        
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