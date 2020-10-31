
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {
  cs,
} from 'src/Styles';

import routes from './routes';
import routeNames from './routeNames';
import {
  Route,
} from './typesNavigation';
import {
  renderHeaderLeft,
  getHeaderSyle,
} from './navigationOptions';

import navigationUtils from './navigationUtils';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const StackScreens = (routesScreens: Route[], isRoot = false) => (routesScreens.map((item) => {
  const {
    name,
    component,
    options = {},
  } = item;
  let Comp;

  const {
    title,
  } = navigationUtils.formatOptions(options);

  if (isRoot) {
    Comp = RootStack;
  } else {
    Comp = MainStack;
  }

  return (
    <Comp.Screen
      key={name}
      name={name}
      component={component}
      options={() => {
        const headerStyle = getHeaderSyle();

        return {
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerLeft: (props) => renderHeaderLeft(options, props),
          ...headerStyle,
          ...options,
          title,
        };
      }}
    />
  );
}));

export const LoginNavigator = () => {
  return (
    <RootStack.Navigator
      // initialRouteName={routeNames.CREATE_ACCOUNT_CODE}
      screenOptions={{
        cardStyle: {
          // backgroundColor: 'transparent',
          backgroundColor: cs.backgroundContent,
          // backgroundColor: 'green',
        },
      }}
    >
      {StackScreens(routes.loginRoutes, true)}
    </RootStack.Navigator>
  );
};

export const MainNavigator = () => (
  <RootStack.Navigator
    // initialRouteName={routeNames.PROFILE_SETUP_WHO}
    screenOptions={{
      cardStyle: {
        // backgroundColor: 'transparent',
        backgroundColor: cs.backgroundContent,
        // backgroundColor: 'green',
      },
    }}
  >
    {StackScreens(routes.mainRoutes, true)}
  </RootStack.Navigator>
);
