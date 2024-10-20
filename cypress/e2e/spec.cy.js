// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://www.amazon.in')
//     cy.get('#twotabsearchtextbox').type('iphone 13')
//     cy.get('span input.nav-input.nav-progressive-attribute').click()

//   })
// })

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.flipkart.com/')
    cy.get('input[name="q"]').type('iphone 13')
   cy.get('button[type="submit"]').click()
   cy.get('div._4WELSP').eq(4).click()
  })
})

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://www.tutorialspoint.com/index.htm')
//     cy.get('input[name="q"]').type('iphone 13')
//    cy.get(a[title='JavaScript Tutorial']).click()
   
//   })
// })