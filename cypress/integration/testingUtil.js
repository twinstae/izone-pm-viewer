import api from "../../src/api";

const candidates = ["토끼", "testset", "테스트입니다", "주우행평"];
const getRandomName = ()=>candidates[Math.floor(Math.random() * candidates.length)];
export const 토끼 = getRandomName();
export const 옌로우 = "rgb(252, 246, 149)";
export const 캔디핑크 = "rgb(217, 89, 140)";

export function 태그_불러오기_버튼을_클릭() {
    cy.get("#DownloadTagsButton").click();
}

export function 태그_올리기_버튼을_클릭() {
    cy.get("#UploadTagsButton").click();
}

export async function 토끼_태그를_서버에_추가한다(){
    await api.AllTagDict.addTag({value: 토끼, color: "#fff"});
    await api.MailTagDict.addTag("m21406", 토끼);
}

export function 태그를_추가한다(value){
    cy.get("#TagInput").type(value)
    cy.get("#AddTagButton").click();
}

export function 태그가_존재한다(value, color=""){
    cy.get("span").contains(value).should('exist');
    if(color){
        cy.get("span").contains(value).should('have.css', "background-color", color);
    }
}

export function 태그가_없다(value){
    cy.get("span").contains(value).should('not.exist');
}

export function 모든_곳에서(func){
    cy.get(".AllTagList:first").within(func);
    cy.get("#MailDetailCardHeader").within(func);
    cy.get("#MailCard-0").within(func);
}

export function 롱터치(target_selector){
    cy.get(target_selector).trigger('pointerdown')
    cy.wait(500)
}

export function 태그를_수정한다(old_tag_value, new_value, new_color_name){
    const slug = old_tag_value.replace(" ", "-");
    롱터치(`.Tag-${slug}:first`);
    if (old_tag_value != new_value){
        cy.get('#TagUpdateInput').type('{backspace}'.repeat(old_tag_value.length) + new_value);
    }
    cy.get('#TagUpdateColorRadio-'+new_color_name).click();
    cy.get('#TagUpdateButton').click();
}

export function 태그를_클릭한다(tag_value, title){
    const slug = tag_value.replace(' ','-');
    cy.get(`.Tag-${slug}:first`).click();
}
export function 첫번째_카드를_클릭한다(){
    cy.get("#MailCard-0 div p").click();
}

export function 첫번째_카드의_제목은(title){
    cy.get("#MailCard-0 div h4").should('have.text', title);
}

const 첫번째_카드_제목_of_tag = {
    "미야와키 사쿠라": '。',
    "강혜원": '어제',
    "최예나": '맞다!!',
    "이채연": '21/3/14_어제 프메 (D-day🙌🏻)',
    "혼다 히토미": "😌",
    "안유진": "🐻🧸",
    "운영팀": "サービス再開のご案内",
    "생일": "HBD🌹"
};

export const base_tags = Object.keys(첫번째_카드_제목_of_tag);

export function 기본_태그들을_클릭하고_첫_카드를_확인한다(tags) {
    태그_불러오기_버튼을_클릭();

    for (const tag_value of base_tags) {
        태그를_클릭한다(tag_value);
        첫번째_카드의_제목은(첫번째_카드_제목_of_tag[tag_value]);
    }
}