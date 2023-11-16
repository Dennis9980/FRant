class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
      <p tabindex="0">&copy; Copyright 2023, FRant</p>
    </footer>
          `;
  }
}

customElements.define('footer-bar', Footer);
