describe('페이지를 이동하면 목록이 갱신된다', () => {
    it('다음 버튼을 누르면 페이지가 바뀐다', () => {
      cy.visit('http://localhost:5000/?dateString=2021-03-15&nowPage=1&showList=true&now_pm=m20731');

      cy.get("#MailCard-1"); // 메일이 보이면
      cy.get("#NowPageInput").should('have.value', 1);
      cy.get("#NowPageSpan").should('not.have.class', 'bg-red-300');

      cy.get("#NextPageButton").click();
      cy.get("#NowPageInput").should('have.value', 2);
    })
    it('마지막 페이지에 도착하면 빨간색으로 변한다.', ()=>{
      cy.get("#NextPageButton").click();
      cy.get("#NowPageInput").should('have.value', 3);
      cy.get("#NextPageButton").click();
      cy.get("#NowPageInput").should('have.value', 4);

      cy.get("#NowPageSpan").should('have.class', 'bg-red-300');
    })
    it('마지막 페이지에서 다음을 누르면 경고 창이 뜬다', ()=>{
      cy.get("#NextPageButton").click(); // alert!
      cy.on('window:alert', (str) => {
        expect(str).to.include(`마지막 페이지입니다.`)
      });
    })
  })