
import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import {
  Text,
  Icon,
} from 'native-base';

import {
  ExtractOptionalToRequiredTypes,
} from 'src/Common/Types';

import styles from './styles';

interface PropTypes {
  checked?: boolean,
  onPress?: () => void,
  text?: string | null,
}

const defaultProps: ExtractOptionalToRequiredTypes<PropTypes> = {
  checked: false,
  onPress: () => null,
  text: null,
};

const CheckBox: React.FC<PropTypes | TouchableWithoutFeedbackProps> = (props) => {
  const {
    checked,
    onPress,
    text,
    ...restProps
  } = { ...defaultProps, ...props };
  return (
    <TouchableOpacity
      style={styles.container}
      {...restProps}
      onPress={onPress}
    >
      <View style={styles.checkboxBl}>
        {checked && (
          <Icon
            type="MaterialCommunityIcons"
            name="check-bold"
            style={styles.checkbox}
          />
        )}
      </View>
      {text && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default CheckBox;
