<script lang="ts">
import { dark } from "../stores/preferences";
import Icon from "fa-svelte";
import {faSync} from "@fortawesome/free-solid-svg-icons/faSync"
import PinkButton from "./buttons/PinkButton.svelte";
import api from "../api";
let id: string = localStorage.getItem("pm-user-id");
let token: string = localStorage.getItem("pm-access-token");
$: onSubmit = ()=>{
    localStorage.setItem("pm-user-id", id);
    localStorage.setItem("pm-access-token", token);
    console.log(id, token);
    //const res = api.load_pm(token);
}
</script>


<style>
    h3 {font-size: 1.5rem;}
    h3, p, input {text-align: center;}
</style>
<div class="{$dark ? "text-gray-300": "text-black"}">

    <h3 class="m-3">
        최신 Private Mail을 불러옵니다.<Icon icon={faSync}/>
    </h3>
    
    <p>Private Mail 앱 id와 보안 토큰을 등록해주세요.</p>
    <p class="text-sm">값은 브라우저에 저장됩니다.</p>
    <p class="text-sm">핸드폰 앱에서 이어받으면 토큰이 초기화됩니다.</p>
    <p class="text-sm">초기화된 경우 다시 토큰을 받아주세요.</p>
    <div class="flex justify-center mt-4">
        <input
        bind:value={id}
        class="w-32 rounded m-1 p-1 {$dark ? "bg-gray-900": "text-white"}"
        placeholder="User Id"/>
        <input
        bind:value={token}
        class="w-64 rounded m-1 p-1 {$dark ? "bg-gray-900": "text-white"}"
        placeholder="Access Token"/>
        
        <PinkButton onClick={onSubmit} strong={true}>
            불러오기
        </PinkButton>
    </div>
</div> 