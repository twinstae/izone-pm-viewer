import { writable } from "svelte/store";

export let pm_list = writable([{"id": "", "member": "", "time": "", "subject": "", "preview": "", "n":1}]);

export let now_pm = writable({"id": "m20731", "member": "광배", "time": "2021/03/09 19:23", "subject": "사탕", "preview": "위즈원 사탕 푸딩 맛 있는거 알았어?? 맛있어보여서 사서 언제먹을지 고민중이야 ."});

export let now_page = writable(1);