<script lang="ts">
    export let time: string;
    export let size="xs";
</script>

<span
style="background-color: pink; "
class="border-1 rounded
text-black
{size=="" ? "p-0.5" : "p-1"}
text-{size}">
    {time.slice(11) == "00:00" ? time.slice(0, 10) : time}
</span>