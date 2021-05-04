<script lang="ts">
    import { all_tag_dict } from "../../stores/all_tag_dict";
    import Tag from "./Tag.svelte";
    
    export let member_name: string;
    export let size="xs";

    $: member_tag = $all_tag_dict.get(member_name);
</script>

<Tag tag={member_tag} size={size}/>
