<script lang="ts">
import { show_tag_list } from "../../stores/now";
import { dynamic_dark_bg } from "../../stores/preferences";

</script>

<label class="p-1 rounded {$dynamic_dark_bg("bg-red-100")}" for="showTagListInput">
    태그 목록
    <input id="showTagListInput"
    type=checkbox
    bind:checked={$show_tag_list}>
</label>