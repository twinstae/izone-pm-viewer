<script>
    import { profile } from "../stores/preferences";
    const choices = [
        {path: "la-vie-en-rose", name:"라비앙 로즈"},
        {path: "one-the-story", name:"One The Story 포스터"},
        {path: "latest", name:"최신 프메"},
    ];

</script>

<style>
h3 {
        font-size: 1.5rem;
        text-align: center;
    }
</style>

<h3>프로필 사진을 변경합니다.</h3>
<div class="flex flex-col p-4">
    {#each choices as choice}
        <label>
            <input type="radio" bind:group={$profile} value={choice.path}>
            {choice.name}
        </label>
    {/each}
</div>