
import * as screens from 'src/Screens';

import routeNames from './routeNames';
import {
  Route,
} from './typesNavigation';
import {
  getTabNavigator,
} from './NavigatorsTab';

const loginCreateAccountTabRoutes: Route[] = [
  {
    name: routeNames.CREATE_ACCOUNT_PHONE,
    component: screens.CreateAccountPhone,
    options: {
      title: 'common.phone',
    },
  },
  {
    name: routeNames.CREATE_ACCOUNT_EMAIL,
    component: screens.CreateAccountEmail,
    options: {
      title: 'common.email',
    },
  },
];

const loginRoutes: Route[] = [
  {
    name: routeNames.SIGN_IN,
    component: screens.SignInLogin,
    options: {
      title: '',
      headerTransparent: true,
    },
  },
  {
    name: routeNames.SIGN_UP,
    component: screens.SignUpLogin,
    options: {
      title: '',
      // headerShown: false,
      headerTransparent: true,
    },
  },
];

const mainRoutes = [
  {
    name: routeNames.MAIN,
    component: screens.MainScreen,
    options: {
    },
  },
];

const routes = {
  loginRoutes,
  mainRoutes,
};

export default routes;
