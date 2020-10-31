
import deviceUtils from 'src/Utils/deviceUtils';
import {
  createStyle,
  cls,
} from 'src/Styles';

export default createStyle({
  text: {
    color: cls.gray3,
    textDecorationLine: 'underline',
  },
  textInside: {
    top: deviceUtils.isIOS ? 2 : 2.5,
  },
});
