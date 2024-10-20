describe('Negative username test', () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })
    it('validate login function',()=>{
        cy.get('input#username').type('student');
        cy.get('input#password').type("Password123");
       cy.get('button#submit').click();
       cy.url().should('include','practicetestautomation.com/logged-in-successfully/')
       cy.wait(4000)
       cy.get('p strong').should('have.text','Congratulations student. You successfully logged in!')
       cy.get('a[class*="wp-block-button__link"]').should('be.visible')

    })



    it('Negative User validation', () => {
        
        cy.get('input#username').type('student123');
        cy.get('input#password').type("Password123");
       cy.get('button#submit').click();
       cy.get('div#error').should('be.visible');
       cy.get('div#error').should('have.text','Your username is invalid!')
       
      })

      it.only('Negative Password validation', () => {

        cy.get('input#username').type('student');
        cy.get('input#password').type("Password");
       cy.get('button#submit').click();
       cy.get('div#error').should('be.visible');
       cy.get('div#error').should('have.text','Your password is invalid!')
       cy.screenshot("Amrin")
      
    })
    })