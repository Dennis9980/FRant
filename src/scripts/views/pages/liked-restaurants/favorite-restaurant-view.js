/* eslint-disable class-methods-use-this */
import templateCreator from '../../templates/template-creator';

class FavoriteRestoView {
  getTemplate() {
    return `
        <section class="content">
          <div id="exploreRestaurant" class="explore">
            <h1 tabindex="0" class="explore-label">Favorite Restaurants</h1>
              <div id="restaurants" class="restaurants"></div>
          </div>
        </section>
      `;
  }

  showRestaurants(restaurants) {
    let html;
    if (restaurants.length > 0) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(templateCreator.restoListCard(restaurant)),
        '',
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.querySelector('.restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  // eslint-disable-next-line no-unused-vars
  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(templateCreator.restoListCard(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="resto-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestoView;
