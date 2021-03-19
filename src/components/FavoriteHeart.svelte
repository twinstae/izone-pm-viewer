<script>
    import {all_tag_dict} from "../stores/all_tag_dict";
    import {tag_to_mail_dict} from "../stores/tag_to_mail_dict";
    export let pm;
    
    $: favorite_tag = $all_tag_dict.get("💖");
    $: favorited = pm => $tag_to_mail_dict.get(favorite_tag).has(pm.id);

    $: onFavorite = (pm)=>()=>{
        const favorite_set = $tag_to_mail_dict.get(favorite_tag);
        if (favorite_set.has(pm.id)){
            favorite_set.delete(pm.id);
        } else {
            favorite_set.add(pm.id);
        }
        $tag_to_mail_dict = $tag_to_mail_dict;
    }
</script>
<label
class="text-xl"
on:click={onFavorite(pm)}
for="favorite">
    {#if favorited(pm)}
        <img class="w-6 h-6 float-none" src="./img/yellow-star.png" alt="파파고 번역하기"/>
    {:else}
        <img class="w-6 h-6 float-none" src="./img/empty-star.png" alt="파파고 번역하기"/>
    {/if}
</label>
<input type="checkbox"
class="hidden"
id="favorite"/>
