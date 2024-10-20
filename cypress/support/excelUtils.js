// cypress/support/excelUtils.js
import XLSX from 'xlsx';

export function readExcelFile(filePath) {
  // Read the file as a binary string
  cy.readFile(filePath, 'binary').then((fileContent) => {
    // Convert the binary string to an array buffer
    const workbook = XLSX.read(fileContent, { type: 'binary' });

    // Get the first sheet
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert the sheet to JSON
    return XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  });
}
