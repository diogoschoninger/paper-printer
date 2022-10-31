let productIndex = 1
let printable = document.getElementById('printable')
const list = document.querySelector('div.list')

const buildProductField = (index) => {
  const container = document.createElement('div')
  container.className = 'product-item'

  const productInput = document.createElement('input')
  productInput.placeholder = 'Nome do produto'
  productInput.id = `product-input-${index}`
  productInput.className = 'product-input'
  productInput.required = true

  const priceInput = document.createElement('input')
  priceInput.placeholder = 'Preço'
  priceInput.id = `price-input-${index}`
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

const prepareArray = () => {
  let products = []
  let prices = []

  for (let i = 1; i < productIndex; i++) {
    let productInput = document.getElementById(`product-input-${i}`)
    let priceInput = document.getElementById(`price-input-${i}`)

    if (productInput.value == "" || priceInput.value == "") return

    if (productInput) {
      products.push(productInput.value)
    }
    if (priceInput) {
      prices.push(priceInput.value)
    }
  }

  return [products, prices]
}

const integerPage = () => {
  let [products, prices] = prepareArray()

  printable.innerHTML = ''

  for (let i = 0; i < products.length; i++) {
    printable.insertAdjacentHTML('beforeend', `
      <div style="height: 29.7cm; width: 21cm; padding: 3rem 2rem 0 2rem">
        <div style="text-align: center; font-weight: bold; color: rgba(0, 0, 0, .4); font-size: 7rem; height: 15%">OFERTA</div>

        <div style="height: 85%; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center">
          <div style="color: #000; font-size: 6rem; font-weight: bold; text-align: center">${products[i].toUpperCase()}</div>
          <div style="color: #000; font-size: 10rem; font-weight: bold; text-align: center">R$ ${prices[i]}</div>
        </div>
      </div>
    `)
  }

  window.print()
}

const halfPage = () => {
  let [products, prices] = prepareArray()

  printable.innerHTML = ''

  for (let i = 0; i < products.length; i++) {
    printable.insertAdjacentHTML('beforeend', `
      <div style="height: 14.85cm; width: 21cm; border-bottom: 1px dashed #000; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center">
        <div style="color: #000; font-size: 5rem; font-weight: bold; text-align: center">${products[i].toUpperCase()}</div>
        <div style="color: #000; font-size: 8rem; font-weight: bold; text-align: center">R$ ${prices[i]}</div>
    `)
  }

  window.print()
}

const priceTag = () => {
  let [products, prices] = prepareArray()

  printable.innerHTML = ''

  let height = 29.7 / 8

  for (let i = 0; i < products.length; i++) {
    printable.insertAdjacentHTML('beforeend', `
      <div class="product-paper" style="height: ${height}cm; width: 10.49cm; border: 1px dashed #000; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center">
        <div style="color: #000; font-size: 1.8rem; font-weight: bold; text-align: center">${products[i].toUpperCase()}</div>
        <div style="color: #000; font-size: 3rem; font-weight: bold; text-align: center">R$ ${prices[i]}</div>
      </div>
    `)
  }

  window.print()

}

const notRefresh = event => {
  event.preventDefault()
}

addProductField()
