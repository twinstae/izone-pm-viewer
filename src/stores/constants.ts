import { writable, derived } from "svelte/store";
import { SERVER_ROOT } from '../api';
export const member_color_dict = {
    0:"#d9598c",
    1:"#f1d2e7",
    2:"#f3aa51",
    3:"#fcf695",
    4:"#567ace",
    5:"#b7d3e9",
    6:"#bbb0dc",
    7:"#db706c",
    8:"#f1c3aa",
    9:"#cee5d5",
    10:"#fff",
    11:"#a7e0e1",
    12:"gray"
}

export const member_color_to_dark_dict = {
    "#d9598c":"#d02f6f",
    "#f1d2e7":"#c33c98",
    "#f3aa51":"#ee8b11",
    "#fcf695":"#efe407",
    "#567ace":"#345ab2",
    "#b7d3e9":"#3c89c3",
    "#bbb0dc":"#674eb1",
    "#db706c":"#cd3732",
    "#f1c3aa":"#dd6422",
    "#cee5d5":"#4f9665",
    "#fff"   :"#ddd",
    "#a7e0e1":"#41bcbe",
    "gray"   :"#595959",
    "LightPink": "#ff3352",
    "#f06d9c":"#f06d9c"
}

export let member_dict = writable({});

export let member_reverse_dict = derived(
    member_dict,
    $member_dict=>Object.keys($member_dict)
        .reduce((result, nick)=>({
        ...result, [member_dict[nick]]: nick
    }), {0:"장원영"})
)

export const member_name_dict = {
    0:"장원영",
    1:"미야와키 사쿠라",
    2:"조유리",
    3:"최예나",
    4:"안유진",
    5:"야부키 나코",
    6:"권은비",
    7:"강혜원",
    8:"혼다 히토미",
    9:"김채원",
    10:"김민주",
    11:"이채연",
    12:"운영팀"
}

export const base_tag_set = new Set(["💖", "장원영", "미야와키 사쿠라", "조유리", "최예나", "안유진", "야부키 나코", "권은비", "강혜원", "혼다 히토미", "김채원", "김민주", "이채연", "운영팀", "생일", "읽지 않음", "전체"]);

export const image_root = SERVER_ROOT + "/img/";
export const mail_root = SERVER_ROOT + "/mail/";

export const EMPTY_MAIL: MailT = {
    id: "",
    member: "",
    nick: "",
    time: "",
    subject: "",
    preview: "",
    body: "",
    images: [],
    videos: []
}
