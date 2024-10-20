describe ('Perform drag and drop using plugin',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('Validate functionality drag and drop functionality',()=>{
        cy.visit('https://demo.automationtesting.in/Dynamic.html');
        cy.get('#angular').drag('#droparea').then((drop)=>{
            assert.isTrue(drop)
        })

    })
})