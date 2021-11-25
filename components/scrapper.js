const { chromium } = require('playwright-chromium')
const { config } = require('../config')
const { products } = require('./products')
const jsonManager = require('./jsonManager')
const fs = require('fs')

let outputFileSchemaPs = {'PlayStation5': []}
let outputFileSchemaXbox = {'XboxSeriesX': []}

async function scrapper (productToScrap) {

  let meta = undefined
  const browser = await chromium.launch({ headless: !config.debug })
  if (!config.UseCustomUserAgent) meta = await browser.newContext()
  if (config.UseCustomUserAgent) meta = await browser.newContext({ userAgent: config.CustomUserAgent })

  if (config.log) console.log('Starting scrap...')

  // Start loop for checking shops
  for (const shop of products(productToScrap)) {
    const { checkStock, vendor, url } = shop

    const page = await meta.newPage()
    await page.goto(url)
    const hasStock = await checkStock({ page })

    if (productToScrap == 'PlayStation5') outputFileSchemaPs.PlayStation5.push({ 'vendor': vendor, 'hasStock': hasStock })
    if (productToScrap == 'XboxSeriesX') outputFileSchemaXbox.XboxSeriesX.push({ 'vendor': vendor, 'hasStock': hasStock })

    let logOutput = `${vendor}: ${hasStock ? 'With stock!!' : 'Out of stock...'}`
    if (config.log) console.log(logOutput)
    await page.close()
  }

  if (productToScrap == 'PlayStation5') jsonManager.write('./stocks/PlayStation5.json', outputFileSchemaPs)
  if (productToScrap == 'XboxSeriesX') fs.writeFileSync('./stocks/XboxSeriesX.json', JSON.stringify(outputFileSchemaXbox))

  await browser.close()
  console.log('Scrap success!')
}

module.exports = { scrapper }
