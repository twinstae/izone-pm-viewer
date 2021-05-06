<script lang="ts">
import { all_tag_dict } from '../../stores/all_tag_dict';
import { dynamic_dark_bg} from '../../stores/preferences';
import PinkButton from '../buttons/PinkButton.svelte';
import SyncTagButtons from '../buttons/SyncTagButtons.svelte';
import Tag from './Tag.svelte';
import SyncModal from '../modals/SyncModal.svelte';
import { getContext } from 'svelte';

export let hidden: boolean;

$: all_tags = Array.from($all_tag_dict.values());

const { open } = getContext('simple-modal');
const openSyncModal = () => open(SyncModal);

</script>
<div
    class:hidden={hidden}
    style="min-height:43px;"
    class="AllTagList
    {$dynamic_dark_bg("bg-white")}
    h-36 p-2 m-1 shadow-2xl rounded-md overflow-y-auto">
  <SyncTagButtons />
  <PinkButton id="SyncModalButton" onClick="{openSyncModal}" strong={true}>
    프메 서버🔄
  </PinkButton>
    <div class="flex flex-wrap w-full">
        {#each all_tags as tag}
            <Tag tag={tag} size="sm"/>
        {/each}
    </div>
</div>
