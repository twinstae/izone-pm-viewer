import { str_to_date, time_to_dateStr } from '../stores/date';
import { now_pm, pm_list } from '../stores/now';
import { member_dict, member_name_dict } from "../stores/constants";
import { default_tag_dict, birthday_tag } from '../stores/all_tag_dict';
import { tag_to_mail_dict } from '../stores/tag_to_mail_dict';
import { mail_to_tag_dict } from '../stores/mail_to_tag_dict';


function addTag(the_tag: TagT, the_pm: MailT){
    tag_to_mail_dict.update((dict)=>{
        if (!dict.has(the_tag)){
          dict.set(the_tag, new Set([]))
        }
        const tag_set = dict.get(the_tag)
        tag_set.add(the_pm.id)
        return dict;
      });

    mail_to_tag_dict.update((dict)=>{
      if(! dict.has(the_pm.id)){
        dict.set(the_pm.id, new Set([]));
      }
      dict.get(the_pm.id).add(the_tag);
      return dict;
    })
}

function process(text: string, i: number){
    try {
        console.log(`${i}차 시도`)
        console.log(text.slice(0,10));
        const arr = [];
        for (let i = 0; i<text.length; i+=2){
            arr.push(text[i])
        }
        const result = JSON.parse(arr.join(""));
        console.log("로딩 성공!")
        return result;
    } catch (e) {
        if (i < 4){
            text = text.slice(1);
            return process(text, i+1);
        }
        throw e;
    }
};

async function get_data(path: string){
    const res = await fetch(path, {cache: "no-cache"});
    const text = await res.text();
    try {
        return JSON.parse(text);
    } catch (e) {
        if (text.slice(0, 9) == "<!DOCTYPE"){
            throw e; 
        }
        if (e instanceof SyntaxError) {
            console.log("json 읽기 실패. 재시도합니다.");
            return process(text, 1);
        }
        console.error(e);
    }
}

export async function initStores(): Promise<MailT[]>{
    return await Promise.all([
        get_data('./pm_list.json'),
        get_data("./member_name.json"),
        get_data("./mail_to_num_dict.json"),
        get_data("./mail_body_dict.json")
            .catch(e=>{
                console.error(e);
                console.log("mail_body_dict가 없습니다. 초기 설정을 하거나, 폴더 위치를 확인해주세요.");
                return null;
            })
    ]).then((values)=>{
        const mail_list_data = values[0];
        const member_to_n_dict = values[1];

        const mail_to_num_dict: Map<string, number> = new Map(Object.entries(values[2]));

        type MailBody = {body: string, images: string[], videos?: string[]};
        const mail_body_dict: Map<string, MailBody> = new Map(Object.entries(values[3]));

        const new_list: MailT[] = mail_list_data.map((pm: MailT, i: number)=>{
            if (i==0){now_pm.set(pm);} // 메일 초기화

            pm.nick = pm.member;
            
            const member_n = member_to_n_dict[pm.nick];

            pm.member = member_name_dict[member_n];
            if (!pm.member && mail_to_num_dict.has(pm.id)){
                const member_n = mail_to_num_dict.get(pm.id);
                
                member_to_n_dict[pm.nick] = member_n;

                pm.member = member_name_dict[member_n];
                console.log("member_name.json 에 멤버 이름이 없습니다.");
                console.log(pm.nick, pm.member);
            }
            if (mail_body_dict){
                if(!mail_body_dict.has(pm.id)){
                  alert(pm.id + "메일이 누락됐습니다.\n html 파일이 있는지 mail 폴더를 확인해주세요.\n 상담소 링크 : https://open.kakao.com/o/gPbArZ4c ");
                }
                const {body, images, videos} = mail_body_dict.get(pm.id);
                pm.body = body;
                pm.images = images || [];
                pm.videos = videos || [];
            }
            return pm;
          }).sort((pm: MailT)=>str_to_date(time_to_dateStr(pm.time)));

        pm_list.set(new_list);
        member_dict.set(member_to_n_dict);

        let missing = 0;
        tag_to_mail_dict.update(dict => {
            new_list.forEach((pm)=>{
                const member_tag = default_tag_dict.get(pm.member);
                const mail_set = dict.get(member_tag);
                if (mail_set){
                    mail_set.add(pm.id)
                } else {
                    console.log(pm.id, pm.nick);
                    missing += 1;
                }
            })
            return dict;
        })
        console.log("누락", missing)

        new_list.map(pm=>{
            if(pm.id.slice(0,1) == "b"){
                addTag(birthday_tag, pm);
            }
        });        

        return new_list;
    });
}

