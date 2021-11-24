const fs = require('fs')

function read() {
  const data = fs.readFileSync('./stock.json')
  const JSONObject = JSON.parse(data)
  return JSONObject
}

function write(JSONObject) {
  const data = JSON.stringify(JSONObject)
  fs.writeFileSync('./stock.json', data)
}
module.exports = 
{
  read,
  write
}