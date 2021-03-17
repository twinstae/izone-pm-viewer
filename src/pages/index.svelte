
<script lang="ts">
    import { metatags } from '@roxi/routify'
    metatags.title = 'IZ*ONE Private Mail Viewer'
    
    import { member_dict, member_name_dict, member_color_dict} from "../stores/constants";
    
    import MailDetailSection from "../components/MailDetailSection.svelte";
    import MailListSection from "../components/MailListSection.svelte";
    import { all_tag_dict, selected_tag, tag_to_mail_dict } from "../stores/tag";
    import { now_pm, pm_list } from '../stores/now';
    fetch("./member_name.json")
        .then(response => response.json())
        .then(data=>{
            $member_dict = data;

            Object.keys(data).forEach((member_custom_name,i)=>{
                const member_n = data[member_custom_name];
                const member_name: string = member_name_dict[member_n];
                const member_color: string = member_color_dict[member_n];
                const member_tag = {
                    value: member_name,
                    color: member_color
                };

                if (!$all_tag_dict.has(member_name)){
                    $tag_to_mail_dict.set(member_tag, new Set());
                    $all_tag_dict.set(member_name, member_tag)
                }
            })

            fetch('./pm_list.json')
                .then(response => response.json())
                .then(mail_list_data => {
                    $pm_list = mail_list_data;
                    $pm_list.forEach((pm,i)=>{
                        if (pm.id=="m20731"){$now_pm = pm;} // 메일 초기화

                        const member_name = member_name_dict[$member_dict[pm.member]];
                        const member_tag = $all_tag_dict.get(member_name);
                    
                        $tag_to_mail_dict.has(member_tag) && $tag_to_mail_dict.get(member_tag).add(pm.id);
                    })
                });   
            $all_tag_dict= $all_tag_dict;
            $tag_to_mail_dict = $tag_to_mail_dict;
        })
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

<div id="coloriz-bg" class="absolute w-screen h-screen"></div>
<div
class="flex h-screen w-screen relative">
    <MailDetailSection />
    <MailListSection />
</div>