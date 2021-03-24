<script lang="ts">
import { goto, params } from "@roxi/routify";
import { show_list } from "../../stores/now";
</script>

<button
class="shadow rounded bg-red-200 p-1 mr-1"
on:click={()=>{
    $show_list=true;
    $goto("./", { ...$params, showList: true});
}}>
    목록🗃️
</button>