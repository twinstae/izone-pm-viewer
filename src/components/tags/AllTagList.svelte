<script lang="ts">
import { all_tag_dict } from '../../stores/all_tag_dict';
import { dynamic_dark_bg} from '../../stores/preferences';
import SyncTagButtons from '../buttons/SyncTagButtons.svelte';
import Tag from './Tag.svelte';

export let hidden: boolean;

$: all_tags = Array.from($all_tag_dict.values());

/*
import { getContext } from 'svelte';
import EditMailModal from '../modals/EditMailModal.svelte';
import PinkButton from '../buttons/PinkButton.svelte';
const { open } = getContext('simple-modal');
function openMailEditModal(){
  open(EditMailModal)
}
<PinkButton onClick={openMailEditModal} strong={true}>+ 메일 추가</PinkButton>
*/
</script>
<div
    class:hidden={hidden}
    style="min-height:43px; z-index:1;"
    class="AllTagList
    {$dynamic_dark_bg('bg-white')}
    h-36 p-2 m-1 shadow-2xl rounded-md overflow-y-auto">
    <SyncTagButtons />
    <div class="flex flex-wrap w-full">
        {#each all_tags as tag}
            <Tag tag={tag} size="sm"/>
        {/each}
    </div>
</div>
