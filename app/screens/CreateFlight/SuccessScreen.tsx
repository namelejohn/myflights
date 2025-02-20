import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenBg from '../../components/ScreenBg.tsx';
import COLORS from '../../styles/colors.ts';
import {BORDER_RADIUS} from '../../styles/constants.ts';
import MyButton from '../../components/MyButton.tsx';
import {useStore} from '../../stores/StoreContext.tsx';

const SuccessScreen = ({navigation}: any) => {
  const {loadProducts} = useStore().productStore;
  function handleConfirm() {
    loadProducts();
    navigation.popToTop();
    navigation.navigate('MenuTab');
  }

  return (
    <ScreenBg>
      <SafeAreaView edges={['top']} style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{'Your flight\nsuccessfully added'}</Text>
          <Image
            source={require('../../assets/success.png')}
            style={styles.icon}
          />
        </View>
      </SafeAreaView>
      <MyButton
        onPress={handleConfirm}
        title={'Close'}
        containerStyle={{marginBottom: 120}}
      />
    </ScreenBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 99999,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 500,
    textAlign: 'center',
    color: COLORS.white,
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 800,
    textAlign: 'center',
    color: COLORS.white,
    marginTop: 20,
    marginBottom: 20,
  },
  bottomTitle: {
    fontSize: 15,
    fontWeight: 600,
    textAlign: 'center',
    color: COLORS.white,
    marginTop: 20,
    opacity: 0.7,
  },
  icon: {
    width: 200,
    height: 250,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginBottom: 40,
    marginTop: 10,
  },
  contentContainer: {
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 50,
  },
  linearContainer: {
    alignItems: 'center',
  },
  imgContainer: {
    alignSelf: 'center',
  },
  catImg: {
    width: 400,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -60,
    left: -180,
    opacity: 0.3,
    zIndex: 0,
  },
  qrContainer: {
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default SuccessScreen;
