if (typeof produtos === 'undefined') {
  var produtos;
}

$(document).ready(() => {
  $.getJSON('./data/products.json')
    .done((data) => {
      produtos = data.produtos;
      const container = $('#produtos-container'); 
      container.addClass('hidden');
      $('.loading-container').show();

      produtos.forEach((produto) => {
        const ratingStars = generateStars(produto.estrelas); // Gera o HTML das estrelas
        const card = `
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
        container.append(card);
      });
      
      container.removeClass('hidden');
      $('.loading-container').addClass('hidden');
      $('footer-component').removeClass('hidden');

      $('.add-to-cart').click(function() {
        const productId = $(this).data('id');
        addCartItem(productId, 1);
        alert('Item adicionado ao carrinho!');
        $('#cart-items-counter').html(getCartItemsAmount())
      });
    })
    .fail((error) => {
      console.log(`Erro ao carregar produtos: ${error}`);
    });
});

// Função para gerar o HTML das estrelas de avaliação
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
