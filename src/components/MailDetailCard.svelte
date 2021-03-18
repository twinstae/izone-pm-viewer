<script lang="ts">
    import Tag from './Tag.svelte';
    import TimeStampTag from './TimeStampTag.svelte';
    import TagInput from './TagInput.svelte';
    import FavoriteHeart from './FavoriteHeart.svelte';
    import MemberTag from './MemberTag.svelte';
    import { get_translate_url, loadContent, now_pm } from '../stores/now';
    import { mail_to_tag_dict } from "../stores/mail_to_tag_dict";
import MemberProfileImg from './MemberProfileImg.svelte';

    $: now_tags = $mail_to_tag_dict.has($now_pm.id)
        ? Array.from($mail_to_tag_dict.get($now_pm.id))
        : [];
    let now_content = "";
    let translate_url = "";
    
    $: sync= ()=>{
        loadContent($now_pm.id).then(result=>{
            now_content = result;
            translate_url = get_translate_url(result);
        });
    }
    $: sync()

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
            <MemberProfileImg pm={$now_pm}/>
            <h4 class="text-xl m-1 w-4/5"> {$now_pm.subject}</h4>
        </div>
        <div class="absolute inset-y-0 right-0 m-1 h-8">
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