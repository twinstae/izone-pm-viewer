<script lang="ts">
import { all_tag_dict, EMPTY_TAG } from '../../stores/all_tag_dict';
import { selected_tag } from '../../stores/tag';
import Tag from './Tag.svelte';

export let hidden;

$: all_tags = Array.from($all_tag_dict.values());

$: check()
function check(){
    if($all_tag_dict.has($selected_tag.value)){
        $selected_tag = EMPTY_TAG;
    }
}
</script>
<div
    class:hidden={hidden}
    style="min-height:43px;"
    class="AllTagList
    h-36 p-2 mt-3 mb-3
    bg-white shadow-2xl rounded-md
    overflow-y-auto">
    <div class="flex flex-wrap">
        {#each all_tags as tag}
            <Tag tag={tag} size="sm"/>
        {/each}
    </div>
</div>
