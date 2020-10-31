
import deviceUtils from 'src/Utils/deviceUtils';

import {
  createStyle,
  cls,
} from 'src/Styles';

export default createStyle({
  container: {
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: deviceUtils.isIOS ? 'center' : undefined,
    marginBottom: 10,
  },
  checkboxBl: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cls.gray2,
    borderRadius: 5,
    width: 25,
    height: 25,
  },
  checkbox: {
    color: cls.gray3,
    fontSize: 18,
  },
  text: {
    flex: 1,
    marginLeft: 15,
  },
});
