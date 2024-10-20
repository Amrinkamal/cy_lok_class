describe('Baisic Element',()=>{
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    })

    it('login',()=>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[class="btn_primary btn_inventory"]').eq(0).click()
        cy.get('[class="btn_primary btn_inventory"]').eq(4).click()
        cy.get('[data-icon="shopping-cart"]').click()
        cy.get('[class="btn_action checkout_button"]').click()
        cy.get('#first-name').type("Amrin")
        cy.get('#last-name').type("Fathima")
        cy.get('#postal-code').type("600021")
        cy.get('[type="submit"]').click()
        let sum=0
        cy.get('.inventory_item_price').each(($priceofitems)=>{
          const modifyprices=$priceofitems.text();
          const splitprices=modifyprices.split("$")
          const makeitunique=splitprices[1].trim()
          sum=Number(sum)+Number(makeitunique)
        }).then(()=>{
          cy.log(sum)
        })

        cy.get('.summary_subtotal_label').then((sub)=>{
          const modifysub=sub.text()
          const splitsub=modifysub.split("$")
          const makeitunique=splitsub[1].trim()
          const subtotal=Number(makeitunique)
          expect(subtotal).to.eq(sum)
          cy.get('.summary_tax_label')

        })
        
//         cy.get('.summary_subtotal_label').then((tax)=>{
//           const modifysub=tax.text()
//           const splitsub=modifysub.split("$")
//           const makeitunique=splitsub[1].trim()
          
// //          const modifytax=cy.get('.summary_tax_label').text()
//           const splittax=modifytax.split("$")
//           const unique=splittax[1].trim()
          
//          const ot=Number(makeitunique)+Number(unique)

//         }).then(()=>{
//           cy.log(ot)
//         })
        // cy.get('[class="inventory_item_price"]').eq(0).then($el1 => {
        //     const value1 = parseInt($el1.text())
        //     cy.get('[class="inventory_item_price"]').eq(1).then($el2 => {
        //       const value2 = parseInt($el2.text())
        //       const sum = value1 + value2
        //       cy.log(sum)
              
        //       cy.get('[class="summary_subtotal_label"]').then((element)=>{
        //         expect(element.text()).equal("Item total: $45.98")
        //       })
        //       cy.get('[class="btn_action cart_button"]').click()
        //     })
        //   })

            
//     cy.get('[class="inventory_item_price"]').eq(0).invoke('29.99').then(text1 => {
//         cy.wait(8000)
//         cy.('[class="inventory_item_price"]').eq(1).invoke('9.99').then(text2 => {
//             cy.wait(8000)
//           const sum = parseInt(text1) + parseInt(text2)
//           cy.log(sum)
//         })
//       })
  //      cy.get('[class="complete-header"]').should('have.text','THANK YOU FOR YOUR ORDER')
     })
    
})