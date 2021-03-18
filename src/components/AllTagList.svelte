<script lang="ts">
import { all_tag_dict } from '../stores/all_tag_dict';
import { selected_tag } from '../stores/tag';

import Tag from './Tag.svelte';

$: all_tags = Array.from($all_tag_dict.values());

$: check()
function check(){
    if($all_tag_dict.has($selected_tag.value)){
        $selected_tag = null;
    }
}
</script>

<div class="flex flex-wrap">
    {#each all_tags as tag}
        <Tag tag={tag}/>
    {/each}
</div>