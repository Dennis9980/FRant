class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <header class="app-bar">
            <h1 tabindex="0">FRant</h1>
            <button id="hamburgMenu">
                <i class="fa fa-bars"></i>
            </button>
            <nav id="navDrawer" class="nav">
                <li class="nav-item"><a href="#/home">Home</a></li>
                <li class="nav-item"><a href="#exploreRestaurant">Explore</a></li>
                <li class="nav-item"><a href="#/favorite">Favorite</a></li>
                <li class="nav-item">
                <a href="https://github.com/Dennis9980">About Us</a>
                </li>
            </nav>
            </header>
        `;
  }
}

customElements.define('header-nav-bar', Header);
