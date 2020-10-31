
import React from 'react';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {
  Text,
} from 'native-base';

import styles from './styles';

interface PropTypes {
  text: string,
  onPress?: () => void,
  style?: StyleProp<ViewStyle>,
  styleText?: StyleProp<TextStyle>,
  isTextInside?: boolean,
}

const defaultProps = {
  onPress: () => null,
  style: {},
  styleText: {},
  isTextInside: false,
} as Partial<PropTypes>;

const TextButton = ({
  text,
  onPress,
  style,
  styleText,
  isTextInside,
}: PropTypes) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Text
      text2link
      style={[
        styles.text,
        isTextInside ? styles.textInside : {},
        styleText,
      ]}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

TextButton.defaultProps = defaultProps;

export default TextButton;
