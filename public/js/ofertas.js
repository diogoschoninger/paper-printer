var productIndex = 1
const list = document.querySelector('div.list')

const buildProductField = (index) => {
  const container = document.createElement('div')
  container.className = 'product-item'

  const productInput = document.createElement('input')
  productInput.placeholder = 'Nome do produto'
  productInput.name = `product-input-${index}`
  productInput.className = 'product-input'
  productInput.required = true

  const priceInput = document.createElement('input')
  priceInput.placeholder = 'Preço'
  priceInput.name = `price-input-${index}`
  priceInput.className = 'price-input'
  priceInput.addEventListener('keyup', (e) => priceInputFilter(e.target))
  priceInput.required = true

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

  // Remover a vírgula que é adicionada pelo filtro
  inputValue = String(inputValue.replace(',', ''))

  // Remove 0 a esquerda
  if (inputValue.charAt(0) === '0') inputValue = inputValue.substring(1);

  if (allowedValues.indexOf(inputValue.charAt(inputValue.length - 1)) === -1) {
    inputValue = inputValue.substring(0, inputValue.length - 1)
  }

  // Separar e formatar a parte inteira do preço
  let intPart = inputValue.substring(0, inputValue.length - 2)
  if (intPart.length < 1) intPart = '0'

  // Separar e formatar a parte fracionada do preço
  let floatPart = inputValue.substring(inputValue.length - 2, inputValue.length)
  if (floatPart.length < 1) floatPart = '00'
  if (floatPart.length < 2) floatPart = '0' + floatPart

  let formattedPrice = intPart + ',' + floatPart

  element.value = formattedPrice
}

addProductField()
