import 'regenerator-runtime';
import '../styles/style.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

import './components/header';
import './components/hero';
import './components/footer';

const app = new App({
  button: document.querySelector('#hamburgMenu'),
  drawer: document.querySelector('#navDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
