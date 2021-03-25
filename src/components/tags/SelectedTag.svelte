<script lang="ts">
import { goto, params } from "@roxi/routify";
import { all_tag_dict, EMPTY_TAG } from "../../stores/all_tag_dict";
import { now_page } from "../../stores/now";
import { selected_tag_value } from "../../stores/tag";
import Tag from "./Tag.svelte";

const remove_selected_tag = ()=>{
    $selected_tag_value = EMPTY_TAG;
    $now_page = 1;
    $goto("./", {...$params, tag: ""})
};

</script>
<span class="ml-1 mt-1">현재 :</span>
<Tag
tag={$all_tag_dict.get($selected_tag_value)}
canDelete={true}
onRemove={remove_selected_tag}
size="sm"/>