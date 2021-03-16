<script lang="ts">
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import Serviceworker from './Serviceworker.svelte';
</script>

<style global lang="postcss">
  @import "../assets/global.css";

  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;

</style>
<Router {routes} />
<Serviceworker/>