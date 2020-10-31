
import {
  CommonActions,
  useNavigation,
} from '@react-navigation/native';

let navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  if (!navigatorRef) {
    return;
  }

  navigator = navigatorRef;
}

function navigate(name: string, params?: object) {
  if (!navigator) {
    return;
  }

  navigator.dispatch(
    CommonActions.navigate({
      name,
      params,
    }),
  );
}

function goBack() {
  if (!navigator) {
    return;
  }

  navigator.dispatch(
    CommonActions.goBack(),
  );
}

export default {
  setTopLevelNavigator,
  navigate,
  useNavigation,
  goBack,
};
