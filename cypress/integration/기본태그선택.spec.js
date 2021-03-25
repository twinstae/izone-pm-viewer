import {port} from './config';
import {
    태그_불러오기_버튼을_클릭,
    태그를_클릭한다,
    첫번째_카드의_제목은,
    base_tags,
} from "./testingUtil";

describe('태그를 선택하고 취소하고, 삭제한다', () => {
    it("초기화", ()=>{
      cy.visit(`http://localhost:${port}/?dateString=2021-03-15&nowPage=1&showList=true&now_pm=m21381`);
      cy.get("#MailCard-0"); // 메일이 보이면
    });
    
    it('기본_태그들을_클릭하고_첫_카드를_확인한다', ()=>{
        태그_불러오기_버튼을_클릭();

        for (const tag_value of base_tags) {
            태그를_클릭한다(tag_value);
            첫번째_카드의_제목은(첫번째_카드_제목_of_tag[tag_value]);
        }
    });
});