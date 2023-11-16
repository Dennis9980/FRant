import CONFIG from '../../globals/config';

const restoListCard = (restaurant) => `
    <article class="restaurant-list">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <p class="city">${restaurant.city}</p>
        <p class="rating">⭐️ ${restaurant.rating}</p>
        <div class="restaurant-info">
            <a href="#/detail/${restaurant.id}" class="link-to-detail">
                <h2 class="restaurant-title" tabindex="0" >${restaurant.name}</h2>
            </a>
            <p class="restaurant-desc">${restaurant.description}</p>
        </div>
    </article>
`;

const restoDetail = (restaurant) => `
    <div class="resto-detail">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="resto-img">
            <ul>
                <li><h2>${restaurant.name} - ${restaurant.city}</h2></li>
                <li><i class="fa fa-map-marker" alt='Location'></i> ${restaurant.address}</li>
                <li class="detail-desc">${restaurant.description}</li>
            </ul>
    </div>
    <div>
        <h2 class="explore-label">Menu</h2>
        <div class="menu">
            <div class="card-menu">
                <h2>Food</h2>
                <ul>
                ${restaurant.menus.foods.map((food, index) => `<li>${index + 1}) ${food.name}</li>`).join('')}
                </ul>
            </div>
            <div class="card-menu">
                <h2>Drinks</h2>
                <ul>
                    ${restaurant.menus.drinks.map((drink, index) => `<li>${index + 1}) ${drink.name}</li>`).join('')}
                </ul>
            </div>
        </div>
        <h2 class="explore-label">Reviews</h2>
        <div class="detail-review">
            ${restaurant.customerReviews.map((review) => `
                <div class="review-item">
                    <p class="reviewer">${review.name}</p>
                    <p class="reviewer-date">${review.date}</p>
                    <p class="reviewer-content">${review.review}</p>
                </div>
            `).join('')}
        </div>
    </div>
`;

const likeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const likedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export default {
  restoListCard, restoDetail, likeButtonTemplate, likedButtonTemplate,
};
