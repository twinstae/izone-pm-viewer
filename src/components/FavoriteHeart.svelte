<script>
    import { tag_to_mail_dict, all_tag_dict } from "../stores/tag";

    export let pm;    
    
    const favorite_tag = $all_tag_dict.get("💖");
    $: favorited = pm => $tag_to_mail_dict.get(favorite_tag).has(pm.id);

    $: onFavorite = (pm)=>()=>{
        const favorite_set = $tag_to_mail_dict.get(favorite_tag);
        if (favorite_set.has(pm.id)){
            $tag_to_mail_dict.get(favorite_tag).delete(pm.id);
        } else {
            favorite_set.add(pm.id);
        }
        $tag_to_mail_dict = $tag_to_mail_dict;
        localStorage.setItem("tag_to_mail_dict", tag_to_mail_dict_to_json($tag_to_mail_dict));
    }
</script>
<label
class="text-xl"
on:click={onFavorite(pm)}
for="favorite">
    {#if favorited(pm)}💖{:else}🤍{/if}
</label>
<input type="checkbox"
class="hidden"
id="favorite"/>
