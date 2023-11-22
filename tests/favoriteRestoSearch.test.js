/* eslint-disable no-undef */
import { spyOn } from 'jest-mock';
import FavoriteRestoSeacrhPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-resto-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Searching restaurants', () => {
  let presenter;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;

    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    document.body.innerHTML = `
            <div id="resto-search-container">
              <input id="query" type="text">
              <div class="resto-result-container">
                <ul class="restaurants">
                </ul>
              </div>
            </div>
          `;
  };

  const constructPresenter = () => {
    spyOn(FavoriteRestoIdb, 'searchRestaurants');
    presenter = new FavoriteRestoSeacrhPresenter({
      favoriteRestaurants: FavoriteRestoIdb,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  it('should be able to capture the query typed by the user', () => {
    searchRestaurants('resto a');

    expect(presenter.latestQuery).toEqual('resto a');
  });

  it('should ask the model to search for liked restaurant', () => {
    searchRestaurants('resto a');

    expect(FavoriteRestoIdb.searchRestaurants).toHaveBeenCalledWith('resto a');
  });

  it('should show the found restaurants', () => {
    presenter._showFoundRestaurants([{ id: 1 }]);
    expect(document.querySelectorAll('.restaurant').length).toEqual(1);
    presenter._showFoundRestaurants([
      {
        id: 1,
        title: 'Satu',
      },
      {
        id: 2,
        title: 'Dua',
      },
    ]);
    expect(document.querySelectorAll('.restaurant').length).toEqual(2);
  });

  it('should show the title of the found movies', () => {
    presenter._showFoundRestaurants([
      {
        id: 1,
        title: 'Satu',
      },
    ]);

    expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('Satu');

    presenter._showFoundRestaurants([
      {
        id: 1,
        title: 'Satu',
      },
      {
        id: 2,
        title: 'Dua',
      },
    ]);

    const restaurantTitle = document.querySelectorAll('.resto__title');

    expect(restaurantTitle.item(0).textContent).toEqual('Satu');
    expect(restaurantTitle.item(1).textContent).toEqual('Dua');
  });

  it('should show - for found movie without title', () => {
    presenter._showFoundRestaurants([{ id: 1 }]);

    expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual(' - ');
  });
});
