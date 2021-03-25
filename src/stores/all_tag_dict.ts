import { writable } from 'svelte/store';

export const EMPTY_TAG: string = null;

export const favorite_tag: Tag = {value: "💖", color: "#fff"};

export const member_tags: Tag[] = [
    {"value":"권은비","color":"#bbb0dc"},
    {"value":"미야와키 사쿠라","color":"#f1d2e7"},
    {"value":"강혜원","color":"#db706c"},
    {"value":"최예나","color":"#fcf695"},
    {"value":"이채연","color":"#a7e0e1"},
    {"value":"김채원","color":"#cee5d5"},
    {"value":"야부키 나코","color":"#b7d3e9"},
    {"value":"혼다 히토미","color":"#f1c3aa"},
    {"value":"김민주","color":"#fff"},
    {"value":"조유리","color":"#f3aa51"},
    {"value":"안유진","color":"#567ace"},
    {"value":"장원영","color":"#d9598c"},
    {"value":"운영팀","color":"gray"}
];
    
function init_all_tag_dict(){
    let result = member_tags.reduce(((acc, tag) => {
        acc.set(tag.value, tag);
        return acc;
    }), new Map([
        ["💖", favorite_tag],
    ]));

    const all_tag_json = localStorage.getItem("all_tag_dict");
    if (all_tag_json){
        console.log("all tag backup loaded");
        const data: [string, Tag][] = JSON.parse(all_tag_json);
        result = [...result].reduce((acc, entry) => {
            acc.set(entry[0], entry[1]);
            return acc;
        }, new Map(data));
    }
    return result;
}

export let all_tag_dict = writable(init_all_tag_dict());

all_tag_dict.subscribe(value=>{
    localStorage.setItem("all_tag_dict", dict_to_json(value));
})

function dict_to_json(dict: Map<string, Tag>){
    return JSON.stringify([...dict]);
}