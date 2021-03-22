<script>
    import {all_tag_dict} from "../stores/all_tag_dict";
    import {tag_to_mail_dict} from "../stores/tag_to_mail_dict";
    import {image_root} from "../stores/constants";
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

    const imgClass= "w-5 h-5 mt-0.5 float-left";
</script>
<label
on:click={onFavorite(pm)}
for="favorite">
    {#if favorited(pm)}
        <img class={imgClass} src="{image_root}yellow-star.png" alt="좋아요 했어요"/>
    {:else}
        <img class={imgClass} src="{image_root}empty-star.png" alt="좋아요 하실래요?"/>
    {/if}
</label>
<input type="checkbox"
class="hidden"
id="favorite"/>
