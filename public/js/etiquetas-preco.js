const print = (products, prices) => {
  printable = document.getElementById('printable')

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

const submitForm = (event) => {
  event.preventDefault()

  let products = []
  let prices = []

  for (let i = 1; i < productIndex; i++) {
    let productInput = document.getElementById(`product-input-${i}`)
    let priceInput = document.getElementById(`price-input-${i}`)

    if (productInput) {
      products.push(productInput.value)
    }
    if (priceInput) {
      prices.push(priceInput.value)
    }
  }

  print(products, prices)
}
