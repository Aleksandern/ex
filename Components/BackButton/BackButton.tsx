
import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Icon,
} from 'native-base';

import {
  NavigationService,
} from 'src/Navigation';

import styles from './styles';

interface PropTypes {
  noBackground?: boolean,
}

const BackButton = ({ noBackground }: PropTypes) => (
  <TouchableOpacity
    onPress={() => {
      NavigationService.goBack();
    }}
  >
    <View style={[styles.container, (noBackground ? styles.containerNoBg : {})]}>
      <Icon name="arrow-back" style={styles.icon} />
    </View>
  </TouchableOpacity>
);

BackButton.defaultProps = {
  noBackground: false,
};

export default BackButton;
