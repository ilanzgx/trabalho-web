$(document).ready(function() {
  function extractProductIdFromHash(hash) {
    const match = hash.match(/produto\/(\d+)/);
    return match ? match[1] : null;
  }

  const productId = extractProductIdFromHash(window.location.hash);

  if (productId) {
    $.getJSON('/data/products.json', function(data) {
      const produto = data.produtos.find(p => p.id == productId);

      if (produto) {
        $('#product-name').text(produto.nome);
        $('#product-image').attr('src', produto.imagem);
        $('#product-price').text(`R$${produto.preco}`);
        $('#product-description').text(produto.description);
        $('#product-amount').text(`Em estoque (${produto.quantidade})`);
      } else {
        $('#product-erro').html('<p>Produto não encontrado.</p>');
      }
    }).fail(function() {
      $('#product-error').html('<p>Erro ao carregar os dados do produto.</p>');
    });
  } else {
    $('#product-error').html('<p>ID de produto inválido.</p>');
  }

  $('.product-container').removeClass('hidden');
  $('.loading-container').addClass('hidden');
});