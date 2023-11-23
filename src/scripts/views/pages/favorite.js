/* eslint-disable no-new */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestoView from './liked-restaurants/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';

const view = new FavoriteRestoView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });
  },
};

export default Favorite;
