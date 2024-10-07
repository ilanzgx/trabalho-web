class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bg-blue-700">
        <h1 class="text-4xl text-cyan-100">Trabalho HTML/CSS/JS</h1>

        <div>
          <ul id="navbar" class="flex flex-row gap-8 text-cyan-100">
            <li><button id="botao"><i class="fa-brands fa-shopify"></i> Ver produtos</button></li>
            <li><i class="fa-solid fa-phone"></i> Contato</li>
            <li><i class="fa-solid fa-circle-info"></i> Sobre</li>
          </ul>
        </div>
      </header>
    `;
  }
}


customElements.define('header-component', SpecialHeader);