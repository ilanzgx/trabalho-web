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

    if (hash === '' || hash === '#inicio' || window.location.pathname.endsWith('index.html')) {
      loadPage(`${baseDir}inicio.html`);
    } 
    else if (hash.startsWith('#produto/')) {
      loadPage(`${baseDir}produto.html`);
    } 
    else if (hash === '#sobre') {
      loadPage(`${baseDir}sobre.html`);
    } 
    else if (hash === '#contato') {
      loadPage(`${baseDir}contato.html`);
    } 
    else if (hash === '#carrinho') {
      loadPage(`${baseDir}carrinho.html`);
    } 
    else {
      loadPage(`${baseDir}404.html`);
    }
  }

  checkHash();

  $(window).on('hashchange', function() {
    checkHash();
  });
});
