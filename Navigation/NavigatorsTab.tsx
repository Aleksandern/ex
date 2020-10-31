/* eslint-disable import/prefer-default-export */

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TabBar from 'src/Components/TabBar';

import {
  Route,
} from './typesNavigation';
import navigationUtils from './navigationUtils';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = (routes: Route[]) => (
  <Tab.Navigator
    backBehavior="none"
    tabBar={(props) => <TabBar {...props} />}
  >
    {routes.map(({ name, component, options = {} }: Route) => (
      <Tab.Screen
        key={name}
        name={name}
        options={navigationUtils.formatOptions(options)}
        component={component}
      />
    ))}
  </Tab.Navigator>
);

export const getTabNavigator = (routes: Route[]) => () => TabNavigator(routes);
