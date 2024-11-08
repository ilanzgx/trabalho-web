$(document).ready(function() {
  function extractProductIdFromHash(hash) {
    const match = hash.match(/produto\/(\d+)/);
    return match ? match[1] : null;
  }

  const productId = extractProductIdFromHash(window.location.hash);

  function showModal() {
    const modal = $('#modal');
    modal.removeClass('hidden');
    modal.addClass('flex');

    timeoutId = setTimeout(() => {
      modal.addClass('hidden');
      modal.removeClass('flex');
    }, 10000);
  }

  $('#close-modal').click(() => {
    clearTimeout(timeoutId);
    $('#modal').addClass('hidden');
  })

  if (productId) {
    $.getJSON('/data/products.json', function(data) {
      const produto = data.produtos.find(p => p.id == productId);

      if (produto) {
        $('#product-name').text(produto.nome);
        $('#product-image').attr('src', produto.imagem);
        $('#product-price').text(`R$${produto.preco}`);
        $('#product-description').text(produto.descricao);
        $('#product-amount').text(`Em estoque (${produto.quantidade})`);
        $('.add-to-cart').attr('data-id', produto.id);

        $('.product-container').removeClass('hidden');
        $('.loading-container').addClass('hidden');
        $('footer-component').removeClass('hidden');
      } else {
        window.location.href = '#inicio'
        $('.loading-container').addClass('hidden');
      }

      $(document).off('click', '.add-to-cart').on('click', '.add-to-cart', function() {
        const productId = $(this).data('id');
        addCartItem(productId, 1);
        showModal();
        $('#cart-items-counter').html(getCartItemsAmount())
      });

      $('.product-container').removeClass('hidden');
      $('.loading-container').addClass('hidden');

    }).fail(function() {
      $('#product-error').html('<p>Erro ao carregar os dados do produto.</p>');
    });
  } else {
    $('#product-error').html('<p>ID de produto inválido.</p>');
  }
});