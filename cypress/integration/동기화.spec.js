import api from "../../src/api";
import {port} from './config';

const candidates = ["토끼", "testset", "테스트입니다", "주우행평"];
const getRandomName = ()=>candidates[Math.floor(Math.random() * candidates.length)];
const 토끼 = getRandomName();
const 옌로우 = "rgb(252, 246, 149)";

describe('모든 행동이 서버에 동기화된다', () => {
    async function 토끼_태그를_서버에_추가한다(){
        await api.AllTagDict.addTag({value: 토끼, color: "#fff"});
        await api.MailTagDict.addTag("m21406", 토끼);
    }
    function 태그가_존재한다(value, color=""){
        cy.get("span").contains(value).should('exist');
        if(color){
            cy.get("span").contains(value).should('have.css', "background-color", color);
        }
    }
    function 태그가_없다(value){
        cy.get("span").contains(value).should('not.exist');
    }
    function 모든_곳에서(func){
        cy.get(".AllTagList:first").within(func);
        cy.get("#MailDetailCardHeader").within(func);
        cy.get("#MailCard-0").within(func);
    }

    function 롱터치(target_selector){
        cy.get(target_selector).trigger('pointerdown')
        cy.wait(500)
    }

    it("초기화", ()=>{
        토끼_태그를_서버에_추가한다();

        cy.visit(`http://localhost:${port}/?dateString=2021-03-15&nowPage=1&showList=true&now_pm=m21406`);
        cy.get("#MailCard-0"); // 메일이 보이면
    })
  
    it('서버에 태그를 추가하고, 불러오기 버튼을 누르면, 태그가 생긴다.', () => {
        모든_곳에서(()=>{태그가_없다(토끼)});

        태그_불러오기_버튼을_클릭();
        cy.wait(300)

        모든_곳에서(()=>{태그가_존재한다(토끼)});
    });

    it("서버에서 태그를 수정하고, 다시 버튼을 누르면, 태그가 바뀐다.", ()=>{
        api.AllTagDict.updateTag(토끼, {value: 토끼, color: 옌로우});
        cy.wait(100);
        
        태그_불러오기_버튼을_클릭();
        cy.wait(300);

        모든_곳에서(()=>{태그가_존재한다(토끼, 옌로우)});
    })

    it("태그 올리기 버튼을 누르면, 서버에 태그를 덮어쓴다.", ()=>{
        // 태그를 캔디핑크로 수정한다.
        롱터치(`.Tag-${토끼}:first`);
        cy.get('#TagUpdateColorRadio-캔디핑크').click();
        cy.get('#TagUpdateButton').click();

        // 서버에서는 몰래 다시 옌로우로 바꿔둔다.
        api.AllTagDict.updateTag(토끼, {value: 토끼, color: 옌로우});
        cy.wait(300);

        cy.get("#UploadTagsButton").click();

        태그_불러오기_버튼을_클릭();
        모든_곳에서(()=>{태그가_존재한다(토끼, "rgb(217, 89, 140)")});
    })

    it("서버에서 태그를 삭제하고, 다시 버튼을 누르면, 태그가 사라진다.", ()=>{
        
        api.MailTagDict.deleteTag("m21406", 토끼);
        cy.wait(100);
        
        태그_불러오기_버튼을_클릭();
        cy.wait(300);

        모든_곳에서(()=>{태그가_없다(토끼)});
    })
  })

function 태그_불러오기_버튼을_클릭() {
    cy.get("#DownloadTagsButton").click();
}
