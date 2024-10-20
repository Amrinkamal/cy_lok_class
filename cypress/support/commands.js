// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
//Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('performlogin', (username, password) => { 
    cy.get('#user-name').type(username)
        cy.get('#password').type(password)
        cy.get('#login-button').click()

})
Cypress.Commands.add('addingProductsToCart', (product) => {
    cy.get('.inventory_item').each(($products)=>{
        if($products.text().includes(product)){
            cy.wrap($products).find('button').click()
        }
    })
})

Cypress.Commands.add('evaluatePriceAndAssert',()=>{
    let sum=0;
    cy.get('.cart_item .inventory_item_price').each(($priceforeachitem)=>{
        const modifyprices=$priceforeachitem.text();
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
    })
})

import 'cypress-iframe';
require('@4tw/cypress-drag-drop')



//EXCEL

const XLSX = require('xlsx');

// Define a custom command to read Excel files
Cypress.Commands.add('readExcelFile', (filePath) => {
  cy.readFile(filePath, 'binary').then((data) => {
    const workbook = XLSX.read(data, { type: 'binary' });
    const sheetName = workbook.SheetNames[0]; // Get the first sheet
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Convert to JSON
  });
});


// //Reports
// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter',
//   screenshotOnRunFailure:true,
//   video:true,
//   defaultCommandTimeout:8000,
//   pageLoadTimeout:20000,
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//     },
//   },
// });