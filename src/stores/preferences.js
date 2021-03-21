import { writable } from "svelte/store";

const PROFILE_KEY = "preferences-profile";
function initProfile(){
    const value = localStorage.getItem(PROFILE_KEY);
    if (value){
        return value;
    }
    return "latest";
}
export let profile = writable(initProfile());

profile.subscribe((value)=>{
    localStorage.setItem(PROFILE_KEY, value);
})