<script lang="ts">
import { member_color_dict, member_dict, member_name_dict } from "../stores/constants";

    import Tag from "./Tag.svelte";
    
    export let pm;
    export let size="xs";

    $: getMemberName =(pm) => member_name_dict[$member_dict[pm.member]];
    
    $: getMemberColor = (pm) => member_color_dict[$member_dict[pm.member]]

</script>
<Tag
tag={{value:getMemberName(pm)
    , color:getMemberColor(pm)}}
size={size}/>