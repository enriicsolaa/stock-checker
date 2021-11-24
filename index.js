const express = require('express')
const app = express()

const jsonManager = require('./components/jsonManager')
const { scrapper } = require('./components/scrapper')
const { config } = require('./config')
let counter = 0

;(async () => {
  setInterval(() => {
    if (counter == 0) {
      scrapper('XboxSeriesX')
      counter++

    } else if (counter == 1) {
      scrapper('PlayStation5')
      counter = 0

    }
  }, 15000)
})()

app.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  await res.json(jsonManager.read())
})

app.listen(config.port, () => {
  console.log(`Server running on port ${ config.port }`)
})
