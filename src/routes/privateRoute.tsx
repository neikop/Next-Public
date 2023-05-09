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
};

export default privateRoute;
