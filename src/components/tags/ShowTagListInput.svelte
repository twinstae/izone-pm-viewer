<script lang="ts">
import { show_tag_list } from "../../stores/now";
</script>

<label class="p-1" for="showTagListInput">
    태그 목록
    <input id="showTagListInput"
    type=checkbox
    bind:checked={$show_tag_list}>
</label>