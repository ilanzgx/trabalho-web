let produtos;
      $(document).ready( async () => {
        // Jquery carregado
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
            console.log(produtos)

            produtos.forEach((produto) => {
              const card = `
                <div class="card bg-gray-100 py-2 px-3 mx-2 my-2 rounded shadow-md">
                  <div class="flex flex-col">

                    <div class="cursor-pointer">
                      <img
                        class="w-full h-80" 
                        src="${produto.imagem}" 
                        alt="${produto.nome}" 
                      />
                      <h1 class="text-lg font-medium mb-4">${produto.nome}</h1>
                      <p class="text-2xl font-bold">R$${produto.preco}</p>
                      <p>${produto.quantidade} restantes</p>
                      <p>${produto.categoria}</p>
                    <div>

                    <button class="flex justify-center items-center w-full bg-blue-600 text-white rounded font-semibold mt-5 uppercase py-1">
                      <h1 class="text-sm mx-1 font-bold">Adicionar ao carrinho</h1>
                    </button>
                  </div>
                </div>
              `;
              container.append(card);
            });
            
            container.removeClass('hidden');
            $('footer-component').removeClass('hidden');
          })
          .catch((error) => {
            console.log(`Erro ao carregar produtos: ${error}`)
          })
      })

$("#botao").click(() => {
  alert(JSON.stringify(produtos))
})