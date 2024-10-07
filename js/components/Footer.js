class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>Este é o rodape</p>
      </footer>
    `;
  }
}

customElements.define('footer-component', SpecialFooter);