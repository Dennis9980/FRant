class FavoriteRestoSeacrhPresenter {
  constructor({ favoriteRestaurants }) {
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchRestaurants(event.target.value);
    });
  }

  _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery;
    this._favoriteRestaurants.searchRestaurants(this.latestQuery);
  }

  // eslint-disable-next-line class-methods-use-this
  _showFoundRestaurants(restaurants) {
    const html = restaurants.reduce(
      (carry, restaurant) => carry.concat(`<li class="restaurant"><span class="resto__title">${restaurant.title || ' - '}</span></li>`),
      '',
    );
    document.querySelector('.restaurants').innerHTML = html;
  }

  get latestQuery() {
    return this._latestQuery;
  }
}
export default FavoriteRestoSeacrhPresenter;
