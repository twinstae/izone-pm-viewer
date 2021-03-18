<script lang="ts">
import Tag from './Tag.svelte';
import TimeStampTag from './TimeStampTag.svelte';
import TagInput from './TagInput.svelte';
import FavoriteHeart from './FavoriteHeart.svelte';
import MemberTag from './MemberTag.svelte';
import { get_translate_url, loadContent, now_pm, isDesktop } from '../stores/now';
import { mail_to_tag_dict } from "../stores/mail_to_tag_dict";
import MemberProfileImg from './MemberProfileImg.svelte';
import { fade } from 'svelte/transition';

    $: now_tags = $mail_to_tag_dict.has($now_pm.id)
        ? Array.from($mail_to_tag_dict.get($now_pm.id))
        : [];
    let now_content = "";
    let translate_url = "";
    
    $: sync= ()=>{
        now_content="";

        loadContent($now_pm.id).then(result=>{
            setTimeout(()=>{    
                now_content = result;
                translate_url = get_translate_url(result);
            }, 100);
        });
    }
    $: sync()

    let height;
    $: over = height < 40;
</script>
<a class="
p-1 {$isDesktop ? "m-10" : "m-2"}
shadow rounded bg-red-100"
href={translate_url}
target="_blank">
    파파고로 번역하기
</a>
<div
class="
bg-white
shadow-2xl rounded-md
ml-10 mt-2 p-2
{$isDesktop ? "w-80 h-2/3" : "mr-10 h-3/4 w-10/12"}
flex-none
flex flex-col">
    <div class="relative w-full">
        <div class="relative" bind:clientHeight={height}>
            <MemberProfileImg pm={$now_pm}/>
            <h4 class="text-xl m-1 w-4/5"> {$now_pm.subject}</h4>
        </div>
        {#if over}<br/>{/if}
        <div class="absolute inset-y-0 right-0 m-1 h-8">
            <FavoriteHeart pm={$now_pm}/>
        </div>
        <div class="flex flex-wrap">
            <MemberTag pm={$now_pm}  size="sm"/>
            <TimeStampTag time={$now_pm.time} size="sm"/>
            {#each now_tags as tag}
                <Tag tag={tag} canDelete={true} size="sm"/>
            {/each}
            <TagInput/>
        </div>                
    </div>
    {#if now_content}
        <div class="h-5/6 mt-3 overflow-scroll p-2"
        transition:fade="{{ duration: 200 }}"
        contenteditable=false
        bind:innerHTML={now_content}>
        </div>
    {/if}
</div>