$(document).ready(() => {
  function updateCart() {
    const cartItems = getCartItems();
    const container = $('#container-cart-items');
    container.empty();
    let total = 0;

    if (cartItems.length === 0) {
      container.html('<p class="text-center py-12 text-lg">Nenhum produto no seu carrinho.</p>');
      $('.cart-total').html(`<span class="mr-1">R$</span>0.00`);
      return;
    }

    $.getJSON('/data/products.json')
      .done((data) => {
        const products = data.produtos;

        cartItems.forEach(item => {
          const product = products.find(prod => prod.id === item.productid);

          if (product) {
            const productTotal = product.preco * item.amount;
            total += productTotal;

            const cartItem = `
              <div class="flex border-b-2 my-6 py-4" data-id="${product.id}">
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
                      <button class="decrease-amount" data-id="${product.id}">
                        <img src="/images/icons/left_arrow.svg" />
                      </button> 
                      <h1 class="text-xl font-bold mx-2">${item.amount}</h1>
                      <button class="increase-amount" data-id="${product.id}">
                        <img src="/images/icons/right_arrow.svg" />
                      </button>
                    </div>

                    <button class="remove-from-cart flex items-center text-xs uppercase text-red-500 my-2" data-id="${product.id}">
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
        });

        $('#cart-items-counter').html(getCartItemsAmount());

        $('.remove-from-cart').click(function() {
          const productId = $(this).data('id');
          removeCartItem(productId);
          updateCart();
        });

        $('.decrease-amount').click(function() {
          const productId = $(this).data('id');
          updateCartItemAmount(productId, -1);
          updateCart();
        })

        $('.increase-amount').click(function() {
          const productId = $(this).data('id');
          updateCartItemAmount(productId, 1);
          updateCart();
        })

        $('.cart-total').html(`<span class="mr-1">R$</span>${total.toFixed(2)}`);
      })
      .fail((error) => {
        console.log(`Erro ao carregar produtos: ${error}`);
      });
  }

  updateCart();

  $('.loading-container').hide();
  $('footer-component').removeClass('hidden');
});
