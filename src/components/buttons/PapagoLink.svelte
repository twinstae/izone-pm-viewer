<script lang="ts">
import { now_pm } from "../../stores/now";
import { dynamic_dark_bg } from "../../stores/preferences";

$: mail_text = $now_pm.body
    .replace(/\n/g,"%0A")
    .replace(/\{이미지\}/g, '')
    .replace(/<[^>]+>/g, "");
</script>

<div class="w-16 p-1 shadow rounded mr-1 {$dynamic_dark_bg('bg-red-100')}">
  <a
    id="PapagoLink" 
    class="tooltip"
    href={"https://papago.naver.com/?sk=ja&tk=ko&hn=1&st="+mail_text}
    target="_blank">
      번역
    <img class="w-5 h-5 mt-0.5 float-right" src="./img/papago.png" alt="파파고 번역하기"/>
    <span class="tooltiptext" style="top:3rem;">p ('P'apago)</span>
  </a>
</div>
