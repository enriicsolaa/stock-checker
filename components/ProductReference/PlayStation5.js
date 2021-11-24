const PlayStation5 = [
  {
    vendor: 'Amazon ES',
    url: 'https://www.amazon.es/dp/B08KKJ37F7/ref=cm_sw_r_tw_dp_CGSFNKZD0VF86MPA4ETX',
    checkStock: async ({ page }) => {
      const addToCartButton = await page.$$('#add-to-cart-button')
      return addToCartButton.length > 0
    }
  }
]

module.exports = { PlayStation5 }
