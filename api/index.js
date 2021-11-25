const express = require('express')
const app = express()
const { join } = require('path')
const jsonManager = require('../components/jsonManager')
const { scrapper } = require('../components/scrapper')
const { config } = require('../config')
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

app.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  const ps5 = jsonManager.read(join(__dirname, '../stocks', 'PlayStation5.json'), 'utf8')
  const xbox = jsonManager.read(join(__dirname, '../stocks', 'XboxSeriesX.json'), 'utf8')
  let responseJson = []
  responseJson.push(ps5)
  responseJson.push(xbox)
  await res.json(responseJson)
})

app.get('/:product', async (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  const product = String(req.params.product)

  if (
    product == 'PlayStation5'
    || product == 'XboxSeriesX') {
    await res.json(jsonManager.read('./stocks/' + product + '.json'))
  } else {
    res.json({'Error': 'Bad request'})

  }
    
})

app.listen(config.port, () => {
  console.log(`Server running on port ${ config.port }`)
})
