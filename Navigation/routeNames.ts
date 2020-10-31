
enum RouteNames {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  CREATE_ACCOUNT = 'CREATE_ACCOUNT',
  MAIN = 'MAIN'
}

export type RootStackParamList = {
  [RouteNames.SIGN_IN]: undefined,
  [RouteNames.SIGN_UP]: {
    hz?: string,
  },,
  [RouteNames.MAIN]: undefined,
};

export default RouteNames;
