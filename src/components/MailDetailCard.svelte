<script lang="ts">
import Tag from './Tag.svelte';
import TimeStampTag from './TimeStampTag.svelte';
import TagInput from './TagInput.svelte';
import FavoriteHeart from './FavoriteHeart.svelte';
import MemberTag from './MemberTag.svelte';
import { loadContent, now_pm, isDesktop, now_content, show_list, isMobile } from '../stores/now';
import { mail_to_tag_dict } from "../stores/mail_to_tag_dict";
import MemberProfileImg from './MemberProfileImg.svelte';
import { fade } from 'svelte/transition';
import { goto, params } from '@roxi/routify';
    export let show;

    $: now_tags = $mail_to_tag_dict.has($now_pm.id)
        ? Array.from($mail_to_tag_dict.get($now_pm.id))
        : [];
    
    $: sync= ()=>{
        $now_content="";

        loadContent($now_pm.id).then(result=>{
            setTimeout(()=>{ $now_content = result;}, 100);
        });
    }
    $: sync()

    let height;
    $: over = height < 40;
</script>

<div
style="max-height: {$isDesktop && show ? "70%" : "90%"}"
class="
shadow-2xl rounded-md bg-white 
w-full mt-2 p-2
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
    {#if $now_content}
        <div class="h-5/6 overflow-scroll p-1">
            <div
            transition:fade={{ duration: 200 }}
            contenteditable=false
            bind:innerHTML={$now_content}>
                
            </div>
            {#if $isMobile}
            <button
            class="shadow rounded bg-red-200 p-1 mt-2"
            on:click={()=>{
                $show_list=true;
                $goto("./", { ...$params, showList: true});
            }}>
                목록으로 돌아가기🗃️
            </button>
            {/if}
        </div>
    {/if}
</div>