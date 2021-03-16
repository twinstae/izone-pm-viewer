import { writable } from 'svelte/store';

export let dateString = writable(date_to_str(new Date()));

export function date_to_str(date){
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    
    return [year, month, day].join("-");
}

export function str_to_date(str){
    const [year, month, day] = str.split("-").map(s=>parseInt(s))
    return new Date(year, month -1, day);
}

export const time_to_dateStr = time => time.split(" ")[0].replaceAll("/", "-");
