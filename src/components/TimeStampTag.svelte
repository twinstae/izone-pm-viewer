<script lang="ts">
    export let time: string;
    export let size="xs";
</script>

<span
style="background-color: pink;"
class="border-1 m-1 rounded
{size=="" ? "p-0.5" : "p-1"}
text-{size}">
    {time}
</span>