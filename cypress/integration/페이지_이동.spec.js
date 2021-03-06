import {port} from './config';

describe('페이지를 이동하면 목록이 갱신된다', () => {
  const 첫번째_카드_제목_of_page = {
    1: '21/3/15_그래도',
    2: '앨범 구경 재밌당😆💖',
    3: '💝',
    4: '❤️'
  }
  function 현재_페이지는(n){
    cy.get("#NowPageInput").should('have.value', n);
    cy.url().should('include', `nowPage=${n}`);
    첫번째_카드의_제목은(첫번째_카드_제목_of_page[n]);
  }
  function 다음_버튼을_누른다(){
    cy.get("#NextPageButton").click();
  }
  function 이전_버튼을_누른다(){
    cy.get("#BackPageButton").click();
  }
  function 배경은_빨간색이다(){
    cy.get("#NowPageSpan").should('have.class', 'bg-red-300');
  }
  function 배경은_빨간색이_아니다(){
    cy.get("#NowPageSpan").should('not.have.class', 'bg-red-300');
  }
  function 첫번째_카드의_제목은(title){
    cy.get("#MailCard-0 div h4").should('have.text', title);
  }
  it("초기화", ()=>{
    cy.visit(`http://localhost:${port}/?dateString=2021-03-15&nowPage=1&showList=true&now_pm=m20731`);
    cy.get("#MailCard-0")
    
    // 메일이 보이면
  })

  it('다음 버튼을 누르면 다음 페이지로 간다.', () => {
    현재_페이지는(1);

    다음_버튼을_누른다(); 현재_페이지는(2);
  });
  it('마지막 페이지에 도착하면 빨간색으로 변한다.', ()=>{
    다음_버튼을_누른다(); 현재_페이지는(3);
    배경은_빨간색이_아니다();

    다음_버튼을_누른다(); 현재_페이지는(4);
    배경은_빨간색이다();
  });
  it('마지막 페이지에서 다음을 누르면 경고 창이 뜬다', ()=>{
    다음_버튼을_누른다(); // alert!
    cy.on('window:alert', (str) => {
      expect(str).to.include(`마지막 페이지입니다.`)
    });
  });
  it('이전 버튼을 누르면 이전 페이지로 돌아간다.', ()=>{
    이전_버튼을_누른다(); 현재_페이지는(3);
    이전_버튼을_누른다(); 현재_페이지는(2);
  });
  it('시작 페이지에서 이전 버튼을 누르면 경고창이 뜬다', ()=>{
    이전_버튼을_누른다(); 현재_페이지는(1);

    이전_버튼을_누른다();
    cy.on('window:alert', (str) => {
      expect(str).to.include(`시작 페이지입니다.`)
    });
  })
})