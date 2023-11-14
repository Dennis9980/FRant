import CONFIG from '../../globals/config';

const restoListCard = (restaurant) => `
    <article class="restaurant-list">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <p class="city">${restaurant.city}</p>
        <p class="rating"><i class="fa-solid fa-star"></i>${restaurant.rating}</p>
        <div class="restaurant-info">
            <a href="#/resto/${restaurant.id}" class="link-to-detail">
                <h2 class="restaurant-title" tabindex="0" >${restaurant.name}</h2>
            </a>
            <p class="restaurant-desc">${restaurant.description}</p>
        </div>
    </article>
`;

const restoDetail = (restaurant) => `
    <div class="resto-detail">
        <h1>Detail</h1>
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="resto-img">
            <ul>
                <li><h2>${restaurant.name}</h2></li>
                <li>${restaurant.city}city</li>
                <li>${restaurant.address}adress</li>
                <li>${restaurant.description}description</li>
            </ul>
        <h1>Menu</h1>
        <div class="menu">
            <div class="detail-food">
                <h2>food</h2>
                <ul>
                ${restaurant.menu.foods.map((food, index) => `<li>${index + 1}) ${food.name}</li>`).join('')}
                </ul>
            </div>
            <div class="detail-drinks">
                <h2>Drinks</h2>
                <ul>
                    ${restaurant.menu.drinks.map((drink, index) => `<li>${index + 1}) ${drink.name}</li>`).join('')}
                </ul>
            </div>
        </div>
        <h1>Reviews</h1>
        <div class="detail-review">

        </div>
    </div>
`;

export default { restoListCard, restoDetail };
