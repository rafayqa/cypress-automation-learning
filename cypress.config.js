const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const Exceljs = require("exceljs");



async function setupNodeEvents(on, config) {

  require("cypress-mochawesome-reporter/plugin")(on);

  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
      sourcemap: "inline"
    })
  );

  on("task", {
    async WriteExcelTest({ searchText, ReplaceText, change, SheetName, filePath }) {

      const output = { rowNumber: -1, columnNumber: -1 };
      const workbook = new Exceljs.Workbook();

      await workbook.xlsx.readFile(filePath);

      const worksheet = workbook.getWorksheet(SheetName);

      readExcel(worksheet, searchText, output);

      if (output.rowNumber !== -1 && output.columnNumber !== -1) {

        const cell = worksheet.getCell(
          output.rowNumber,
          output.columnNumber + change.colChange
        );

        cell.value = ReplaceText;

        await workbook.xlsx.writeFile(filePath);

        return true;

      } else {
        console.log(`"${searchText}" not found`);
        return false;
      }
    }
  });

  function readExcel(worksheet, searchText, output) {
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell, cellNumber) => {
        if (cell.value === searchText) {
          output.rowNumber = rowNumber;
          output.columnNumber = cellNumber;
        }
      });
    });
  }

  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1,
  },
  projectId: "r3x3eq",
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    experimentalStudio: true,
    chromeWebSecurity: false,
    setupNodeEvents,
    specPattern: "cypress/integration/examples/*.js",
  },
});