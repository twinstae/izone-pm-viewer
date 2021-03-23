<script lang="ts">
import { afterUpdate } from "svelte";

    import { fade } from "svelte/transition";
    interface Image {
        date: string;
        name: string;
        n: string;
    }

    export let image: Image;

    let element;
    
    const size = 250;
    let max_height = size * 1.25;
    let max_width = size * 1.25;
    let haveInitiated = false;
    afterUpdate(()=>{
        setTimeout(()=>{
            if (element && !haveInitiated){
                const direction = element.width > element.height;
                max_height = size * (direction ? 1 : 1.25);
                max_width  = size * (direction ? 1.25 : 1);
                haveInitiated = true;
            }
        }, 200)
    })
</script>

<li
transition:fade={{ duration: 1000 }}
style="max-height:{size}px; max-width:{size}px; overflow: hidden;"
class="m-2 shadow-lg border-white border-8 rounded">
    <img
    bind:this={element}
    style="max-height:{max_height}px; max-width: {max_width}px;"
    src={`/img/mail/${image.n}/${image.date.replace(/-/g, "")}/${image.name}`} alt="">
</li>