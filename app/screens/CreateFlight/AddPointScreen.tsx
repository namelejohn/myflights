import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenBg from '../../components/ScreenBg.tsx';
import MyHeader from '../../components/MyHeader.tsx';
import COLORS from '../../styles/colors.ts';
import CustomInput from '../../components/CustomInput.tsx';
import Filter from '../../components/Filter.tsx';
import Counter from '../../components/Counter.tsx';
import {useStore} from '../../stores/StoreContext.tsx';
import MyButton from '../../components/MyButton.tsx';
import {observer} from 'mobx-react';
import {filterData} from '../../data/data.ts';

const AddPointScreen = ({navigation}: any) => {
  const {productStore: mainStore} = useStore();
  const [isComplete, setIsComplete] = useState(false);

  // Фильтруем массив, исключая "All flights"
  const filteredFilters = filterData.filter(f => f.name !== 'All flights');

  useEffect(() => {
    if (
      mainStore.pointA &&
      mainStore.pointB &&
      mainStore.selectedFilter &&
      mainStore.passengersCount > 0
    ) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [
    mainStore.pointA,
    mainStore.pointB,
    mainStore.selectedFilter,
    mainStore.passengersCount,
  ]);

  const handleConfirm = () => {
    navigation.navigate('AddDateDeparture');
  };

  return (
    <ScreenBg>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <MyHeader showBack title={'Add flight'} />

        <View style={styles.contentContainer}>
          <CustomInput
            label={'The point of departure'}
            placeholder="Text"
            style={styles.input}
            value={mainStore.pointA}
            onChangeText={mainStore.setPointA}
            clear={() => mainStore.setPointA('')}
          />
          <CustomInput
            label={'Point of arrival'}
            placeholder="Text"
            style={styles.input}
            value={mainStore.pointB}
            onChangeText={mainStore.setPointB}
            clear={() => mainStore.setPointB('')}
          />
          <View style={styles.counterContainer}>
            <Text style={styles.sectionTitle}>Passengers</Text>
            <Counter
              value={mainStore.passengersCount}
              plus={mainStore.handlePlusPassengers}
              minus={mainStore.handleMinusPassengers}
            />
          </View>
          <Text style={styles.sectionTitle}>Class</Text>
          <Filter
            activeFilter={mainStore.selectedFilter}
            onSelect={mainStore.setSelectedFilter}
            filters={filteredFilters}
          />
        </View>
      </SafeAreaView>
      <MyButton
        isDisabled={!isComplete}
        onPress={handleConfirm}
        title={'Next'}
        containerStyle={{marginBottom: 120}}
      />
    </ScreenBg>
  );
};

export default observer(AddPointScreen);

const ITEM_COLOR = '#932323';
const SELECTED_COLOR = '#fff';

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
    backgroundColor: ITEM_COLOR,
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: COLORS.textColor,
    marginBottom: 16,
  },
  sectionTitle: {
    color: COLORS.textColor,
    fontSize: 16,
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
    color: COLORS.textColor,
    fontSize: 20,
    fontWeight: '600',
  },
  dateDaySelected: {
    color: COLORS.black,
  },
  dateMonth: {
    color: COLORS.textColor,
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
  passengers: {
    fontSize: 16,
    color: COLORS.textColor,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
