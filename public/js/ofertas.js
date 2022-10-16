var productIndex = 1

const buildProductField = (index) => {
  const container = document.createElement('div')
  container.className = 'product-item'

  const indexIndicator = document.createElement('div')
  indexIndicator.className = 'indexIndicator'
  indexIndicator.innerHTML = productIndex

  const productInput = document.createElement('input')
  productInput.placeholder = 'Nome do produto'
  productInput.name = `product-input-${index}`
  productInput.className = 'product-input'

  const priceInput = document.createElement('input')
  priceInput.placeholder = 'Preço'
  priceInput.name = `price-input-${index}`
  priceInput.className = 'price-input'

  container.appendChild(indexIndicator)
  container.appendChild(productInput)
  container.appendChild(priceInput)

  return container
}

const addProductField = () => {
  const list = document.querySelector('div.list')

  list.appendChild(buildProductField(productIndex))

  productIndex++
}

addProductField()
