$(document).ready(async () => {
  const cartItems = getCartItems();
  const container = $('#container-cart-items')
  $('.loading-container').show();
  console.log(cartItems);
  let total = 0;

  if(cartItems.length === 0) {
    container.html('<p>Seu carrinho está vazio!</p>')
  }

  await fetch('/data/products.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    const products = data.produtos;

    cartItems.forEach(item => {
      const product = products.find(prod => prod.id === item.productid);

      if(product) {
        const productTotal = product.preco * item.amount;
        total += productTotal;

        const cartItem = `
          <div class="flex border-b-2 my-6">
            <div class="w-3/12 flex justify-center">
              <img class="w-40 h-40" src="${product.imagem}" />
            </div>
            <div class="w-3/12">
              <h1 class="text-lg">${product.nome}</h1>
              <h2 class="text-sm">${product.description}</h2>
            </div>
            <div class="w-3/12 flex justify-center items-center">
              <div>
                <h1 class="text-center">Quant.</h1>
                <div class="flex items-center">
                  <button>
                    <img src="/images/icons/left_arrow.svg" />
                  </button> 
                  <h1 class="text-xl font-bold mx-2">${item.amount}</h1>
                  <button>
                    <img src="/images/icons/right_arrow.svg" />
                  </button>
                </div>

                <button class="flex items-center text-xs uppercase text-red-500 my-2">
                  <img src="/images/icons/trash.svg" />
                  <span class="font-bold">Remover</span>
                </button>
              </div>
            </div>
            <div class="w-3/12 flex justify-center items-center">
              <div>
                <h1 class="text-sm">Preço à vista no PIX:</h1>
                <h2 class="text-2xl font-semibold">R$${productTotal.toFixed(2)}</h2>
              </div>
            </div>
          </div>
        `;

        container.append(cartItem);
      }
    })
  })
  $('.loading-container').hide();
})