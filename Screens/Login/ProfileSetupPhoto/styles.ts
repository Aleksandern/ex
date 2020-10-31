
import {
  createStyle,
  cls,
} from 'src/Styles';

export default createStyle({
  photoBl: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: cls.gray,
    borderStyle: 'dashed',
    borderRadius: 20,
    height: 300,
  },
  photoBlFromDevice: {
    borderColor: cls.transparent,
    borderStyle: undefined,
  },
  photoContent: {
    alignItems: 'center',
  },
  photoFromDevice: {
    flex: 1,
    width: '100%',
    borderRadius: 20,
    // width: '100%',
  },
});
