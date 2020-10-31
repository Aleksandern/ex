
import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {
  observer,
} from 'mobx-react';

import {
  useStores,
} from 'src/Store';

import NavigationService from './NavigationService';
import {
  LoginNavigator,
  MainNavigator,
} from './Navigators';
import navigationTheme from './navigationTheme';

export default observer(() => {
  const {
    settings: { locale },
    auth: { isAuth },
  } = useStores();
  const navigationRef = React.useRef<NavigationContainerRef | null>(null);

  React.useEffect(() => {
    if (navigationRef.current) {
      navigationRef.current.resetRoot();
    }
  }, [locale]);

  return (
    <NavigationContainer
      ref={(c) => {
        if (c) {
          navigationRef.current = c;
          NavigationService.setTopLevelNavigator(c);
        }
      }}
      theme={navigationTheme}
    >
      {
        isAuth
          ? MainNavigator()
          : LoginNavigator()
      }
    </NavigationContainer>
  );
});
