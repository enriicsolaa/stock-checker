const fs = require('fs')

function read() {
  const data = fs.readFileSync('./stock.json')
  const file = JSON.parse(data)
  return file
}

module.exports = 
{
  read
}