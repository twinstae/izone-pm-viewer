import { writable, derived } from 'svelte/store';
import Fuse from "fuse.js";
import { pm_list, now_page } from './now';
import { tag_to_mail_dict } from './tag_to_mail_dict';
import { selected_tag } from './tag';
import { dateString } from './date';

const options = {
    useExtendedSearch: true,
    keys: [
        "subject",
        "preview",
        "body"
    ]
};

let fuse = derived(
    pm_list,
    $pm_list=>new Fuse($pm_list, options)
);

export let search_input = writable("");

export let pm_list_after_search = derived(
    [pm_list, fuse, search_input],
    ([$pm_list, $fuse, $search_input]) =>{
        if (!$search_input){
            return $pm_list
        }
        return $fuse.search("'" + $search_input)
            .map(r=>r.item)
    }
);

export let filtered_list = derived(
    [pm_list_after_search, selected_tag, tag_to_mail_dict, search_input, dateString],
    ([$pm_list_after_search, $selected_tag, $tag_to_mail_dict, $search_input, $dateString])=>{

        const selected_tag_mail_set = $tag_to_mail_dict.get($selected_tag);
        const filterByTag = (mail)=> selected_tag_mail_set.has(mail.id);

        const filterByDate = mail => {
            const date_str = mail.time.split(" ")[0].replace(/\//g, "-");
            return date_str == $dateString;
        };

        const no_filter = (mail)=>true;

        const filter_by = 
        ($selected_tag.value && filterByTag) ||
        ($search_input && no_filter)||
        ($dateString && filterByDate) || 
        no_filter;

        return $pm_list_after_search.filter(filter_by);
    }
)

const EMPTY_MAIL = {"id": "", "member": "", "time": "", "subject": "", "preview": ""};
export let getPage = derived(
    [filtered_list, now_page],
    ([$filtered_list, $now_page]) => {
        return function(mail_per_page: number){
            const pagination = ($now_page-1) * mail_per_page;
            const page = $filtered_list.slice(pagination, pagination + mail_per_page)
            if(page.length < mail_per_page){
                return page.concat(Array(mail_per_page-page.length).fill(EMPTY_MAIL))
            }
            return page;
        }
    }
);