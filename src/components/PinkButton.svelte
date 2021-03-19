<script lang="ts">
    export let onClick;
</script>

<button
class="rounded bg-red-100 m-2 pl-1 pr-1"
on:click={onClick}>
<slot></slot>
</button>
    