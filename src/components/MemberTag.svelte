<script lang="ts">
    import {getMemberName, getMemberColor} from "../pages/_constants";
    import Tag from "./Tag.svelte";
    
    export let pm;
    export let size="xs";
</script>
<Tag
tag={{value:getMemberName(pm)
    , color:getMemberColor(pm)}}
size={size}/>