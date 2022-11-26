const fs = require('fs')
const path = require('path')

const config = {"local":"https://lhsk.demo.hongcd.com","qiniu":"http://img.zukmb.cn"}

const allData = fs.readFileSync(path.resolve(__dirname, './index.txt')).toString()

const allDataArray = allData.split(/\r\n/g)

const allLineContent = []
allDataArray.forEach(lineContent => {
  let uri = lineContent
  if (lineContent.indexOf(',') > -1) {
    uri = lineContent.split(',')
  }

  if (Array.isArray(uri)) {
    uri.forEach((_uri) => {
      if (_uri.indexOf('/uploads') > -1) {
        allLineContent.push(config.local + _uri)
      } else {
        allLineContent.push(config.qiniu + _uri)
      }
    })
  } else {
    if (uri.indexOf('/uploads') > -1) {
      allLineContent.push(config.local + uri)
    } else {
      allLineContent.push(config.qiniu + uri)
    }
  }
})

let fileContent = `
/**
 * mock
 */

export const imageData = ${JSON.stringify(allLineContent)}
`

fs.writeFileSync(path.resolve(__dirname, 'imageData.ts'), fileContent)