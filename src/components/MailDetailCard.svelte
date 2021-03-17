<script lang="ts">
    import {image_root} from "../stores/constants";
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

    let now_content = "";
    $: loadContent = async ()=>{
        const cache = localStorage.getItem($now_pm.id);
        if (cache){
            now_content = cache;
        }

        now_content = "<h3>로딩 중</h3>"

        fetch(`./mail/${$now_pm.id}.html`)
        .then(result =>result.text())
        .then(text=>{
            const start = text.search(`<div class="main-contents" id="mail-detail"><html><head></head><body>`)+69;
            const end = text.search(`</body></html></div>`);
            const content = text.slice(start, end);
            localStorage.setItem($now_pm.id, content);
            now_content = content;
        })
    }

    $: loadContent();

    $: translate = ()=>{
        const url = "https://papago.naver.com/?sk=ja&tk=ko&hn=1&st=" + now_content.replaceAll("\n\n","")
        let win = window.open(url, '_blank');
        win.focus();
    };
</script>
{#if now_content}
<button
class="
text-sm
shadow rounded bg-red-100
ml-10 mt-5 p-1"
on:click={translate}>
    파파고로 번역하기
</button>
{/if}
<div class="
bg-white
shadow-2xl rounded-md
ml-10 mt-2 p-2 h-4/6 w-80
flex-none
flex flex-col">
    <div class="relative w-full">
        <div class="relative">
            <img src="{image_root}profile/{$profile}/{$now_pm.member}.jpg"
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
    <div class="h-5/6 mt-3 overflow-scroll p-2"
    contenteditable=false
    bind:innerHTML={now_content}>
    </div>
    <!--
        <iframe
        on:load={()=>{"loaded"}}
        bind:this={frame} id="mail-detail" title="mail-body"
        src="{mail_root}{$now_pm.id}.html"
        class="h-5/6 mt-3">
        </iframe>
    -->
</div>