import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenBg from '../../components/ScreenBg.tsx';
import MyHeader from '../../components/MyHeader.tsx';
import COLORS from '../../styles/colors.ts';
import CustomInput from '../../components/CustomInput.tsx';
import MyButton from '../../components/MyButton.tsx';
import {observer} from 'mobx-react';
import {useStore} from '../../stores/StoreContext.tsx';

const AddCostScreen = ({navigation}: any) => {
  const {productStore: mainStore} = useStore();
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setIsComplete(!!mainStore.flightCost && !!mainStore.comment);
  }, [mainStore.flightCost, mainStore.comment]);

  const handleConfirm = () => {
    mainStore.createProduct();
    navigation.navigate('Success');
  };

  return (
    <ScreenBg>
      <SafeAreaView edges={['left', 'right']} style={styles.safeArea}>
        <MyHeader showBack title={'Reservation'} />

        <ScrollView contentContainerStyle={styles.contentContainer}>
          <CustomInput
            label={'Flight cost'}
            placeholder="Enter amount"
            value={mainStore.flightCost}
            onChangeText={mainStore.setFlightCost}
            keyboardType="numeric"
            clear={() => mainStore.setFlightCost('')}
          />
          <CustomInput
            label={'Comment'}
            placeholder="Add comments"
            inputStyle={styles.input}
            value={mainStore.comment}
            onChangeText={mainStore.setComment}
            multiline={true}
            clear={() => mainStore.setComment('')}
          />
        </ScrollView>
      </SafeAreaView>
      <MyButton
        isDisabled={!isComplete}
        onPress={handleConfirm}
        title={'Save'}
        containerStyle={{marginBottom: 120}}
      />
    </ScreenBg>
  );
};

const ITEM_COLOR = '#932323';
const SELECTED_COLOR = '#fff';
const TEXT_COLOR = '#fff';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 40,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    height: 120,
    textAlignVertical: 'top',
  },
  sectionTitle: {
    color: TEXT_COLOR,
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  dateContainer: {
    marginBottom: 20,
  },
  dateItem: {
    width: 70,
    height: 70,
    backgroundColor: ITEM_COLOR,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  dateItemSelected: {
    backgroundColor: SELECTED_COLOR,
  },
  dateDay: {
    color: TEXT_COLOR,
    fontSize: 20,
    fontWeight: '600',
  },
  dateDaySelected: {
    color: COLORS.black,
  },
  dateMonth: {
    color: TEXT_COLOR,
    fontSize: 12,
  },
  dateMonthSelected: {
    color: COLORS.black,
  },
  timesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  timeSlot: {
    width: 80,
    paddingVertical: 10,
    backgroundColor: ITEM_COLOR,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  timeSlotSelected: {
    backgroundColor: SELECTED_COLOR,
  },
  timeSlotText: {
    fontSize: 16,
    color: '#fff',
  },
  timeSlotTextSelected: {
    fontWeight: '700',
    color: COLORS.black,
  },
});

export default observer(AddCostScreen);
