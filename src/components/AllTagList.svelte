<script lang="ts">
import {member_color_dict} from "../pages/door/_constants";
import { tag_to_mail_dict } from "../stores/tag";
import Tag from './Tag.svelte';

$: all_tags = Array.from($tag_to_mail_dict.keys());

</script>

<div class="flex flex-wrap">
    <Tag tag="태그 목록" bgColor="lightgray"/>
    {#each all_tags as tag_item, i}
        <Tag tag={tag_item}
        bgColor={i==0
            ? "#fff"
            : member_color_dict[(i-1)%12]}/>
    {/each}
</div>