
import { ComponentType, ReactNode } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  MaterialTopTabBarProps as MaterialTopTabBarPropsRN,
} from '@react-navigation/material-top-tabs';

import routeNames, { RootStackParamList } from './routeNames';

export type RouteTitleTS = string;

export type RouteNamesTS = {
  [key: string]: any,
};

export type RouteOptions = {
  [key: string]: any,
  title?: RouteTitleTS,
};

export interface Route {
  name: string,
  component: ComponentType | ReactNode | any,
  options?: RouteOptions,
}

type ProfileScreenRouteProp = RouteProp<RootStackParamList, routeNames.SIGN_IN>;
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

export type PropsByRouteName<RouteName extends keyof RootStackParamList> = {
  route: RouteProp<RootStackParamList, RouteName>;
  navigation: ProfileScreenNavigationProp;
};

export type AllRoutes = Route;

export type MaterialTopTabBarProps = MaterialTopTabBarPropsRN;
