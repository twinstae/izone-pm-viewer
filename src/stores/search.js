import { writable, derived } from 'svelte/store';
import Fuse from "fuse.js";
import { pm_list } from './now';

const options = {
    useExtendedSearch: true,
    keys: [
        "subject",
        "preview",
    ]
};

let fuse = derived(
    pm_list,
    $pm_list=>new Fuse($pm_list, options)
);

export let search_input = writable("");
export let fuzzy = writable(false);

export let pm_list_after_search = derived(
    [pm_list, fuse, search_input, fuzzy],
    ([$pm_list, $fuse, $search_input, $fuzzy]) =>{
        if (!$search_input){
            return $pm_list
        }
        return $fuse.search(($fuzzy ? "" : "'") + $search_input)
            .map(r=>r.item)
    }
);