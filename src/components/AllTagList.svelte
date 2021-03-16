<script lang="ts">
    import {member_color_dict} from "../pages/door/_constants";
    import Tag from './Tag.svelte';

    export let allTags: string[];
    export let onSelectTag;

</script>

<div class="flex flex-wrap">
    <Tag tag="태그 목록" bgColor="lightgray"/>
    {#each allTags as tag_item, i}
        <Tag tag={tag_item}
        bgColor={i==0
            ? "#fff"
            : member_color_dict[(i-1)%12]}
        onSelectTag={onSelectTag}/>
    {/each}
</div>