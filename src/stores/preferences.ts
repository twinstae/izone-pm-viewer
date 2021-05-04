import { derived, writable, Writable } from "svelte/store";

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
