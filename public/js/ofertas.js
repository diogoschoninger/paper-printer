var productIndex = 1
const list = document.querySelector('div.list')

const buildProductField = (index) => {
  const container = document.createElement('div')
  container.className = 'product-item'

  const productInput = document.createElement('input')
  productInput.placeholder = 'Nome do produto'
  productInput.name = `product-input-${index}`
  productInput.className = 'product-input'

  const priceInput = document.createElement('input')
  priceInput.placeholder = 'Preço'
  priceInput.name = `price-input-${index}`
  priceInput.className = 'price-input'

  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'X'
  deleteButton.className = 'delete-button'
  deleteButton.addEventListener('click', (e) => removeProductField(e.target))

  container.appendChild(productInput)
  container.appendChild(priceInput)
  container.appendChild(deleteButton)

  return container
}

const addProductField = () => {
  list.appendChild(buildProductField(productIndex))

  productIndex++
}

const removeProductField = (element) => {
  list.removeChild(element.closest('.product-item'))

  if (list.innerHTML === '') addProductField()
}

addProductField()
