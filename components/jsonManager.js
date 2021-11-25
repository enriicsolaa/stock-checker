const fs = require('fs')

function read(File) {
  const data = fs.readFileSync(File)
  const result = JSON.parse(data)
  return result
}

function write(File, data) {
  const raw = JSON.stringify(data)
  fs.writeFileSync(File, raw)
}

module.exports = 
{
  read,
  write
}