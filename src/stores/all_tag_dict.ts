import { writable } from 'svelte/store';

export const EMPTY_TAG: string = null;

export const all_tag: TagT = {value:"์ ์ฒด", color: "rainbow"};
export const birthday_tag: TagT = {value: "์์ผ", color: "rainbow"};
export const favorite_tag: TagT = {value: "๐", color: "#fff"};
export const unread_tag: TagT = {value: "์ฝ์ง ์์", color: "#f06d9c"}

export const member_tags: TagT[] = [
    {"value":"๊ถ์๋น","color":"#bbb0dc"},
    {"value":"๋ฏธ์ผ์ํค ์ฌ์ฟ ๋ผ","color":"#f1d2e7"},
    {"value":"๊ฐํ์","color":"#db706c"},
    {"value":"์ต์๋","color":"#fcf695"},
    {"value":"์ด์ฑ์ฐ","color":"#a7e0e1"},
    {"value":"๊น์ฑ์","color":"#cee5d5"},
    {"value":"๊น๋ฏผ์ฃผ","color":"#fff"},
    {"value":"์ผ๋ถํค ๋์ฝ","color":"#b7d3e9"},
    {"value":"ํผ๋ค ํํ ๋ฏธ","color":"#f1c3aa"},
    {"value":"์กฐ์ ๋ฆฌ","color":"#f3aa51"},
    {"value":"์์ ์ง","color":"#567ace"},
    {"value":"์ฅ์์","color":"#d9598c"},
    {"value":"์ด์ํ","color":"gray"}
];

export const default_tag_dict = [favorite_tag, birthday_tag, unread_tag]
    .concat(member_tags)
    .reduce(((acc, tag) => {
        acc.set(tag.value, tag);
        return acc;
    }), new Map([
      [all_tag.value, all_tag]
    ]));

function init_all_tag_dict(){
    let result = default_tag_dict;

    const all_tag_json = localStorage.getItem("all_tag_dict");
    if (all_tag_json){
        console.log("all tag backup loaded");
        const data: [string, TagT][] = JSON.parse(all_tag_json);

        result = data.reduce((acc, entry) => {
            acc.set(entry[0], entry[1]);
            return acc;
        }, new Map(result.entries()));
    }
    return result;
}

export let all_tag_dict = writable(init_all_tag_dict());

all_tag_dict.subscribe(value=>{
    localStorage.setItem("all_tag_dict", dict_to_json(value));
})

function dict_to_json(dict: Map<string, TagT>){
    return JSON.stringify([...dict].filter((v)=>! default_tag_dict.has(v[0])));
}
