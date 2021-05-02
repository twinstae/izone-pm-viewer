<script lang="ts">
import {all_tag_dict} from "../stores/all_tag_dict";
import {tag_to_mail_dict} from "../stores/tag_to_mail_dict";
import Icon from 'fa-svelte';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import { faStar as emptyStar} from '@fortawesome/free-regular-svg-icons/faStar';
import api from "../api";

export let pm_id: string;
export let float = "right";


$: favorite_tag = $all_tag_dict.get("💖");
$: favorite_set = $tag_to_mail_dict.get(favorite_tag);
$: favorited = favorite_set ? favorite_set.has(pm_id) : false;

$: onFavorite = async ()=>{
    const favorite_set = $tag_to_mail_dict.get(favorite_tag);
    if (favorite_set.has(pm_id)){
        favorite_set.delete(pm_id);

        api.MailTagDict.deleteTag(pm_id, "💖");
    } else {
        favorite_set.add(pm_id);
        api.MailTagDict.addTag(pm_id, "💖");
    }
    $tag_to_mail_dict = $tag_to_mail_dict;
}

</script>
<label
style="color: {favorited ? "#ffb40d" : "#999"};"
on:click={onFavorite}
for="favorite">
    <Icon class="float-{float} text-xl"
    icon={favorited ? faStar : emptyStar}></Icon>
</label>
<input type="checkbox"
class="hidden"
id="favorite"/>
