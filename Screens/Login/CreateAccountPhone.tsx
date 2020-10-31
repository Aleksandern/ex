
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
import generalUtils from 'src/Utils/generalUtils';
import TextButton from 'src/Components/TextButton';
import ContentContainer from 'src/Components/ContentContainer';
import Input from 'src/Components/Input';
import ModalDropdown from 'src/Components/ModalDropdown';
import {
  Props,
  routeNames,
} from 'src/Navigation';

import {
  gs,
} from 'src/Styles';

type FormData = {
  phoneCode?: string,
  phoneNumber?: string,
};

const CreateAccountPhone = ({ navigation }: Props) => {
  const { control, handleSubmit, errors } = useForm<FormData>();
  const countryPhoneCodes = generalUtils.getContryPhoneCodes();

  const onSubmit = handleSubmit((data: FormData) => {
    const { phoneCode, phoneNumber } = data;
    const phone = `${phoneCode}${phoneNumber}`.replace('+', '');

    navigation.navigate(routeNames.CREATE_ACCOUNT_CODE, {
      phone,
    });
  });

  const renderForm = () => (
    <View style={gs.row}>
      <Controller
        control={control}
        render={({ onChange }) => (
          <ModalDropdown
            options={countryPhoneCodes}
            defaultValue={Localize.t('countryPhoneCode')}
            dropdownStyle={gs.height180}
            inputProps={{
              touchable: true,
              rightIconBackground: false,
              width: 150,
              error: !!errors.phoneCode,
            }}
            onSelect={({ name }) => {
              onChange(name);
              return true;
            }}
            hasSearch
            filterOptions={(inputSearch, options) => {
              const isInputCode = (inputSearch.length === 2);
              const inputFormat = inputSearch.toLowerCase();
              const inputSearchCode = inputFormat.includes('+') ? inputSearch : `+${inputSearch}`;

              const res = options.filter(({ name, code, country }) => {
                const countryFormat = country.toLowerCase();
                const countrySearch = isInputCode ? countryFormat.startsWith(inputFormat) : countryFormat.includes(inputFormat);

                if (
                  countrySearch
                  || code.toLowerCase().startsWith(inputFormat)
                  || name.startsWith(inputSearchCode)
                ) {
                  return true;
                }

                return false;
              });

              return res;
            }}
          />
        )}
        name="phoneCode"
        rules={{ required: true }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ onChange, value }) => (
          <Input
            value={value}
            onChangeText={(valueS) => onChange(valueS)}
            error={!!errors.phoneNumber}
            onSubmitEditing={onSubmit}
            styleContainer={[gs.flex, gs.mL10]}
            keyboardType="number-pad"
            isNumber
          />
        )}
        name="phoneNumber"
        rules={{ required: true }}
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
        <H2>{Localize.t('login.enterYourPhone')}</H2>
        <Text text2 style={[gs.mT30, gs.mB10]}>{Localize.t('login.yourPhoneNumber')}</Text>

        {renderForm()}

        <Text text2link>
          {Localize.t('login.byContinuingYouAgree1')}
          <TextButton
            text={Localize.t('termsOfUse')}
            isTextInside
          />
          {Localize.t('login.byContinuingYouAgree2')}
          {Localize.t('login.smsFeesApply')}
        </Text>

        <Button light block style={gs.mT30} onPress={onSubmit}>
          <Text>{Localize.t('login.sendCode')}</Text>
        </Button>
      </View>
    </ContentContainer>
  );
};

export default CreateAccountPhone;
