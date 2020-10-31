import React from 'react';

import {
  StyleProvider,
  Container,
  Root,
} from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  getTheme,
  theme,
} from 'src/Theme';

import NavigationContainer from 'src/Navigation';
import ServiceManager from 'src/Services';

const AppContainer = () => (
  <Root>
    <SafeAreaProvider>
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <NavigationContainer />

          <ServiceManager />
        </Container>
      </StyleProvider>
    </SafeAreaProvider>
  </Root>
);

export default AppContainer;
