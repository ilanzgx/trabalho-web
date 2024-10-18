class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bg-blue-600">
        <div class="flex items-center">
          <div class="w-1/2">
            <a href="/index.html">
              <h1 class="text-4xl text-cyan-100">Trabalho HTML/CSS/JS</h1>
            </a>
            <ul id="navbar" class="flex flex-row gap-8 text-cyan-100">
              <li>
                <a href="/contato.html">
                  <i class="fa-solid fa-phone"></i>
                  <span class="mx-1 font-bold">Contato</span>
                </a>
              </li>
              <li>
                <a href="/sobre.html">
                  <i class="fa-solid fa-circle-info"></i>
                  <span class="mx-1 font-bold">Sobre nós</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="w-1/2 flex items-center justify-end mx-4">
            <a href="/carrinho.html">
              <div>
                <i class="fa-solid fa-cart-shopping fa-2x text-white"></i>
                <span class="rounded-full bg-red-500 px-2 py-1 text-xs text-white" id="cart-items-counter">${getCartItemsAmount()}</span>
              </div>
            </a>
          </div>
    
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', SpecialHeader);