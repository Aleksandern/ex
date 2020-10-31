
import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import {
  Text,
  Button,
  H2,
} from 'native-base';
import {
  useForm,
  Controller,
} from 'react-hook-form';

import Localize from 'src/Utils/Localize';
import validationUtils from 'src/Utils/validationUtils';
import TextButton from 'src/Components/TextButton';
import ContentContainer from 'src/Components/ContentContainer';
import Input from 'src/Components/Input';
import {
  Props,
  routeNames,
} from 'src/Navigation';

import {
  gs,
} from 'src/Styles';

type FormData = {
  email?: string,
};

const CreateAccountEmail = ({ navigation }: Props) => {
  const { control, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = handleSubmit((data: FormData) => {
    const { email } = data;

    navigation.navigate(routeNames.CREATE_ACCOUNT_CODE, {
      email,
    });
  });

  const renderForm = () => (
    <View>
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <Input
            value={value}
            onChangeText={(valueS) => onChange(valueS)}
            error={!!errors.email}
            onSubmitEditing={onSubmit}
          />
        )}
        name="email"
        rules={{
          required: true,
          validate: validationUtils.isEmail,
        }}
        defaultValue=""
      />
    </View>
  );

  return (
    <ContentContainer
      margin
      scrollEnabled
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <View>
        <H2>{Localize.t('login.enterYourEmail')}</H2>
        <Text text2 style={[gs.mT30, gs.mB10]}>{Localize.t('login.yourEmail')}</Text>

        {renderForm()}

        <Text text2link>
          {Localize.t('login.byContinuingYouAgree1')}
          <TextButton
            text={Localize.t('termsOfUse')}
            isTextInside
          />
          {Localize.t('login.byContinuingYouAgree2')}
        </Text>

        <Button light block style={gs.mT30} onPress={onSubmit}>
          <Text>{Localize.t('login.sendCode')}</Text>
        </Button>
      </View>
    </ContentContainer>
  );
};

export default CreateAccountEmail;
