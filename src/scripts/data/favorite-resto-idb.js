/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestoIdb = {
  async getResto(id) {
    if (!id) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllResto() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putResto(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
  async searchRestaurants(query) {
    return (await this.getAllResto()).filter((restaurant) => {
      const loweredCaseRestaurantTitle = (restaurant.title || '-').toLowerCase();
      const jammedRestaurantTitle = loweredCaseRestaurantTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestaurantTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

export default FavoriteRestoIdb;
