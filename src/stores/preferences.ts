import { derived, writable, Writable } from "svelte/store";
import Josa from 'josa-js';
const PROFILE_KEY = "preferences-profile";

function initStrPref(key: string, default_value: string){
    const value = localStorage.getItem(key);
    if (value){
        return value;
    }
    return default_value;
}

export let profile: Writable<string> = writable(initStrPref(PROFILE_KEY, "latest"));

profile.subscribe((value: string)=>{
    localStorage.setItem(PROFILE_KEY, value);
})

const OLD_NICK_KEY = "old-nick";
export let oldNick: Writable<string> = writable(initStrPref(OLD_NICK_KEY, "위즈원"));
oldNick.subscribe((value: string)=>{
    localStorage.setItem(OLD_NICK_KEY, value);
});

const WIZONE_KEY = "wizone-nick";
export let wizoneNick: Writable<string> = writable(initStrPref(WIZONE_KEY, "위즈원"));
wizoneNick.subscribe((value: string)=>{
    localStorage.setItem(WIZONE_KEY, value);
});

let replaceJosa = derived(
  [oldNick, wizoneNick],
  ([$oldNick, $wizoneNick])=>function(josa: string){
    if ($wizoneNick == "") return (a: string)=>a;

    if (josa == "") return (a:string) => a.replace(new RegExp($oldNick, "g"), $wizoneNick);

    const wizJosa = Josa.c($wizoneNick, josa);

    const [oldJosa1, oldJosa2] = josa.split("/");
    return (a: string) => a.replace(new RegExp($oldNick + oldJosa1, "g"), $wizoneNick + wizJosa)
      .replace(new RegExp($oldNick + oldJosa2, "g"), $wizoneNick + wizJosa);
  }
)

export let replaceWizone = derived(
  [replaceJosa],
  ([$replaceJosa])=>function replaceWizone(content: string){
    let result = $replaceJosa("이/가")(content);
    result = $replaceJosa("을/를")(result);
    result = $replaceJosa("은/는")(result);
    result = $replaceJosa("")(result);

    return result;
  }
)

const DARK_KEY = "dark-mode";
function initBooleanPref(key: string, default_value: boolean){
    const value = localStorage.getItem(key);
    if (value){
        return value == "true";
    }
    return default_value;
}
export let dark = writable(initBooleanPref(DARK_KEY, false));
dark.subscribe((value)=>{
    localStorage.setItem(DARK_KEY, value.toString());
});

export let dynamic_dark_bg = derived(
    dark,
    $dark=>(base: string)=>$dark ? "bg-gray-800 text-gray-300 " : base
);

export let dynamic_dark_border = derived(
    dark,
    $dark=>$dark ? "border-gray-700" : "border-gray-100"
);
