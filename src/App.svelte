<script lang="ts">
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;
  body {
        background-image: linear-gradient(to bottom right,
        #f1d2e7,#f1c3aa,#e382a9, #e18784,
        #f3aa51, #fcf695, #fff,#cee5d5,
        #a7e0e1, #b7d3e9, #bbb0dc, #7592d7);
    }
</style>
<Router {routes} />