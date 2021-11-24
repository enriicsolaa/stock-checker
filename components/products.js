const { XboxSeriesX } = require('./ProductReference/XboxSeriesX')
const { PlayStation5 } = require('./ProductReference/PlayStation5')

function products (productType) {
  if (productType === 'XboxSeriesX') {
    return XboxSeriesX
  }

  if (productType === 'PlayStation5') {
    return PlayStation5
  }
}

module.exports = { products }
