
import { DefaultTheme } from '@react-navigation/native';

import {
  cs,
} from 'src/Styles';

const navigationTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(0, 122, 255)',
    background: cs.backgroundContent,
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
  },
};

export default navigationTheme;
