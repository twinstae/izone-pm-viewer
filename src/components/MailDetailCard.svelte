<script lang="ts">
    import {getMemberName, getMemberColor} from "../pages/door/_constants";
    import Tag from './Tag.svelte';
    import TagInput from './TagInput.svelte';
    import TimeStampTag from './TimeStampTag.svelte';

    export let now_pm;
    export let now_mail;
    export let now_tags: string[];
    export let onFavorite;
    export let favorited;
    export let onSelectTag;
    export let onDeleteTag;
    export let onAddTag;
    export let tag_input;
    export let preferences;

    let frame;
    function translate(){
        const url = "https://papago.naver.com/?sk=ja&tk=ko&hn=1&st=" + frame.contentDocument.body.innerText.replaceAll("\n\n","")
        var win = window.open(url, '_blank');
            win.focus();
    };

</script>
<button
class="
text-sm
shadow rounded bg-red-100
ml-10 mt-5 p-1"
on:click={translate}>
    파파고로 번역하기
</button>
<div class="
bg-white
shadow-2xl rounded-md
ml-10 mt-2 p-2 h-4/6 w-80
flex-none
flex flex-col">
    <div class="relative w-full">
        <div class="relative">
            <img src="/img/profile/{preferences.profile}/{getMemberName(now_pm)}.jpg"
            class="w-10 h-10 ml-1 mr-2 rounded-full float-left"
            alt=""/>
            <h4 class="text-xl m-1 w-4/5"> {now_pm.subject}</h4>
        </div>
        <div
        class="
        absolute
        inset-y-0 right-0 m-1">
            <label
            class="text-xl"
            on:click={onFavorite(now_pm)}
            for="favorite">
                {#if favorited(now_pm)}💖{:else}🤍{/if}
            </label>
            <input type="checkbox"
            class="hidden"
            id="favorite"/>
        </div>
        <br/>
        <div class="flex flex-wrap">
            <Tag
                tag={getMemberName(now_pm)}
                bgColor={getMemberColor(now_pm)}
                onSelectTag={onSelectTag}/>
            <TimeStampTag time={now_pm.time} />
            {#each now_tags as tag_item}
                <Tag
                    tag={tag_item}
                    onSelectTag={onSelectTag}
                    onDeleteTag={onDeleteTag}/>
            {/each}
            <TagInput bind:tagInput={tag_input} onAddTag={onAddTag}/>
        </div>                
    </div>

    <iframe
    bind:this={frame} 
    id="mail-detail"
    class="h-5/6 mt-3"
    title="mail-body"
    src="./mail/{now_mail}.html"></iframe>
</div>