import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenBg from '../components/ScreenBg.tsx';
import CustomInput from '../components/CustomInput.tsx';
import MyHeader from '../components/MyHeader.tsx';
import MyButton from '../components/MyButton.tsx';
import {useStore} from '../stores/StoreContext.tsx';
import {launchImageLibrary} from 'react-native-image-picker';
import {observer} from 'mobx-react';

const GetInTouchScreen = ({navigation}: any) => {
  const {productStore: mainStore} = useStore();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (mainStore.name && mainStore.avatarUrl.length) {
      setIsActive(true);
    }
  }, [mainStore.name, mainStore.avatarUrl]);

  function handleSave() {
    if (mainStore.name && mainStore.avatarUrl.length) {
      mainStore.setShowEditProfile(false);
    }
  }

  const handlePickAvatar = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
    });

    if (result.assets?.[0]?.uri) {
      mainStore.setAvatarUrl(result.assets[0].uri);
    }
  };

  return (
    <ScreenBg>
      <SafeAreaView edges={['top']} style={styles.container}>
        <MyHeader showBack title={'Profile'} />

        {mainStore.showEditProfile ? (
          <View style={styles.infoContainer}>
            <Pressable onPress={handlePickAvatar} style={styles.plusContainer}>
              {mainStore.avatarUrl.length > 0 ? (
                <>
                  <Image
                    source={{uri: mainStore.avatarUrl}}
                    style={styles.avatarImage}
                  />
                  <Image
                    source={require('../assets/edit.png')}
                    style={styles.editIcon}
                  />
                </>
              ) : (
                <Text style={styles.plus}>+</Text>
              )}
            </Pressable>
            <CustomInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor={COLORS.grayText}
              containerStyle={{backgroundColor: darkBlue}}
              value={mainStore.name}
              onChangeText={mainStore.setName}
              clear={() => mainStore.setName('')}
            />
            <MyButton
              isDisabled={!isActive}
              onPress={handleSave}
              title={'Save'}
            />
          </View>
        ) : (
          <View style={styles.avatarContainer}>
            <Image
              source={{uri: mainStore.avatarUrl}}
              style={styles.avatarImage}
            />
            <Text style={styles.name}>{mainStore.name}</Text>
          </View>
        )}
        <View style={styles.btnViewContainer}>
          <ButtonView
            onPress={() => Linking.openURL('https://safety.google/')}
            title={'Privacy Policy'}
            icon={require('../assets/privacy.png')}
          />
          <ButtonView
            onPress={() => Linking.openURL('https://google.com/')}
            title={'Developer website'}
            icon={require('../assets/website.png')}
          />
          <ButtonView
            onPress={() =>
              Linking.openURL('https://policies.google.com/terms?hl=en-US')
            }
            title={'Terms of use'}
            icon={require('../assets/hand.png')}
          />
          <ButtonView
            onPress={() => navigation.navigate('WriteToUs')}
            title={'Write to us'}
            icon={require('../assets/write.png')}
          />
        </View>
      </SafeAreaView>
    </ScreenBg>
  );
};

const ButtonView = ({
  icon,
  title,
  onPress,
}: {
  icon: any;
  title: string;
  onPress: () => void;
}) => {
  return (
    <Pressable onPress={onPress} style={styles.btnContainer}>
      <Image source={icon} style={styles.btnIcon} />
      <Text style={styles.btnTitle}>{title}</Text>
    </Pressable>
  );
};

const {width} = Dimensions.get('window');
const darkBlue = '#12266A';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    flex: 1,
    color: COLORS.black,
    paddingHorizontal: 20,
    fontStyle: 'italic',
  },
  plusContainer: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    fontSize: 30,
    lineHeight: 30,
    color: COLORS.white,
  },
  infoContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 32,
    gap: 20,
    padding: 10,
    paddingVertical: 20,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  btnContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 32,
    gap: 12,
    width: width * 0.4,
    paddingVertical: 16,
    alignItems: 'center',
  },
  btnTitle: {
    fontSize: 16,
    color: COLORS.white,
  },
  btnIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  btnViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    flexWrap: 'wrap',
    gap: 20,
    marginTop: 20,
  },
  avatarImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    overflow: 'hidden',
    borderRadius: 100,
  },
  editIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
  name: {
    fontSize: 22,
    color: COLORS.white,
    fontWeight: 700,
    marginLeft: 16,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});

export default observer(GetInTouchScreen);
