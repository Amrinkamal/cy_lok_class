describe('from one website to another',()=>{
    it('validation',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('fieldset a#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.get('a[class="main-btn"]').eq(0).should('be.visible')
            cy.go('back')
        })
    })
})