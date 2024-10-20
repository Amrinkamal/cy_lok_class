// cypress/integration/yourTest.spec.js
// import { readExcelFile } from 'f:/cypress/cypress/support/excelUtils';

// describe('Excel File Test', () => {
//   it('should read data from an Excel file', () => {
//     readExcelFile('cypress/fixtures/Course_Status.xlsx').then((data) => {
//       // Use the data from the Excel file
//       cy.log(JSON.stringify(data));

//       // Example: Check the first row's first cell
//       expect(data[0][0]).to.equal('Expected Value');
//     });
//   });
// });

// var xlsx = require('xlsx');

// describe('Read Excel data', () => {
//   it('reads data from Excel file', () => {
//     const workbook = xlsx.readFile('F:/cypress/cypress/fixtures/Course_Status.xlsx');
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];
//     const data = xlsx.utils.sheet_to_json(worksheet);
//     cy.log(data);
//   });
// });


describe('Excel Data Test', () => {
    it('should read and use data from an Excel file', () => {
      // Specify the path to your Excel file
      cy.readExcelFile('F:/cypress/august30.xlsx').then((data) => {
        // Extract header and rows
        const [header, ...rows] = data;
  
        // Example: Iterate through each row and use the data
        rows.forEach((row) => {
          const [column1, column2, column3,column4] = row;
          cy.log('Column 1: ${column1}, Column 2: ${column2},Column 3: ${column3},Column 4: ${column4}');
          // Add assertions or interactions based on the data
          
        });
      });
    });
  });

