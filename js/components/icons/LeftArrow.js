class LeftArrowIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <svg fill="#000000" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 404.258 404.258" xml:space="preserve">
        <polygon points="289.927,18 265.927,0 114.331,202.129 265.927,404.258 289.927,386.258 151.831,202.129 "/>
      </svg>
    `;
  }
}

customElements.define('left-arrow-icon', LeftArrowIcon);