
import React from 'react';
import { injectProps } from 'inject-props';
import {
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

import {
  Props,
  PropsByRouteName,
  routeNames,
} from 'src/Navigation';

import Localize from 'src/Utils/Localize';
import ContentContainer from 'src/Components/ContentContainer';
import TextButton from 'src/Components/TextButton';
import Input from 'src/Components/Input';
import {
  gs,
} from 'src/Styles';

type FormData = {
  [key: string]: any;
};

type UseRefInputs = {
  [key in string | number]: any;
};

interface PropTypes extends Props {
  email?: string,
  phone?: string,
}

const defaultProps = {
  email: undefined,
  phone: undefined,
};

const CreateAccountCode = ({ navigation, email, phone }: PropTypes) => {
  const refInputs = React.useRef<UseRefInputs[]>([]);
  const { control, handleSubmit, errors } = useForm<FormData>();
  const sentThing = email || phone;

  const onSubmit = handleSubmit((_data: FormData) => {
    navigation.navigate(routeNames.CREATE_ACCOUNT_PASSWORD);
  });

  const renderForm = () => {
    const codeLength = 4;

    return (
      <View style={[gs.row, gs.mT10, gs.mB5, gs.jCSpaceBetween]}>
        {[...Array(codeLength).keys()].map((item, index) => {
          const name = `name${item}`;
          const hasError = !!errors[name];
          const isFirstCode = (index === 0);
          const isLastCode = (codeLength === (index + 1));

          return (
            <Controller
              key={item}
              control={control}
              render={({ onChange, value }) => (
                <Input
                  value={value}
                  getRef={(c: any) => {
                    if (c) {
                      const data = refInputs.current;
                      data[index] = c;
                      refInputs.current = data;
                    }
                  }}
                  onChangeText={(valueS) => {
                    const valueLength = valueS.length;
                    let res = valueS;

                    if (valueLength > 1) {
                      res = valueS.charAt(1);
                    }

                    if (valueLength > 0) {
                      if (!isLastCode) {
                        const refInput = refInputs.current[index + 1];

                        if (refInput) {
                          refInput.focus();
                        }
                      }
                    }

                    onChange(res);

                    if (isLastCode) {
                      onSubmit();
                    }
                  }}
                  error={hasError}
                  onSubmitEditing={onSubmit}
                  style={gs.textCenter}
                  // styleItem={gs.width60}
                  styleContainer={[
                    !isFirstCode ? gs.mL10 : {},
                    gs.flex,
                  ]}
                  keyboardType="number-pad"
                  isNumber
                />
              )}
              name={name}
              rules={{ required: true }}
              defaultValue=""
            />
          );
        })}
      </View>
    );
  };

  return (
    <ContentContainer
      margin
      scrollEnabled
    >
      <H2>{Localize.t('login.enterDigitCode')}</H2>
      <Text style={[gs.mT20, gs.mB40]}>{Localize.t('login.enterCodeSent', { phoneNumber: sentThing })}</Text>

      <Text text2>{Localize.t('login.yourCode')}</Text>

      {renderForm()}

      <View style={gs.row}>
        <Text text2link>{Localize.t('login.codeCanResent')}</Text>
        <TextButton
          text={Localize.t('login.resendCode')}
        />
      </View>

      <Button light block style={gs.mT30} onPress={onSubmit}>
        <Text>{Localize.t('login.next')}</Text>
      </Button>
    </ContentContainer>
  );
};

CreateAccountCode.defaultProps = defaultProps;

const mapProps = (ownProps: PropsByRouteName<routeNames.CREATE_ACCOUNT_CODE>) => ({
  email: ownProps.route?.params?.email,
  phone: ownProps.route?.params?.phone,
});

// export default CreateAccountCode;
export default injectProps(mapProps)(CreateAccountCode);
