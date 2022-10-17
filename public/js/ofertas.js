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
  priceInput.addEventListener('keyup', (e) => priceInputFilter(e.target))

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

const priceInputFilter = (element) => {
  let allowedValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let inputValue = element.value

  if (allowedValues.indexOf(inputValue.charAt(inputValue.length - 1)) === -1) {
    inputValue = inputValue.substring(0, inputValue.length - 1)
  }

  element.value = inputValue
}

addProductField()
