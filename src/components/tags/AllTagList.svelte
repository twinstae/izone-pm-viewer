<script lang="ts">
import { all_tag_dict, EMPTY_TAG } from '../../stores/all_tag_dict';
import { dynamic_dark_bg, ping } from '../../stores/preferences';
import SyncTagButtons from '../buttons/SyncTagButtons.svelte';
import Tag from './Tag.svelte';

export let hidden;

$: all_tags = Array.from($all_tag_dict.values());

</script>
<div
    class:hidden={hidden}
    style="min-height:43px;"
    class="AllTagList
    {$dynamic_dark_bg("bg-white")}
    h-36 p-2 m-1 shadow-2xl rounded-md overflow-y-auto">
    {#if $ping} <SyncTagButtons /> {/if}
    <div class="flex flex-wrap w-full">
        {#each all_tags as tag}
            <Tag tag={tag} size="sm"/>
        {/each}
    </div>
</div>
