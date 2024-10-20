describe('Baisic Element',()=>{
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
  //radio
  it ('validate basic-radio,checkbox,static,dynamic',()=>{
   // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  //radio
  cy.get('input[type="radio"]').check('radio3').should('be.checked').and('have.value','radio3')
  //checkbox
  cy.get('input[type="checkbox"]').check(['option1','option3']).should('be.checked')
  cy.wait(4000)
  cy.get('input[type="checkbox"]').uncheck('option1','option3').should('not.be.checked')
  //static dropdown
  cy.get('select').select('option3').should('have.value','option3')

  //Dynamic Dropdown
  cy.get('input#autocomplete').type('in')
  cy.get('li.ui-menu-item div',{timeout:9000}).each(($options)=>{
    if($options.text()==="India"){
        cy.wrap($options).click({force: true})
    }
  })
  })
  it('validate alert',()=>{
    cy.get('input[value="Alert"]').click()
    cy.on('window:alert',(alertTxt)=>{
        expect(alertTxt).to.eq('Hello , share this practice page and share your knowledge')
        return true;
    })
})


    it ('validate confirm',()=>{
    cy.get('#confirmbtn').click();
    cy.on('window:confirm',(confirmTxt)=>{
        expect(confirmTxt).to.eq('Hello , Are you sure you want to confirm?')
        return false;
    })
    })

    // it ('validate-multiple tab log in same page', () => {

    //     cy.get ('fieldset a#opentab').invoke ('remoteAttr','target').click()
    // })

    // cy.window().then ((win))=>{
    //     cy.stub(win,'open').callsFake((url))=>{
    //         win.location.href=url;

    //     }
    // }

    //I-FRAME
    it.only('Mouseover and iframe',()=>{

        cy.get('#mousehover').invoke('show')
        cy.contains('Top',{timeout:8000}).click({force:true})
        cy.url().should('include','#top')
    //IFRAME
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find('ul[class="navigation clearfix"] li:nth-child(5) a[href="mentorship"]').eq(0).click()
    })
    })
