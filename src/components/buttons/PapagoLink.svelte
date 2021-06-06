<script lang="ts">
import { now_pm } from "../../stores/now";
import { dynamic_dark_bg } from "../../stores/preferences";
import { getLocaleFromNavigator, _ } from 'svelte-i18n'
import t from '../../locales';
import PinkButton from "./PinkButton.svelte";

$: mail_text = $now_pm.body
    .replace(/%/g, '%25')
    .replace(/\^\_\^/g, "%5E_%5E")
    .replace(/\^/g, "%5E")
    .replace(/<br>/g, "%0A")
    .replace(/\n/g,"%0A")
    .replace(/&nbsp;/g, "%0A")
    .replace(/\{이미지\}/g, '')
    .replace(/<[^>]+>/g, "")
    .replace(/\\/g, "%5C")
    .replace(/\:/g, "%3A")
    .replace(/\+/g, "%2B")
    .replace(/\?/g, "%3F")
    .replace(/[/]/g, "%25%23x2F")
    .replace(/&lt;/g, '%25lt')
    .replace(/&gt;/g, '%25gt')
    .replace(/&amp;/g, '%25amp')
    .replace(/%0A%0A/g, '%0A')
    .slice(0, 1000);


$: from_lang = $now_pm.member.length > 3 ? "ja" : "ko";
const raw_locale = getLocaleFromNavigator();
const supported_languges = new Set(["ko", "en", "ja", "th", "es", "fr", "de", "ru", "pt", "it", "vi", "id", "hi"]);
const to_lang = ()=>{
  // 중국어라면 그대로
  if (["zh-CN", "zh-TW"].includes(raw_locale)) return raw_locale;

  const base = raw_locale.slice(0, 2);
  if (supported_languges.has(base)) return base;

  return "en";
 };

$: papago_link = 'https://papago.naver.com/?sk='+from_lang+'&tk='+to_lang()+'&hn=1&st='+mail_text;

</script>

<PinkButton id="PapagoLinkButton">
  <a
    id="PapagoLink" 
    class="tooltip"
    href={papago_link}
    target="_blank">
      {$_(t.번역)}
    <img class="w-5 h-5 mt-0.5 float-right" src="./img/papago.png" alt="파파고 번역하기"/>
    <span class="tooltiptext" style="top:3rem;">
      p ('P'apago)
    </span>
  </a>
</PinkButton>

