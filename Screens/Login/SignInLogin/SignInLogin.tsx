
import React from 'react';
import {
  Text,
  Button,
} from 'native-base';
import {
  useForm,
  Controller,
} from 'react-hook-form';
import {
  observer,
} from 'mobx-react';

import LoginContainer from 'src/Components/LoginContainer';
import Input from 'src/Components/Input';
import {
  Props,
  routeNames,
} from 'src/Navigation';
import Localize from 'src/Utils/Localize';
import {
  RootStore,
  useStores,
} from 'src/Store';

import {
  gs,
} from 'src/Styles';

type FormData = {
  login?: string,
  password?: string,
};

const { auth: authStore } = RootStore;

const SignInLogin = ({ navigation }: Props) => {
  const { control, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = handleSubmit((_data: FormData) => {
    authStore.logIn();
    // navigation.navigate(routeNames.SIGN_UP);
  });

  return (
    <LoginContainer>
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <Input
            label={Localize.t('login.phoneOrEmail')}
            value={value}
            onChangeText={(valueS) => onChange(valueS)}
            error={!!errors.login}
            onSubmitEditing={onSubmit}
          />
        )}
        name="login"
        // rules={{ required: true }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ onChange, value }) => (
          <Input
            label={Localize.t('login.password')}
            value={value}
            onChangeText={(valueS) => onChange(valueS)}
            error={!!errors.password}
            secureTextEntry
            onSubmitEditing={onSubmit}
          />
        )}
        name="password"
        // rules={{ required: true }}
        defaultValue=""
      />

      <Button
        primary
        block
        style={gs.mT15}
        onPress={onSubmit}
      >
        <Text>{Localize.t('login.signIn')}</Text>
      </Button>
    </LoginContainer>
  );
};

export default observer(SignInLogin);
