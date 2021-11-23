// @ts-check

const { chromium } = require('playwright-chromium')
const { xboxSeriesXBlack } = require('../products/xboxSeriesXBlack')

const debug = true
const fakeUserAgent = 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0'

module.exports = async function () {
  const browser = await chromium.launch({ headless: !debug })
  const meta = await browser.newContext({ userAgent: fakeUserAgent })

  const available = []
  console.log('Starting scrap...')

  for (const shop of xboxSeriesXBlack) {
    const { checkStock, vendor, url } = shop

    const page = await meta.newPage()
    await page.goto(url)

    const hasStock = await checkStock({ page })
    if (hasStock) available.push(vendor)

    const log = `${vendor}: ${hasStock
      ? 'HAS STOCK!!!! 🤩'
      : 'Out of Stock 🥲'}`

    console.log(log)
    await page.close()
  }

  const availableOn = available.length > 0
    ? `Disponible en: ${available.join(', ')}`
    : 'No hay stock 😢'

  await browser.close()
}
