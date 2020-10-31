
import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  H2,
  Text,
  Button,
} from 'native-base';

import Localize from 'src/Utils/Localize';
import ContentContainer from 'src/Components/ContentContainer';
import CameraImagePicker from 'src/Components/CameraImagePicker';
import {
  Props,
  routeNames,
} from 'src/Navigation';
import {
  gs,
  ViewStyleProps,
} from 'src/Styles';

import cameraImg from 'src/Assets/img/camera.png';

import styles from './styles';

const ProfileSetupPhoto: React.FC<Props> = ({ navigation }) => {
  const [image, setImage] = React.useState<string | null>(null);
  const cameraImagePicker = React.createRef<any>();

  const renderUploadPhoto = () => {
    const style: ViewStyleProps = [styles.photoBl];

    let imageDisplay = (
      <View style={styles.photoContent}>
        <Image source={cameraImg} />
        <Text style={gs.mT15}>{Localize.t('login.uploadYourPhoto')}</Text>
      </View>
    );

    if (image) {
      style.push(styles.photoBlFromDevice);
      imageDisplay = <Image source={{ uri: image }} style={styles.photoFromDevice} />;
    }

    return (
      <TouchableOpacity
        style={style}
        onPress={() => {
          cameraImagePicker.current.showChooseList();
        }}
      >
        {imageDisplay}
      </TouchableOpacity>
    );
  };

  return (
    <ContentContainer
      margin
      scrollEnabled
      bottomTextTopPadding
      renderBottonContent={() => (
        <Button
          light
          block
          disabled={!image}
          style={gs.mT20}
          onPress={() => {
            navigation.navigate(routeNames.PROFILE_SETUP_KIND_SPORT);
          }}
        >
          <Text>{Localize.t('login.next')}</Text>
        </Button>
      )}
    >
      <H2>{Localize.t('login.uploadYourPhoto')}</H2>
      <Text style={[gs.mT20, gs.mB15]}>{Localize.t('login.uploadYourPhotoDescription')}</Text>

      {renderUploadPhoto()}

      <CameraImagePicker
        ref={cameraImagePicker}
        onTakeImage={(imagePath) => {
          setImage(imagePath);
        }}
      />
    </ContentContainer>
  );
};

export default ProfileSetupPhoto;
