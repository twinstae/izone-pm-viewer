describe('태그를 선택하고 취소하고, 삭제한다.', () => {
    it("초기화", ()=>{
      cy.visit('http://localhost:5000/?dateString=2021-03-15&nowPage=1&showList=true&now_pm=m21381');
      cy.get("#MailCard-0"); // 메일이 보이면
    });
    
    it('태그를 클릭하면 목록이 바뀐다.', ()=>{
        cy.get("#TagInput").type("테스트")
        cy.get("#AddTagButton").click();

        cy.get(".Tag-테스트:first").click();
        cy.get("#MailCard-0 div p").click();
    });

    it('태그의 x를 클릭하면 목록이 원래대로 돌아온다.', ()=>{
        cy.get(".RemoveTag-테스트").click();
        cy.get("#MailCard-0 div p").click();
    });

    it('현재 선택 중인 태그를 삭제하면, 선택이 취소 되고 원래 목록으로 돌아온다.', ()=>{
        cy.get(".Tag-테스트:first").click();
        cy.get("#MailCard-0 div p").click();
        cy.get(".DeleteTag-테스트").click();

        cy.get("#MailCard-0 div p").click();
    })
});