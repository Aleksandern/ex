
import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  Icon,
} from 'native-base';

import {
  ExtractOptionalToRequiredTypes,
} from 'src/Common/Types';

import {
  ViewStyleProps,
  TextStyleProps,
} from 'src/Styles';

import styles from './styles';

interface PropTypes {
  onPress?: () => void,
  text: string,
  dark?: boolean,
  hasCrossIcon?: boolean,
  style?: ViewStyleProps,
}

const defaultProps: ExtractOptionalToRequiredTypes<PropTypes> = {
  onPress: () => null,
  dark: false,
  hasCrossIcon: false,
  style: {},
};

const Tag: React.FC<PropTypes> = (props) => {
  const {
    onPress,
    text,
    dark,
    hasCrossIcon,
    style,
  } = { ...defaultProps, ...props };
  const styleContainer: ViewStyleProps = [styles.container];
  const styleText: TextStyleProps = [styles.text];
  const styleIcon: any = [styles.icon];

  if (!dark) {
    styleContainer.push(styles.containerLight);
    styleText.push(styles.textLight);
    styleIcon.push(styles.iconLight);
  }

  styleContainer.push(style);

  return (
    <TouchableOpacity
      style={styleContainer}
      onPress={onPress}
    >
      <Text style={styleText}>{text}</Text>
      {hasCrossIcon && (
        <Icon
          type="Entypo"
          name="cross"
          style={styleIcon}
        />
      )}
    </TouchableOpacity>
  );
};

export default Tag;
