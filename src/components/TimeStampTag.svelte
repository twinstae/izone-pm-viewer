<script lang="ts">
    import Tag from "./Tag.svelte";
    export let time: string;
    export let size="xs";
</script>

<Tag tag={{value: time, color: "pink"}} size={size}/>