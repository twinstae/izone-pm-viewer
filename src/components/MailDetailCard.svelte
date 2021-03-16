<script lang="ts">
    import {getMemberName} from "../pages/door/_constants";
    import Tag from './Tag.svelte';
    import TimeStampTag from './TimeStampTag.svelte';
    import TagInput from './TagInput.svelte';
    import FavoriteHeart from './FavoriteHeart.svelte';
    import MemberTag from './MemberTag.svelte';
    import { now_pm } from '../stores/now';
    import { mail_to_tag_dict } from "../stores/tag";
    import { profile } from "../stores/preferences";

    $: getTags = pm => ($mail_to_tag_dict.has(pm.id) ? Array.from($mail_to_tag_dict.get(pm.id)): []);

    $: now_tags = getTags($now_pm);

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
            <img src="/img/profile/{$profile}/{getMemberName($now_pm)}.jpg"
            class="w-10 h-10 ml-1 mr-2 rounded-full float-left"
            alt=""/>
            <h4 class="text-xl m-1 w-4/5"> {$now_pm.subject}</h4>
        </div>
        <div class="absolute inset-y-0 right-0 m-1">
            <FavoriteHeart pm={$now_pm}/>
        </div>
        <br/>
        <div class="flex flex-wrap">
            <MemberTag pm={$now_pm}  size="sm"/>
            <TimeStampTag time={$now_pm.time} size="sm"/>
            {#each now_tags as tag}
                <Tag tag={tag} canDelete={true} size="sm"/>
            {/each}
            <TagInput/>
        </div>                
    </div>

    <iframe
    bind:this={frame} 
    id="mail-detail"
    class="h-5/6 mt-3"
    title="mail-body"
    src="./mail/{$now_pm.id}.html"></iframe>
</div>