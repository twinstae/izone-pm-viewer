<script lang="ts">
import { params, redirect } from '@roxi/routify';
import { all_tag_dict, EMPTY_TAG } from '../../stores/all_tag_dict';
import { dynamic_dark_bg } from '../../stores/preferences';
import { selected_tag_value } from '../../stores/tag';
import Tag from './Tag.svelte';

export let hidden;

$: all_tags = Array.from($all_tag_dict.values());

$: check()
function check(){
    if($all_tag_dict.has($selected_tag_value)){
        $selected_tag_value = EMPTY_TAG;
        $redirect("./", {...$params, tag: ""});
    }
}
</script>
<div
    class:hidden={hidden}
    style="min-height:43px;"
    class="AllTagList
    {$dynamic_dark_bg}
    h-36 p-2 m-1 shadow-2xl rounded-md overflow-y-auto">
    <div class="flex flex-wrap w-full">
        {#each all_tags as tag}
            <Tag tag={tag} size="sm"/>
        {/each}
    </div>
</div>
