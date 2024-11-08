$(document).ready(() => {
  function renderCartItem(item, product) {
    const productTotal = product.preco * item.amount;

    const cartItem = `
      <div class="sm:flex sm:items-center border-b-2 my-6 py-4" data-id="${product.id}">
        <div class="sm:w-3/12 sm:mx-2 flex justify-center">
          <img class="w-40 h-40" src="${product.imagem}" />
        </div>
        <div class="sm:w-3/12 mx-2 sm:mx-0">
          <h1 class="text-lg">${product.nome}</h1>
          <h2 class="text-sm sm:text-sm">${product.descricao}</h2>
        </div>
        <div class="sm:w-3/12 flex justify-center items-center">
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
        <div class="sm:w-3/12 flex justify-center items-center">
          <div>
            <h1 class="text-sm">Preço à vista no PIX:</h1>
            <h2 class="text-2xl font-semibold">R$${productTotal.toFixed(2)}</h2>
          </div>
        </div>
      </div>
    `;
    return cartItem;
  }

  function updateCart() {
    const cartItems = getCartItems();
    const container = $('#container-cart-items');
    container.empty();
    let total = 0;

    if (cartItems.length === 0) {
      showEmptyCartMessage(container);
      $('.cart-total').html(`<span class="mr-1">R$</span>0.00`);
      return;
    }

    $.getJSON('/data/products.json')
      .done((data) => {
        const products = data.produtos;

        cartItems.forEach(item => {
          const product = products.find(prod => prod.id === item.productid);

          if (product) {
            total += product.preco * item.amount;
            const cartItemHtml = renderCartItem(item, product);
            container.append(cartItemHtml);
          }
        });

        $('#cart-items-counter').html(getCartItemsAmount());
        $('.cart-total').html(`<span class="mr-1">R$</span>${total.toFixed(2)}`);
      })
      .fail((error) => {
        console.log(`Erro ao carregar produtos: ${error}`);
      });
  }

  function showEmptyCartMessage(container) {
    container.html('<p class="text-center py-12 text-lg">Nenhum produto no seu carrinho.</p>');
  }

  function updateSingleCartItem(productId) {
    const cartItems = getCartItems();
    const container = $('#container-cart-items');
    const item = cartItems.find(i => i.productid === productId);

    if (!item) {
      $(`[data-id="${productId}"]`).remove();
      if (cartItems.length === 0) showEmptyCartMessage(container);
      updateCartTotal();
      return;
    }

    $.getJSON('/data/products.json')
      .done((data) => {
        const product = data.produtos.find(prod => prod.id === productId);

        if (product && item) {
          const updatedCartItemHtml = renderCartItem(item, product);
          container.find(`[data-id="${productId}"]`).replaceWith(updatedCartItemHtml);
          updateCartTotal();
        }
      });
  }

  function updateCartTotal() {
    const cartItems = getCartItems();
    let total = 0;

    $.getJSON('/data/products.json')
      .done((data) => {
        cartItems.forEach(item => {
          const product = data.produtos.find(prod => prod.id === item.productid);
          if (product) {
            total += product.preco * item.amount;
          }
        });

        $('.cart-total').html(`<span class="mr-1">R$</span>${total.toFixed(2)}`);
      });
  }

  $('#container-cart-items').on('click', '.remove-from-cart', function() {
    const productId = $(this).data('id');
    removeCartItem(productId);
    updateSingleCartItem(productId);
  });

  $('#container-cart-items').on('click', '.decrease-amount', function() {
    const productId = $(this).data('id');
    updateCartItemAmount(productId, -1);
    updateSingleCartItem(productId);
  });

  $('#container-cart-items').on('click', '.increase-amount', function() {
    const productId = $(this).data('id');
    updateCartItemAmount(productId, 1);
    updateSingleCartItem(productId);
  });

  updateCart();

  $('.loading-container').hide();
  $('footer-component').removeClass('hidden');
});
