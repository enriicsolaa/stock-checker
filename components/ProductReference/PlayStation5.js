const PlayStation5 = [
  {
    vendor: 'Amazon ES',
    url: 'https://www.amazon.es/dp/B08KKJ37F7/ref=cm_sw_r_tw_dp_CGSFNKZD0VF86MPA4ETX',
    checkStock: async ({ page }) => {
      const addToCartButton = await page.$$('#add-to-cart-button')
      return addToCartButton.length > 0
    }
  },
  {
    vendor: 'Casace Electronica',
    url: 'https://casaceelectronica-llp.com/product/dlink-multiple-port-4-antinas-wifi-router/',
    checkStock: async ({ page }) => {
      const content = await page.$$('.single_add_to_cart_button')
      return content.includes('Sin existencias') === false
    }
  },
  {
    vendor: 'Game',
    url: 'https://www.game.es/consola-playstation-5-playstation-5-183224',
    checkStock: async ({ page }) => {
      const content = await page.textContent('.product-quick-actions')
      return content.includes('Añadir al carrito') === true
    }
  },
  /*
  {
    vendor: 'Fnac',
    url: 'https://www.fnac.es/Consola-PlayStation-5-Videoconsola-Consola/a7724798',
    checkStock: async ({ page }) => {
      const notAvailableIcon = await page.textContent('.f-buyBox-availabilityStatus-unavailable')
      return notAvailableIcon.length === 0
    }
  },
  */
  {
    vendor: 'El Corte Inglés',
    url: 'https://www.elcorteingles.es/videojuegos/A37046604-consola-playstation-5/',
    checkStock: async ({ page }) => {
      const content = await page.textContent('#js_add_to_cart_desktop')
      return content.includes('Agotado temporalmente') === false
    }
  },
  {
    vendor: 'PCComponentes',
    url: 'https://www.pccomponentes.com/sony-playstation-5',
    checkStock: async ({ page }) => {
      const content = await page.textContent('#buy-buttons-section')
      return content.includes('Añadir al carrito') === true
    }
  }
]

module.exports = { PlayStation5 }
