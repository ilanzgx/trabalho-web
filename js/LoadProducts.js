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
        const card = `
          <div class="card bg-gray-100 py-2 px-3 mx-2 my-2 rounded shadow-md">
            <div class="flex flex-col">
              <div class="cursor-pointer">
                <a href="#produto/${produto.id}">
                  <img
                    class="w-full h-52" 
                    src="${produto.imagem}"
                  />
                
                  <h1 class="text-lg font-medium mb-4">${produto.nome}</h1>
                  <p class="text-2xl font-bold">R$${produto.preco}</p>
                  <p>${produto.quantidade} restantes</p>
                </a>
              <div>

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

      // Implementação da barra de pesquisa:
      $('#search-bar').keyup(() => {
        $('#search-result').html('');
        var searchField = $('#search-bar').val();
        var expression = new RegExp(searchField, "i");

        var new_container = $('#search-result');
          
        produtos.forEach((produto) => {
          if (produto.nome.search(expression) != -1) {
            const new_card = `
              <li>
                <div class="card bg-gray-100 py-2 px-3 mx-2 my-2 rounded shadow-md">
                  <div class="flex flex-col">
                    <div class="cursor-pointer">
                      <a href="#produto/${produto.id}">
                        <img
                          class="w-full h-52" 
                          src="${produto.imagem}"
                        />
                      
                        <h1 class="text-lg font-medium mb-4">${produto.nome}</h1>
                        <p class="text-2xl font-bold">R$${produto.preco}</p>
                        <p>${produto.quantidade} restantes</p>
                      </a>
                    <div>

                    <button 
                      class="add-to-cart flex justify-center items-center w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded font-semibold mt-5 uppercase py-1" 
                      data-id="${produto.id}"
                    >
                      <img width="25" height="25" src="/images/icons/cart.svg" />
                      <h1 class="text-sm mx-1 font-bold mr-1">Adicionar ao carrinho</h1>
                    </button>
                  </div>
                </div>
              </li>
              `;
            new_container.append(new_card);
          } else {
            container.addClass('hidden');
          }
        });
      });
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
