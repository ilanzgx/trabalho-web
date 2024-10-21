class SpecialFooter extends HTMLElement {
  getYear

  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-blue-700 text-gray-200 px-6 py-2">
        <div class="flex">
          <div class="w-1/3 flex items-center">
            <p>Todos os direitos reservados &copy; 2024</p>
          </div>
          <div class="w-1/3 flex items-center">
            Rodape
          </div>
          <div class="w-1/3 flex items-center">
            <ul class="text-sm font-medium">
              <li>
                <a class="hover:text-gray-50 transition-colors" href="#sobre">Sobre nós</a>
              </li>

              <li>
                <a class="hover:text-gray-50 transition-colors" href="#contato">Contato</a>
              </li>

              <li>
                <a class="hover:text-gray-50 transition-colors" href="#outros">Outros</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', SpecialFooter);