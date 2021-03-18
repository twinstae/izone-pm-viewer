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
    let translate_url = "";

    const removeTags = s=>s.replace(/\&nbsp;<\/div>/g,"\n")
        .replace(/<\/div>/g, "\n")
        .replace(/&nbsp;/g,'')
        .replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "")
        .replace(/\n\n/g,"\n")
        .replace(/\n/g,"%0A");
    const get_translate_url = (content)=>`https://papago.naver.com/?sk=ja&tk=ko&hn=1&st=${content}`;

    $: loadContent = ()=>{
        const cache = localStorage.getItem($now_pm.id);
        if (cache){
            now_content = cache;
            const textContent = removeTags(now_content);            
            translate_url = get_translate_url(textContent);
            return null;
        }

        now_content = "<h3>로딩 중</h3>"

        fetch(`./mail/${$now_pm.id}.html`)
            .then(result =>result.text())
            .then(raw_html=>{
                const start = raw_html.search(`<div class="main-contents" id="mail-detail"><html><head></head><body>`)+69;
                const end = raw_html.search(`</body></html></div>`);
                now_content = raw_html.slice(start, end);
                const textContent = removeTags(now_content);
                translate_url = get_translate_url(textContent);
                localStorage.setItem($now_pm.id, now_content);
            })
    }

    $: loadContent();

</script>
{#if now_content}
    <a class="
    text-sm
    shadow rounded bg-red-100
    ml-10 mt-5 p-1"
    href={translate_url}
    target="_blank">
        파파고로 번역하기
    </a>
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
</div>