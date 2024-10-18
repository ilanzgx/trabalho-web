class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-blue-600 text-white px-6 py-2">
        <div class="flex">
          <div class="w-1/3">
            Rodape
          </div>
          <div class="w-1/3">
            © Todos os Direitos Reservados
          </div>
          <div class="w-1/3">
            Rodape
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', SpecialFooter);