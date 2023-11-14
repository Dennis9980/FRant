import RestoSource from '../../data/resto-source';
import createRestoItemTemplate from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="content">
          <div id="exploreRestaurant" class="explore">
            <h1 tabindex="0" class="explore-label">Explore Restaurant</h1>
            <div id="restaurants" class="restaurants"></div>
          </div>
        </section>
      `;
  },

  async afterRender() {
    const resto = await RestoSource.listResto();
    console.log(resto);
    const restoContainer = document.querySelector('#restaurants');
    resto.forEach((restaurant) => {
      restoContainer.innerHTML += createRestoItemTemplate.restoListCard(restaurant);
    });
  },
};

export default Home;
