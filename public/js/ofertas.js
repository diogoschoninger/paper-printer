const print = (products, prices) => {
  printable = document.getElementById('printable')

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
