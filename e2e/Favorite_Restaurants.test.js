/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
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

Scenario('Unliking one restaurant', async ({ I }) => {
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

  const unlikedRestaurantTitle = await I.grabTextFrom('.restaurant-title');
  assert.strictEqual(firstRestaurantTitle, unlikedRestaurantTitle);

  I.seeElement('a .restaurant-title');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-list');
  I.dontSeeElement('.restaurant-title');
});
