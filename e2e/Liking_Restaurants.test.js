/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
  I.amOnPage('/');

  I.seeElement('a .restaurant-title');
  const firstRestaurant = locate('a .restaurant-title');
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-list');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

// Scenario('searching restaurants', async ({ I }) => {
//   I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');

//   I.amOnPage('/');

//   I.seeElement('a .restaurant-title');

//   const titles = [];
//   // eslint-disable-next-line no-plusplus
//   for (let i = 1; i <= 3; i++) {
//     I.click(locate('a .restaurant-title').at(i));
//     I.seeElement('#likeButton');
//     I.click('#likeButton');
//     // eslint-disable-next-line no-await-in-loop
//     titles.push(await I.grabTextFrom('.resto-detail-title'));
//     I.amOnPage('/');
//   }

//   I.amOnPage('/#/favorite');
//   I.seeElement('#query');

//   const visibledLikdeRestaurants = await I.grabNumberOfVisibleElements('.restaurant-list');
//   assert.strictEqual(titles.length, visibledLikdeRestaurants);

//   const searchQuery = titles[1].substring(1, 3);
//   I.fillField('#query', searchQuery);
//   I.pressKey('Enter');

//   // mendapatkan daftar film yang sesuai dengan searchQuery
//   const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);
//   const visibleSearchedLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-list');
//   assert.strictEqual(matchingRestaurants.length, visibleSearchedLikedRestaurants);

//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < matchingRestaurants.length; i++) {
//     // eslint-disable-next-line no-await-in-loop
//     const visibleTitle = await I.grabTextFrom(locate('.restaurant-title').at(i + 1));
//     assert.strictEqual(matchingRestaurants[i], visibleTitle);
//   }
// });
