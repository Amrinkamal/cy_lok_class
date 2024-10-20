describe ('Login using data driven',()=>{
    let testData;
    before(()=>{
        cy.fixture('example').then((tdata)=>{
            testData=tdata
        })
    })
    it('validate it',()=>{
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('#user-name').type(testData.username)
        cy.get('#password').type(testData.password)
        cy.get('#login-button').click()
    })
})