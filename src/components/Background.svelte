<script lang="ts">
import { image_root } from "../stores/constants";
import { isMobile } from "../stores/now";
import { dark } from "../stores/preferences";

const color_iz = `
    linear-gradient(to bottom right,
    #f1d2e7,#f1c3aa,#e382a9, #e18784,
    #f3aa51, #fcf695, #fff,#cee5d5,
    #a7e0e1, #b7d3e9, #bbb0dc, #7592d7)`

$: custom_mic = `url('${image_root}bg/custom_mic${$isMobile ? "_m" : ""}.jpg')`;

$: background_image = $dark ? custom_mic : color_iz;

</script>

<div id="Background" class="w-screen h-screen absolute bg-contain"
style="background-image: {background_image};
       background-position: center;
       background-size: cover;
       background-attachment: fixed;"></div>