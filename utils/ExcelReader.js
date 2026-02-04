import ExcelJS from 'exceljs';
import { logger } from './Logger.js';

export class ExcelReader {
  constructor(filePath) {
    this.filePath = filePath;
    this.workbook = null;
  }

  async loadWorkbook() {
    if (!this.workbook) {
      this.workbook = new ExcelJS.Workbook();
      await this.workbook.xlsx.readFile(this.filePath);
      logger.info(`Loaded Excel file: ${this.filePath}`);
    }
    return this.workbook;
  }

  async readExcel(sheetName, rowNumber) {
    try {
      await this.loadWorkbook();
      const worksheet = this.workbook.getWorksheet(sheetName);
      
      if (!worksheet) {
        throw new Error(`Sheet "${sheetName}" not found in Excel file`);
      }

      const headers = [];
      const firstRow = worksheet.getRow(1);
      firstRow.eachCell((cell, colNumber) => {
        headers[colNumber] = cell.value;
      });

      const dataRow = worksheet.getRow(rowNumber + 2);
      const rowData = {};
      
      dataRow.eachCell((cell, colNumber) => {
        const header = headers[colNumber];
        if (header) {
          rowData[header] = cell.value;
        }
      });

      logger.info(`Read data from sheet: ${sheetName}, row: ${rowNumber}`);
      return rowData;
    } catch (error) {
      logger.error(`Error reading Excel: ${error.message}`);
      throw error;
    }
  }

  async getAllRows(sheetName) {
    try {
      await this.loadWorkbook();
      const worksheet = this.workbook.getWorksheet(sheetName);
      
      if (!worksheet) {
        throw new Error(`Sheet "${sheetName}" not found in Excel file`);
      }

      const headers = [];
      const firstRow = worksheet.getRow(1);
      firstRow.eachCell((cell, colNumber) => {
        headers[colNumber] = cell.value;
      });

      const allData = [];
      worksheet.eachRow((row, rowNumber) => {
        if (rowNumber > 1) {
          const rowData = {};
          row.eachCell((cell, colNumber) => {
            const header = headers[colNumber];
            if (header) {
              rowData[header] = cell.value;
            }
          });
          allData.push(rowData);
        }
      });

      logger.info(`Read ${allData.length} rows from sheet: ${sheetName}`);
      return allData;
    } catch (error) {
      logger.error(`Error reading all rows: ${error.message}`);
      throw error;
    }
  }
}
