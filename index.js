const express = require('express')
const app = express()

const jsonManager = require('./components/jsonManager')
const { scrapper } = require('./components/scrapper')
const { config } = require('./config')
let counter = 0

;(async () => {
  setInterval(() => {
    if (counter == 0) {
      scrapper('PlayStation5')
      counter++

    } else if (counter == 1) {
      scrapper('XboxSeriesX')
      counter = 0

    }
  }, 900000)
})()

app.get('/PlayStation5/', async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  await res.json(jsonManager.read('./stocks/PlayStation5.json'))
})

app.get('/XboxSeriesX/', async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  await res.json(jsonManager.read('./stocks/XboxSeriesX.json'))
})

app.listen(config.port, () => {
  console.log(`Server running on port ${ config.port }`)
})
