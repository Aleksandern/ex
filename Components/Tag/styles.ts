
import {
  createStyle,
  cls,
  fs,
} from 'src/Styles';

export default createStyle({
  container: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: cls.gray3,
    borderRadius: 7,
    flexDirection: 'row',
    marginRight: 10,
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 5,
  },
  containerLight: {
    backgroundColor: cls.gray2,
  },
  text: {
    color: cls.white,
    fontFamily: fs.s700,
    fontSize: 9,
    lineHeight: 11,
    paddingRight: 0,
    marginRight: 5,
    textTransform: 'uppercase',
  },
  textLight: {
    color: cls.gray,
  },
  icon: {
    color: cls.white,
    fontSize: 11,
    lineHeight: 11,
    marginLeft: 0,
    paddingLeft: 0,
  },
  iconLight: {
    color: cls.gray,
  },
});
