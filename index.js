const express = require('express')
const app = express()
const scrapper = require('./components/scrapper')

const port = 3000

;(async () => {
  setInterval(function () { scrapper() }, 900000)
})()

app.get('/', async (req, res) => {
  scrapper()
  res.setHeader('Content-Type', 'application/json')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
