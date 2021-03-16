<script lang="ts">
import { page } from "@roxi/routify";

import pm_list from "./_pm_list.json";
import { member_dict, member_name_dict, getMemberName} from "./_constants";
import MailDetailSection from "../../components/MailDetailSection.svelte";
import MailListSection from "../../components/MailListSection.svelte";

import {tag_to_mail_dict } from "../../stores/tag";

const profile_list = ["one-the-story", "latest"];

Object.keys(member_dict).forEach(member_n=>{
    const member_name = member_name_dict[member_dict[member_n]];
    $tag_to_mail_dict.set(member_name, new Set());
})

pm_list.forEach(pm=>{
    const member_name = getMemberName(pm);
    $tag_to_mail_dict.has(member_name) && $tag_to_mail_dict.get(member_name).add(pm.id);
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
