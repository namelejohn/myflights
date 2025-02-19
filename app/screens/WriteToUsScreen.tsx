import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenBg from '../components/ScreenBg.tsx';
import CustomInput from '../components/CustomInput.tsx';
import MyHeader from '../components/MyHeader.tsx';
import MyButton from '../components/MyButton.tsx';

const WriteToUsScreen = ({navigation}: any) => {
  const [isActive, setIsActive] = useState(false);
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (phone && comment) {
      setIsActive(true);
    }
  }, [phone, comment]);

  function handleSend() {
    navigation.goBack();
  }

  return (
    <ScreenBg>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <MyHeader showBack title={'Write to us'} />

        <View style={{paddingHorizontal: 20}}>
          <CustomInput
            label={'Your phone number'}
            style={styles.input}
            placeholder="Text"
            value={phone}
            onChangeText={setPhone}
            clear={() => setPhone('')}
          />
          <CustomInput
            label={'Comment'}
            placeholder="Text"
            value={comment}
            onChangeText={setComment}
            clear={() => setComment('')}
            multiline
            inputStyle={{height: 120, textAlignVertical: 'top'}}
          />
        </View>
      </SafeAreaView>
      <MyButton
        isDisabled={!isActive}
        onPress={handleSend}
        title={'Save'}
        containerStyle={{marginBottom: 120}}
      />
    </ScreenBg>
  );
};

const {width} = Dimensions.get('window');
const darkBlue = '#12266A';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
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

export default WriteToUsScreen;
