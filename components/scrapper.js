const { chromium } = require('playwright-chromium')
const { config } = require('../config')
const { products } = require('./products')
const fs = require('fs')

let outputFileSchema = { 'PlayStation5': [], 'XboxSeriesX': [] }

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
    outputFileSchema.XboxSeriesX.push({ 'vendor': vendor, 'hasStock': hasStock })

    let logOutput = `${vendor}: ${hasStock ? 'With stock!!' : 'Out of stock...'}`
    if (config.log) console.log(logOutput)
    await page.close()
  }
  fs.writeFileSync('./stock.json', JSON.stringify(outputFileSchema))
  await browser.close()
  console.log('Scrap success!')
}

module.exports = { scrapper }
