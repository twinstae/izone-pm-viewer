<script lang="ts">
    import { all_tag_dict } from "../stores/all_tag_dict";
    import Tag from "./Tag.svelte";
    
    export let pm;
    export let size="xs";

    $: member_tag = $all_tag_dict.get(pm.member);
</script>

<Tag tag={member_tag} size={size}/>