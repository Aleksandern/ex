
import {
  createStyle,
  cls,
} from 'src/Styles';

export default createStyle({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cls.white,
    borderRadius: 35 / 2,
    height: 35,
    width: 35,
    marginLeft: 13,
  },
  containerNoBg: {
    backgroundColor: 'transparent',
  },
  icon: {
    color: cls.gray3,
    fontSize: 25,
  },
});
