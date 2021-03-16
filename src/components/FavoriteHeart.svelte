<script>
    import {tag_to_mail_dict} from "../stores/tag";

    export let pm;    
    
    $: favorite_set = $tag_to_mail_dict.get("💖");
    $: favorited = pm => favorite_set && favorite_set.has(pm.id);

    $: onFavorite = (pm)=>()=>{
        if ($tag_to_mail_dict.get("💖").has(pm.id)){
            $tag_to_mail_dict.get("💖").delete(pm.id);
        } else {
            $tag_to_mail_dict.get("💖").add(pm.id);
        }
        $tag_to_mail_dict = $tag_to_mail_dict;
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
