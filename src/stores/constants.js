import { writable, derived } from "svelte/store";

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

export let member_dict = writable({
    "장원영": 0,
    "미야와키 사쿠라": 1,
    "조유리": 2,
    "오리예나": 3,
    "안유진": 4,
    "야부키 나코": 5,
    "권은비": 6,
    "광배": 7,
    "월클토미": 8,
    "쌈무": 9,
    "김민주 앤젤": 10,
    "깃털채연": 11,
    "운영팀": 12
});

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

export const member_name_list = ["장원영", "미야와키 사쿠라", "조유리", "최예나", "안유진", "야부키 나코", "권은비", "강혜원", "혼다 히토미", "김채원", "김민주", "이채연", "운영팀"];

export const image_root = "./img/";
export const mail_root = "./mail/";