class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
      <div class="hero-inner">
        <h1 class="hero-title" tabindex="0">Welcome to FRant</h1>
        <p class="hero-tagline" tabindex="0">
          Find the best restaurants with recommended food near you
        </p>
      </div>
    </div>
          `;
  }
}

customElements.define('hero-content', Hero);
