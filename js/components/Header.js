class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="text-gray-200">
        <div class="flex bg-blue-700 text-center py-2">
          <div class="flex w-3/12 items-center justify-end px-10">
            <a href="/#inicio">
              <h1 class="text-3xl">Loja virtual</h1>
            </a>
          </div>
          <div class="relative flex w-5/12 items-center justify-end px-2">
            <input id="search-bar" placeholder="Pesquise o seu produto" class="w-full rounded-lg border border-gray-400 py-3 pl-3 pr-16 text-gray-900" />
            <img src="/images/icons/search.svg" class="absolute mr-2 w-10 cursor-pointer" width="30" height="30" />
          </div>
          <div class="flex w-2/12 items-center justify-center">
            <div class="flex items-center p-1">
              <div class="flex w-1/2 justify-center">
                <img src="/images/icons/user.svg" width="30" height="30" />
              </div>
              <div class="w-1/2 pr-4">
                <p class="text-xs md:text-sm">Olá, <span class="font-bold cursor-pointer">Entre</span> ou <span class="font-bold cursor-pointer">Cadastra-se</span></p>
              </div>
            </div>
          </div>
          <div class="flex w-2/12 items-center px-6">
            <a href="#carrinho">
              <div class="flex items-center">
                <img src="/images/icons/cart.svg" />
                <span class="rounded-full bg-red-500 px-2 py-1 text-xs text-white" id="cart-items-counter">${getCartItemsAmount()}</span>
              </div>
            </a>
          </div>
        </div>
        <div class="bg-blue-800 flex justify-around py-2 px-1">
          <div>
            <button class="uppercase font-bold hover:text-gray-50 transition-colors">Promoções</button>
          </div>

          <div>
            <button class="uppercase font-bold hover:text-gray-50 transition-colors">Mais vendidos</button>
          </div>

          <div>
            <button class="uppercase font-bold hover:text-gray-50 transition-colors">Novidades</button>
          </div>

          <div>
            <button class="uppercase font-bold hover:text-gray-50 transition-colors">Preço</button>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define("header-component", SpecialHeader);
