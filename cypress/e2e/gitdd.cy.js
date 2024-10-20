describe('github login using datadriven',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })


it ('Login',()=>{
    cy.visit('https://github.com/')
    cy.get('[href*="/login"]').eq(0)


})

})