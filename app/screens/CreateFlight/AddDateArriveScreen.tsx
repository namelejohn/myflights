import React, {useEffect, useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenBg from '../../components/ScreenBg.tsx';
import MyHeader from '../../components/MyHeader.tsx';
import COLORS from '../../styles/colors.ts';
import CustomInput from '../../components/CustomInput.tsx';
import DateTimePicker from '@react-native-community/datetimepicker';
import {observer} from 'mobx-react';
import {useStore} from '../../stores/StoreContext.tsx';
import MyButton from '../../components/MyButton.tsx';

const AddDateArriveScreen = ({navigation}: any) => {
  const {productStore: mainStore} = useStore();
  const [showArrivalDatePicker, setShowArrivalDatePicker] = useState(false);
  const [showArrivalTimePicker, setShowArrivalTimePicker] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setIsComplete(
      !!mainStore.arrivalDate &&
        !!mainStore.arrivalTime &&
        !!mainStore.flightDuration,
    );
  }, [mainStore.arrivalDate, mainStore.arrivalTime, mainStore.flightDuration]);

  const handleArrivalDateChange = (event: any, selectedDate?: Date) => {
    setShowArrivalDatePicker(false);
    if (selectedDate) {
      mainStore.setArrivalDate(selectedDate);
    }
  };

  const handleArrivalTimeChange = (event: any, selectedTime?: Date) => {
    setShowArrivalTimePicker(false);
    if (selectedTime) {
      mainStore.setArrivalTime(selectedTime);
    }
  };

  const formatDate = (date: Date | null) =>
    date?.toLocaleDateString('en-GB') || '';

  const formatTime = (time: Date | null) =>
    time?.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'}) ||
    '';

  return (
    <ScreenBg>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <MyHeader showBack title={'Reservation'} />

        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Pressable onPress={() => setShowArrivalDatePicker(true)}>
            <CustomInput
              label={'Date of arrive'}
              placeholder="DD.MM.YY"
              style={styles.input}
              value={formatDate(mainStore.arrivalDate)}
              editable={false}
              icon={require('../../assets/calendar.png')}
              clear={() => mainStore.setArrivalDate(null)}
            />
          </Pressable>

          <Pressable onPress={() => setShowArrivalTimePicker(true)}>
            <CustomInput
              label={'Time of arrive'}
              placeholder="HH:MM"
              style={styles.input}
              value={formatTime(mainStore.arrivalTime)}
              editable={false}
              icon={require('../../assets/clock.png')}
              clear={() => mainStore.setArrivalTime(null)}
            />
          </Pressable>

          <CustomInput
            label={'Duration of flight'}
            placeholder="00:00"
            style={styles.input}
            value={mainStore.flightDuration}
            onChangeText={mainStore.setFlightDuration}
            clear={() => mainStore.setFlightDuration('')}
          />

          {showArrivalDatePicker && (
            <DateTimePicker
              value={mainStore.arrivalDate || new Date()}
              mode="date"
              display="spinner"
              onChange={handleArrivalDateChange}
            />
          )}

          {showArrivalTimePicker && (
            <DateTimePicker
              value={mainStore.arrivalTime || new Date()}
              mode="time"
              display="spinner"
              onChange={handleArrivalTimeChange}
            />
          )}
        </ScrollView>
      </SafeAreaView>

      <MyButton
        isDisabled={!isComplete}
        onPress={() => navigation.navigate('AddCost')}
        title={'Next'}
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
    backgroundColor: ITEM_COLOR,
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: TEXT_COLOR,
    marginBottom: 16,
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

export default observer(AddDateArriveScreen);
