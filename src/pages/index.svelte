
<script lang="ts">
    import { metatags } from '@roxi/routify'
    metatags.title = 'IZ*ONE Private Mail Viewer'
    import pm_list from "./_pm_list.json";
    import { member_dict, member_name_dict, getMemberName, member_color_dict} from "./_constants";
    
    import MailDetailSection from "../components/MailDetailSection.svelte";
    import MailListSection from "../components/MailListSection.svelte";
    import { all_tag_dict, tag_to_mail_dict } from "../stores/tag";
    
    const member_tag_dict = new Map();
    
    Object.keys(member_dict).forEach((member_custom_name,i)=>{
        const member_n = member_dict[member_custom_name];
        const member_name: string = member_name_dict[member_n];
        const member_color: string = member_color_dict[member_n];
        const member_tag = {
            value: member_name,
            color: member_color
        };

        if (!$all_tag_dict.has(member_name)){
            $tag_to_mail_dict.set(member_tag, new Set());
    
            member_tag_dict.set(member_name, member_tag)
        }
    })
    
    pm_list.forEach((pm,i)=>{
        const member_name = getMemberName(pm);
        const member_tag = member_tag_dict.get(member_name);
    
        $tag_to_mail_dict.has(member_tag) && $tag_to_mail_dict.get(member_tag).add(pm.id);
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