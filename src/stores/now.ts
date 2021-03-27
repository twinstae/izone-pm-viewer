import { Writable, writable, derived } from "svelte/store";

export let pm_list: Writable<Mail[]> = writable([{"id": "", "member": "", "time": "", "subject": "", "preview": "", "n":1}]);
export let now_pm: Writable<Mail> = writable({
    "id": "m20731",
    "member": "광배",
    "time": "2021/03/09 19:23",
    "subject": "사탕",
    "preview": "위즈원 사탕 푸딩 맛 있는거 알았어?? 맛있어보여서 사서 언제먹을지 고민중이야 ."
});

export async function loadContent(id: string): Promise<string>{
    const raw_html = await fetch(`./mail/${id}.html`)
        .then(result =>result.text());

    const start = raw_html.search(`<div class="main-contents" id="mail-detail"><html><head></head><body>`)+69;
    const end = raw_html.search(`</body></html></div>`);
    return raw_html.slice(start, end);
}

export let now_page = writable(1);

export let show_list = writable(true);
export let show_tag_list = writable(false);
export let isDesktop = writable(true);
export let isMobile = derived(
    isDesktop,
    $isDesktop=> !$isDesktop
);