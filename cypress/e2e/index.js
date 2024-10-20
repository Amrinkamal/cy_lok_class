

describe ('Userregistration',()=>{
    
  before(()=>{

    cy.visit('/https://www.saucedemo.com/')
  })

  it('username',()=>{
    cy.get('#user-name').type('standard_user')

  })
  it('username',()=>{
    cy.get('#password').type('secret_sauce')
  })
  it('password',()=>{
    cy.get('#login-button').click()
  })
})