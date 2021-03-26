import { derived, writable, Writable } from "svelte/store";

const PROFILE_KEY = "preferences-profile";
function initPref(key, default_value){
    const value = localStorage.getItem(key);
    if (value){
        return value;
    }
    return default_value;
}

export let profile = writable(initPref(PROFILE_KEY, "latest"));

profile.subscribe((value)=>{
    localStorage.setItem(PROFILE_KEY, value);
})

export let choices: Writable<Profile[]> = writable([]);

export let ping = writable(false);

const DARK_KEY = "dark-mode";
export let dark = writable(initPref(DARK_KEY, false));
dark.subscribe((value)=>{
    localStorage.setItem(DARK_KEY, value);
})

export let dynamic_dark_bg = derived(
    dark,
    $dark=>$dark ? "bg-gray-800 text-gray-300 " : "bg-white"
)