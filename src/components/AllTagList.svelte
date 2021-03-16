<script lang="ts">
import { tag_to_mail_dict } from "../stores/tag";
import Tag from './Tag.svelte';

$: all_tags = Array.from($tag_to_mail_dict.keys());

</script>

<div class="flex flex-wrap">
    <Tag tag={{value:"태그 목록", color:"lightgray"}}/>
    {#each all_tags as tag}
        <Tag tag={tag}/>
    {/each}
</div>