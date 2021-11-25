// repair fnac and pccomponentes
const XboxSeriesX = [
  {
    vendor: 'Amazon ES',
    url: 'https://www.amazon.es/dp/B08H93ZRLL/ref=cm_sw_r_cp_apa_glt_i_91H0Z62WVDRT6FMW033Z',
    checkStock: async ({ page }) => {
      const addToCartButton = await page.$$('#add-to-cart-button')
      return addToCartButton.length > 0
    }
  },
  {
    vendor: 'Microsoft',
    url: 'https://www.xbox.com/es-es/configure/8WJ714N3RBTL',
    checkStock: async ({ page }) => {
      const content = await page.textContent('[aria-label="Finalizar la compra del pack"]')
      return content.includes('Sin existencias') === false
    }
  },
  {
    vendor: 'Game',
    url: 'https://www.game.es/OFERTAS/PACK/PACKS/XBOX-SERIES-X-CONTROLLER-XBOX/P03362',
    checkStock: async ({ page }) => {
      const content = await page.textContent('.product-quick-actions')
      return content.includes('Producto no disponible') === false
    }
  },
  /*
  {
    vendor: 'Fnac',
    url: 'https://www.fnac.es/Consola-Xbox-Series-X-1TB-Negro-Videoconsola-Consola/a7732201',
    checkStock: async ({ page }) => {
      const notAvailableIcon = await page.textContent('.f-buyBox-availabilityStatus-unavailable')
      return notAvailableIcon.length === 0
    }
  },
  */
  {
    vendor: 'El Corte Inglés',
    url: 'https://www.elcorteingles.es/videojuegos/A37047078-xbox-series-x/',
    checkStock: async ({ page }) => {
      const content = await page.textContent('#js_add_to_cart_desktop')
      return content.includes('Agotado temporalmente') === false
    }
  },
  {
    vendor: 'PCComponentes',
    url: 'https://www.pccomponentes.com/microsoft-xbox-series-x-1tb',
    checkStock: async ({ page }) => {
      const content = await page.textContent('#buy-buttons-section')
      return content.includes('Añadir al carrito') === true
    }
  }
]

module.exports = { XboxSeriesX }
