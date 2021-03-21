<script lang="ts">
import { all_tag_dict, EMPTY_TAG } from '../stores/all_tag_dict';
import { isDesktop } from '../stores/now';
import { selected_tag } from '../stores/tag';

import Tag from './Tag.svelte';

$: all_tags = Array.from($all_tag_dict.values());

$: check()
function check(){
    if($all_tag_dict.has($selected_tag.value)){
        $selected_tag = EMPTY_TAG;
    }
}
</script>

<div class="flex flex-wrap">
    {#each all_tags as tag}
        <Tag tag={tag} size={$isDesktop ? "xs" : "sm"}/>
    {/each}
</div>