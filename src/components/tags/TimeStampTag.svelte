<script lang="ts">
import { dark } from "../../stores/preferences";


    export let time: string;
    export let size="xs";
</script>

<span
class="border-1 rounded
{$dark ? "border-2 border-gray-900 bg-gray-600" : "bg-red-100"}
{size=="" ? "p-0.5" : "p-1"}
text-{size} whitespace-nowrap">
    {time.slice(2)}
</span>