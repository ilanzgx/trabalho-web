$(document).ready(function() {  
  const contentElement = $('#content');    

  function loadPage(page) {  
    $.get(page)  
      .done(function(data) {  
        contentElement.html(data);  
      })  
      .fail(function(error) {  
        console.error(`Erro ao carregar a página: ${error}`);  
        contentElement.html('<p>Erro ao carregar a página.</p>');  
      });  
  }  

  function checkHash() {
    const hash = window.location.hash;
    const baseDir = './pages/';
  
    switch (true) {
      case (hash === '' || hash === '#inicio'):
        loadPage(`${baseDir}inicio.html`);
        break;
      case hash.startsWith('#produto/'):
        loadPage(`${baseDir}produto.html`);
        break;
      case hash === '#sobre':
        loadPage(`${baseDir}sobre.html`);
        break;
      case hash === '#contato':
        loadPage(`${baseDir}contato.html`);
        break;
      case hash === '#carrinho':
        loadPage(`${baseDir}carrinho.html`);
        break;
      default:
        loadPage(`${baseDir}404.html`);
        break;
    }
  }

  checkHash();

  $(window).on('hashchange', function() {
    checkHash();
  });
});
