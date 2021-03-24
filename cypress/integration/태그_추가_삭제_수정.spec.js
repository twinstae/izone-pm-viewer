
describe('태그를 추가하고 수정하고 삭제한다', () => {
    const 캔디핑크 = "rgb(217, 89, 140)";

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
      cy.visit('http://localhost:5000/?dateString=2021-03-15&nowPage=1&showList=true&now_pm=m21406');
      cy.get("#MailCard-0"); // 메일이 보이면
    })
  
    it('테스트 태그를 입력하고 버튼을 누르면, 모든 곳에 태그가 추가된다.', () => {
        모든_곳에서(()=>{태그가_없다("테스트");});

        cy.get("#TagInput").type("테스트")
        cy.get("#AddTagButton").click();

        모든_곳에서(()=>{태그가_존재한다("테스트");})
    });

    it('태그를 수정하면, 모든 곳에서 태그가 바뀐다', ()=>{
        롱터치(".Tag-테스트:first");

        cy.get('#TagUpdateInput').type('{backspace}{backspace}{backspace}test');
        cy.get('#TagUpdateColorRadio-캔디핑크').click();
        cy.get('#TagUpdateButton').click();


        모든_곳에서(()=>{
            태그가_없다("테스트");
            태그가_존재한다("test", 캔디핑크);
        });
    })

    it('테스트 태그의 X를 누르면, 모든 곳에서 태그가 삭제된다.', ()=>{
        cy.get(".DeleteTag-test").click();

        모든_곳에서(()=>{태그가_없다("test");});
    })
  })