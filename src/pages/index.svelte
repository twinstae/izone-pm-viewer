
<script lang="ts">
    import { metatags } from '@roxi/routify'
    metatags.title = 'IZ*ONE Private Mail Viewer'
    import MailDetailSection from "../components/MailDetailSection.svelte";
    import MailListSection from "../components/MailListSection.svelte";
    import { member_dict, member_name_dict } from "../stores/constants";
    import { now_pm, pm_list } from '../stores/now';
import { all_tag_dict } from '../stores/all_tag_dict';
import { tag_to_mail_dict } from '../stores/tag_to_mail_dict';

    let haveInitiated = false;

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
    }

    init().then(()=>{haveInitiated=true});
</script>

<style>
    #coloriz-bg {
        background-image: linear-gradient(to bottom right,
        #f1d2e7,#f1c3aa,#d9598c, #db706c,
        #f3aa51, #fcf695, #fff,#cee5d5,
        #a7e0e1, #b7d3e9, #bbb0dc, #567ace);
        opacity: 0.6;
        z-index:-1;
    }
</style>

<div id="coloriz-bg" class="absolute w-full h-full"></div>
<div
class="flex h-screen w-screen relative">
    {#if haveInitiated}
        <MailDetailSection />
        <MailListSection />
    {/if}
</div>