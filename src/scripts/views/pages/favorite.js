import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import templateCreator from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="content">
          <div id="exploreRestaurant" class="explore">
            <h1 tabindex="0" class="explore-label">Favorite Restaurants</h1>
            <div id="restaurants" class="restaurants"></div>
          </div>
        </section>
      `;
  },

  async afterRender() {
    const resto = await FavoriteRestoIdb.getAllResto();
    const restaurantsContainer = document.querySelector('#restaurants');

    resto.forEach((restaurant) => {
      restaurantsContainer.innerHTML += templateCreator.restoListCard(restaurant);
    });
  },
};

export default Favorite;
