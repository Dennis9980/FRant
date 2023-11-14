import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorit from '../views/pages/favorit';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorite': Favorit,
  '/detail/:id': Detail,
};

export default routes;
