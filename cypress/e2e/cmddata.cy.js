describe('Data Driven',()=>{
let data;
    before(()=>{
        cy.fixture('example').then((datas)=>{
            data=datas;
        })
    })
    it ('Perform expected tasks',()=>{
        cy.visit('https://www.saucedemo.com/v1/');
        cy.performlogin(data.username,data.password)
        cy.wait(1000);
        //cy.get('select').select('lohi')
        data.prods.forEach((eachProduct)=>{
            cy.addingProductsToCart(eachProduct)

        })

    
    cy.get('[href="./cart.html"]').click()
    cy.get('.cart_item').should('have.length',3)
    cy.contains('CHECKOUT').click()
    cy.get('[data-test="firstName"]').type('Amrin')
    cy.get('[data-test="lastName"]').type('Fathima')
    cy.get('[data-test="postalCode"]').type('600021')
    cy.get('.btn_primary').click()
    cy.evaluatePriceAndAssert()

})
})