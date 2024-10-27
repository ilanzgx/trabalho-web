if (typeof produtos === 'undefined') var produtos;

$(document).ready(() => {
  const container = $('#produtos-container');
  const loadingContainer = $('.loading-container');
  const searchResult = $('#search-result');

  function renderProductCard(produto) {
    const ratingStars = generateStars(produto.estrelas);
    return `
      <div class="card bg-gray-100 py-2 px-3 mx-2 my-2 rounded shadow-md">
          <div class="flex flex-col">
            <a href="#produto/${produto.id}">
            <div class="cursor-pointer">
              <div class="flex justify-center w-full mb-4">
                <img
                  class="w-64 h-64" 
                  src="${produto.imagem}"
                />
              </div>
              <div class="flex items-center mb-2 text-gray-800">
                <div class="w-1/2">
                  <h1 class="text-lg font-bold">${produto.nome}</h1>
                </div>
                <div class="w-1/2 text-right">
                  <p class="text-2xl font-bold text-blue-600">R$${produto.preco}</p>
                </div>
              </div>
              
              <div id="products-stars" class="flex mb-2">${ratingStars}</div>
              <p class="text-gray-500">${produto.quantidade} restantes</p>
              
            <div>
            </a>

            <button 
              class="add-to-cart flex justify-center items-center w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded font-semibold mt-5 uppercase py-1" 
              data-id="${produto.id}"
            >
              <img width="25" height="25" src="/images/icons/cart.svg" />
              <h1 class="text-sm mx-1 font-bold mr-1">Adicionar ao carrinho</h1>
            </button>
          </div>
        </div>
    `;
  }

  function renderProducts(products, targetContainer) {
    targetContainer.empty();
    products.forEach((produto) => {
      targetContainer.append(renderProductCard(produto));
    });
  }

  $.getJSON('./data/products.json')
    .done((data) => {
      produtos = data.produtos;
      loadingContainer.show();

      renderProducts(produtos, container);
      container.removeClass('hidden');
      loadingContainer.addClass('hidden');
      $('footer-component').removeClass('hidden');
    })
    .fail((error) => console.log(`Erro ao carregar produtos: ${error}`));

  $('#search-bar').on('input', () => {
    const searchField = $('#search-bar').val().toLowerCase();
    const filteredProducts = produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(searchField)
    );
    
    if (filteredProducts.length) {
      container.addClass('hidden');
      renderProducts(filteredProducts, searchResult);
    } else {
      container.removeClass('hidden');
      searchResult.empty();
    }
  });

  $(document).off('click', '.add-to-cart').on('click', '.add-to-cart', function() {
    const productId = $(this).data('id');
    addCartItem(productId, 1);
    alert('Item adicionado ao carrinho!');
    $('#cart-items-counter').html(getCartItemsAmount());
  });
});

function generateStars(rating) {
  const maxStars = 5;
  let starsHtml = '';

  for (let i = 0; i < maxStars; i++) {
    if (i < rating) {
      starsHtml += '<img src="/images/icons/star-filled.svg" width="20" height="20" alt="Estrela preenchida" />';
    } else {
      starsHtml += '<img src="/images/icons/star-empty.svg" width="20" height="20" alt="Estrela vazia" />';
    }
  }
  return starsHtml;
}
