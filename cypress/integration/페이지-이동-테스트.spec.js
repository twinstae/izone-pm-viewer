describe('페이지를 이동하면 목록이 갱신된다', () => {
    it('다음 버튼을 누르면 페이지가 바뀌고 목록이 갱신된다.', () => {
      cy.visit('http://localhost:5000/');

      cy.get("#MailCard-1"); // 메일이 보이면

      cy.get("#NextPageButton").click(); // 초기화 클릭?
      cy.get("#NextPageButton").click();

      cy.get("#NowPageInput").should('have.value', 2);

      cy.get("#NextPageButton").click();

      cy.get("#NowPageInput").should('have.value', 3);

      cy.get("#NextPageButton").click(); //4
      cy.get("#NextPageButton").click(); //5
      
      cy.get("#NowPageSpan").should('not.have.class', 'bg-red-300');

      cy.get("#NextPageButton").click(); //6

      cy.get("#NowPageSpan").should('have.class', 'bg-red-300');

      cy.get("#NextPageButton").click(); // alert!

      cy.on('window:alert', (str) => {
        expect(str).to.include(`마지막 페이지입니다.`)
      })
    })
  })