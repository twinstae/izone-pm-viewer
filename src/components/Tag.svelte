<script lang="ts">
    import {onSelectTag, onDeleteTag} from "../stores/tag";

    export let tag: string;
    export let bgColor = "LightYellow";
    export let canDelete = false;
</script>

<span
on:click={onSelectTag(tag)}
style="background-color: {bgColor};"
class="
{canDelete
    ? "border-1 mt-1 ml-1 mb-1 p-1 rounded-l "
    : "border-1 m-1 p-1 rounded"}
text-xs text-gray-500">
    {tag}
</span>

{#if canDelete}
<span
on:click={onDeleteTag(tag)}
style="background-color: {bgColor};"
class="
rounded-r
mt-1 mb-1 p-1
text-xs"> X</span>
{/if}

