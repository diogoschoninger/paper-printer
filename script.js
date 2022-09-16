let productIndex = 1;
let description = '';
let price = 0;
const btnAdd = document.getElementById('btnAdd');
const productsData = document.getElementById('productsData');
const printable = document.getElementById('printable');

btnAdd.onclick = () => {
  productIndex++;

  productsData.insertAdjacentHTML('beforeend', `
    <div id="productBlock${productIndex}" class="inputGroup">
      <input type="text" placeholder="Descrição do produto" id="productDescription${productIndex}"/>
      <input type="number" placeholder="Preço" id="productPrice${productIndex}"/>
    </div>
  `);
}

btnPrint.onclick = () => {
  printable.innerHTML = '';

  for (let i = 1; i <= productIndex; i++) {
    description = document.getElementById(`productDescription${i}`).value.toUpperCase();

    price = parseFloat(document.getElementById(`productPrice${i}`).value.replace(",", "."));
    price = price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2});

    printable.insertAdjacentHTML('beforeend', `
      <div style="height: 29cm; width: 21cm; display: block">
        <div style="margin: 0; height: 10%; width: 100%; font-size: 2cm; font-weight: bold; color: #eee;">OFERTA</div>
        <div style="margin: 0; height: 40%; width: 100%; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 2.5cm; font-weight: bold; font-family: Arial, sans-serif">${description}</div>
        <div style="margin: 0; height: 50%; width: 100%; display: flex; align-items: center; justify-content: center; font-size: 5cm; font-weight: bold; font-family: Arial, sans-serif">${price}</div>
      </div>
    `);
  }

  window.print();
}
