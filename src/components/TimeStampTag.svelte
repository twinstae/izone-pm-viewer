<script lang="ts">
    import Tag from "./Tag.svelte";
    export let time: string;
    export let size="xs";
</script>

<span
style="background-color: pink;"
class="border-1 m-1 p-1 rounded
text-{size}">
    {time}
</span>