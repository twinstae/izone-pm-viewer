<script lang="ts">
import { goto, params } from "@roxi/routify";
import { dateString, date_to_str } from "../../stores/date";
import { now_page } from "../../stores/now";
import { date_mail_n_dict } from "../../stores/search";
import PinkButton from "./PinkButton.svelte";

const today = new Date();
$: today_str = date_to_str(today);

const today_in_n_year = (n_year)=> new Date(n_year, today.getMonth(), today.getDate());
const mail_exist = (date)=>$date_mail_n_dict.get(date_to_str(date)) || 0;

const mail_exist_2019 = mail_exist(today_in_n_year(2019));
const mail_exist_2020 = mail_exist(today_in_n_year(2020));
const mail_exist_2021 = mail_exist(today_in_n_year(2021));

const n_years_ago: Date = mail_exist_2019 ? today_in_n_year(2019)
     : mail_exist_2020 ? today_in_n_year(2020)
     : mail_exist_2021 && today.getFullYear() > 2021 ? today_in_n_year(2021) : null;

$: isToday = $dateString == today_str;

$: date = isToday ? n_years_ago : today;

function goto_date(){
    $dateString = date_to_str(date);
    $now_page = 1;
    
    const new_params = {...$params};
    new_params["dateString"] = $dateString;
    new_params["nowPage"] = 1;
    $goto("./", new_params);
};

</script>
<PinkButton onClick={goto_date}>
{isToday && n_years_ago
    ? `${n_years_ago.getFullYear()}년 오늘 ${mail_exist(n_years_ago)}건`
    : "현재로 돌아가기"}
</PinkButton>