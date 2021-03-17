<script lang="ts">
import { all_tag_dict } from "../stores/tag";
import Tag from './Tag.svelte';

$: all_tags = Array.from($all_tag_dict.values());

</script>

<div class="flex flex-wrap">
    <Tag tag={{value:"태그 목록", color:"lightgray"}}/>
    {#each all_tags as tag}
        <Tag tag={tag}/>
    {/each}
</div>