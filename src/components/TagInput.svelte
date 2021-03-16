<script lang="ts">
    export let tagInput: string;
    export let onAddTag: (e)=>void;
</script>

<input type="text"
class="
border-2 border-gray
m-1 p-1
rounded w-16
text-xs"
placeholder="새 태그"
bind:value={tagInput}
on:keypress={onAddTag}>