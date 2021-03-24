describe('날짜를 이동하면 목록이 갱신된다', () => {
    function 현재_날짜는(date_string){
        cy.get("#DateStringInput").should('have.value', date_string);
        cy.url().should('include', `dateString=${date_string}`);
    }
    function 내일_버튼을_누른다(){
        cy.get("#toTomorrowButton").click();
    }
    function 어제_버튼을_누른다(){
        cy.get("#toYesterdayButton").click();
    }

    it('내일 버튼을 누르면 내일로 간다.', () => {
        cy.visit('http://localhost:5000/?dateString=2021-03-15&nowPage=1&showList=true&now_pm=m20731');
        cy.get("#MailCard-1"); // 메일이 보이면
        현재_날짜는("2021-03-15");

        내일_버튼을_누른다(); 현재_날짜는("2021-03-16");
        내일_버튼을_누른다(); 현재_날짜는("2021-03-17");
    });

    it('어제 버튼을 누르면 어제로 간다.', () => {
        현재_날짜는("2021-03-17");

        어제_버튼을_누른다(); 현재_날짜는("2021-03-16");
        어제_버튼을_누른다(); 현재_날짜는("2021-03-15");
    });
})