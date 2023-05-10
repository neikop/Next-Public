import { Components } from 'views/Components';
import { Home } from 'views/Home';
import { Profile } from 'views/Profile';

const privateRoute = {
  home: {
    path: '/',
    name: 'Home',
    component: Home,
  },
  profile: {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  components: {
    path: '/components',
    name: 'Components',
    component: Components,
  },
};

export default privateRoute;
