import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import templateCreator from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <section class="content">
        <div id="exploreRestaurant" class="explore">
          <h1 tabindex="0" class="explore-label">Detail Restaurant</h1>
          <div id="detailResto"></div>
          <div id="likeButtonContainer"></div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoSource.detailResto(url.id);
    console.log(restaurant);
    const detailContainer = document.querySelector('#detailResto');
    detailContainer.innerHTML = templateCreator.restoDetail(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
