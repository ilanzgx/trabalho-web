let produtos;
$(document).ready(async () => {
  await fetch('./data/products.json', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      produtos = data.produtos;
      const container = $('#produtos-container'); 
      container.addClass('hidden');
      $('.loading-container').show();

      produtos.forEach((produto) => {
        const card = `
          <div class="card bg-gray-100 py-2 px-3 mx-2 my-2 rounded shadow-md">
            <div class="flex flex-col">

              <div class="cursor-pointer">
                <a href="/produtos/produto${produto.id}.html">
                  <img
                    class="w-full h-80" 
                    src="${produto.imagem}"
                  />
                </a>
                <h1 class="text-lg font-medium mb-4">${produto.nome}</h1>
                <p class="text-2xl font-bold">R$${produto.preco}</p>
                <p>${produto.quantidade} restantes</p>
                <p>${produto.categoria}</p>
              <div>

              <button 
                class="add-to-cart flex justify-center items-center w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded font-semibold mt-5 uppercase py-1" 
                data-id="${produto.id}"
              >
                <h1 class="text-sm mx-1 font-bold">Adicionar ao carrinho</h1>
              </button>
            </div>
          </div>
        `;
        container.append(card);
      });
      
      container.removeClass('hidden');
      $('footer-component').removeClass('hidden');

      $('.add-to-cart').click(function() {
        const productId = $(this).data('id');
        addCartItem(productId, 1);
        alert('Item adicionado ao carrinho!');
        $('#cart-items-counter').html(getCartItemsAmount())
      })
    })
    .catch((error) => {
      console.log(`Erro ao carregar produtos: ${error}`)
    })

  $('.loading-container').addClass('hidden');
})