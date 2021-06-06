<script lang="ts">
import { _ } from "svelte-i18n";
import t from "../../locales";
import { show_tag_list } from "../../stores/now";

import PinkButton from "../buttons/PinkButton.svelte";
import Icon from 'fa-svelte';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';

function onClick(){
  show_tag_list.update(v=>!v)
}

</script>

<PinkButton id="showTagListInput" onClick={onClick}>
  <Icon icon={faBars} />
</PinkButton>
