<script lang="ts">
import {all_tag_dict} from "../stores/all_tag_dict";
import { tag_to_mail_dict} from "../stores/tag_to_mail_dict";
import { favorite } from "../stores/tag";
import Icon from 'fa-svelte';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import { faStar as emptyStar} from '@fortawesome/free-regular-svg-icons/faStar';

export let pm_id: string;
export let float = "right";


$: favorite_tag = $all_tag_dict.get("💖");
$: favorite_set = $tag_to_mail_dict.get(favorite_tag);
$: favorited = favorite_set ? favorite_set.has(pm_id) : false;
function onFavorite(){
  favorite(pm_id);
}

</script>


<label
  class="tooltip"
  style="color: {favorited ? '#ffb40d' : '#999'};"
  on:click={onFavorite}
  for="favorite">
    <Icon class="float-{float} text-xl cursor-pointer"
          icon={favorited ? faStar : emptyStar}></Icon>
    <span class="tooltiptext top-0 right-8">f ('F'avorite)</span>
</label>
<input type="checkbox"
class="hidden"
id="favorite-{pm_id}"/>
