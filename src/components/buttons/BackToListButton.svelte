<script lang="ts">
import { goto, params } from "@roxi/routify";
import { show_list } from "../../stores/now";
import { dark } from "../../stores/preferences";
</script>

<button
class="shadow rounded p-1 mr-1 {$dark ? "bg-gray-800 text-gray-300" : "bg-red-100"}"
on:click={()=>{
    $show_list=true;
    $goto("./", { ...$params, showList: true});
}}>
    목록🗃️
</button>