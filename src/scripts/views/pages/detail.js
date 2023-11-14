import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import createDetailTemplate from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section class="content">
        <div id="exploreRestaurant" class="explore">
          <h1 tabindex="0" class="explore-label">Detail Restaurant</h1>
          <div id="detailResto" class="restaurants"></div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoSource.detailResto(url.id);
    console.log(restaurant);
    const detailContainer = document.querySelector('#detailResto');
    detailContainer.innerHTML = createDetailTemplate.restoDetail(restaurant);
  },
};

export default Detail;
