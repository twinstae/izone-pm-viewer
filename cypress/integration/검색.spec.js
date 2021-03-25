import {port} from './config';

describe('제목과 preview를 검색한다', () => {
    function 첫번째_카드의_제목은(title){
        cy.get("#MailCard-0 div h4").should('have.text', title);
    }

    it('초기화', ()=>{
        cy.visit(`http://localhost:${port}/?dateString=2021-03-15&nowPage=1&showList=true&now_pm=m20731`);
        cy.get("#MailCard-1"); // 메일이 보이면
    })

    it('라면을 검색하면, 첫번째로 제목이 "카레라면"인 프메가 나온다', () => {
        cy.get("#SearchInput").type("라면");

        첫번째_카드의_제목은("카레라면");
    });

    it('검색 중에 혼다 히토미 태그를 누른 채로 라면을 검색하면, 첫번째로 제목이 "🍞🥯"인 프메가 나온다.', () => {
        cy.get(".Tag-혼다-히토미:first").click();

        첫번째_카드의_제목은("🍞🥯");
    });

    it('선택된 혼다 히토미 태그의 X를 누르면, 첫번째로 제목이 "카레라면"인 프메가 다시 나온다', () => {
        cy.get(".RemoveTag-혼다-히토미").click();

        첫번째_카드의_제목은("카레라면");
    });
})