class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer id="rodape" class="px-4 pt-12 bg-blue-700 text-gray-200">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 pb-6">
  
        <div class="p-1 pb-6">
          <h1 class="text-2xl font-semibold uppercase mb-6">Mais ajuda</h1>
          <ul class="text-sm">
            <li class="py-1">
              <a href="#contato" class="flex items-center hover:underline">
                <img class="h-5 w-5 mr-2" src="/images/icons/arrow.svg" />
                Contato
              </a>
            </li>
            <li class="py-1">
              <a href="#faq" class="flex items-center hover:underline">
                <img class="h-5 w-5 mr-2" src="/images/icons/arrow.svg" />
                Dúvidas frequentes
              </a>
            </li>
            <li class="py-1">
              <a href="#entrega" class="flex items-center hover:underline">
                <img class="h-5 w-5 mr-2" src="/images/icons/arrow.svg" />
                Tempo de entrega
              </a>
            </li>
            <li class="py-1">
              <a href="#categorias" class="flex items-center hover:underline">
                <img class="h-5 w-5 mr-2" src="/images/icons/arrow.svg" />
                Mapa de categorias
              </a>
            </li>
          </ul>
        </div>
  
        <div class="p-1 pb-6">
          <h1 class="text-2xl font-semibold uppercase mb-6">Sobre nós</h1>
          <ul class="text-sm">
            <li class="py-1">
              <a href="#sobre" class="flex items-center hover:underline">
                <img class="h-5 w-5 mr-2" src="/images/icons/arrow.svg" />
                Quem somos
              </a>
            </li>
            <li class="py-1">
              <a href="#fornecedores" class="flex items-center hover:underline">
                <img class="h-5 w-5 mr-2" src="/images/icons/arrow.svg" />
                Nossos fornecedores
              </a>
            </li>
            <li class="py-1">
              <a href="#termos" class="flex items-center hover:underline">
                <img class="h-5 w-5 mr-2" src="/images/icons/arrow.svg" />
                Termos de uso
              </a>
            </li>
            <li class="py-1">
              <a href="#sustentabilidade" class="flex items-center hover:underline">
                <img class="h-5 w-5 mr-2" src="/images/icons/arrow.svg" />
                Sustentabilidade
              </a>
            </li>
          </ul>
        </div>
  
        <div class="lg:col-span-2 md:col-span-1 col-span-3 p-1">
          <h1 class="text-2xl font-semibold uppercase mb-6">Formas de pagamento</h1>
          <img src="/images/metodos.jpg" alt="Mercado Pago - Meios de pagamento" title="Mercado Pago - Meios de pagamento" width="575" height="40"/>
        </div>
      </div>
  
      <div class="flex items-center py-6 border-t border-opacity-50 border-gray-700">
        <div class="md:w-6/12 w-1/3">
          <p class="uppercase md:text-sm text-xs">Copyright @ <span id="currentYear"></span> TODOS OS DIREITOS RESERVADOS.</p>
        </div>
  
        <div class="md:w-6/12 w-2/3 flex justify-end items-center ">
          <a href="#" class="px-3">
            <img class="md:w-12 md:h-12 w-10 h-10 fill-current bg-blue-900 rounded-3xl sm:p-2" src="/images/icons/whatsapp.svg"  />
          </a>

          <a href="#" class="px-3">
            <img class="md:w-12 md:h-12 w-10 h-10 fill-current bg-blue-900 rounded-3xl sm:p-2" src="/images/icons/twitter.svg"  />
          </a>
  
          <a href="#" class="px-3">
            <img class="md:w-12 md:h-12 w-10 h-10 fill-current bg-blue-900 rounded-3xl sm:p-2" src="/images/icons/instagram.svg"  />
          </a>
        </div>
      </div>
    </footer>
    `;

    this.querySelector('#currentYear').textContent = new Date().getFullYear();
  }
}

customElements.define('footer-component', SpecialFooter);
