import Formatter from '@/components/Formatter'
import * as XLSX from 'xlsx'

const ReadExcelFile = {
  read: (evt, readCallback) => {
    const bstr = evt.target.result
    const workbook = XLSX.read(bstr, { type: 'binary', cellDates: true })
    const json = convertExcelToJson(workbook)
    readCallback(json)
  },
  readNode: (filepath) => {
    const workbook = XLSX.readFile(filepath, { type: 'binary', cellDates: true })
    const json = convertExcelToJson(workbook)
    return json
  }
}

function convertExcelToJson (workbook) {
  const wsname = workbook.SheetNames[0]
  const ws = workbook.Sheets[wsname]
  const dataJson = XLSX.utils.sheet_to_json(ws, { header: ['operationDate', 'category', 'subcategory', 'description', 'comment', 'image', 'amount', 'balance'], range: 6, raw: false })
  dataJson.forEach((row) => {
    row.operationDate = Formatter.formatDate(row.operationDate)
    delete row.comentario
    delete row.imagen
  })
  return dataJson
}

export default ReadExcelFile
