import { writable } from 'svelte/store';

export const INIT_DATE = date_to_str(new Date(2021,3-1,20));

export let dateString = writable(INIT_DATE);

export function date_to_str(date: Date): string{
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    
    return [year, month, day].join("-");
}

export function str_to_date(str: string): Date{
    const [year, month, day] = str.split("-").map(s=>parseInt(s))
    return new Date(year, month -1, day);
}

export function time_to_dateStr(time: string): string{
    return time.split(" ")[0].replace(/\//g, "-");
}
