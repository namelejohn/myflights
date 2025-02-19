import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import ScreenBg from '../components/ScreenBg.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Event} from '../types';
import MyHeader from '../components/MyHeader.tsx';

interface MenuScreenProps {
  navigation: any;
  route: any;
}

const eventImages: any = {
  1: require('../assets/event1.png'),
  2: require('../assets/event2.png'),
  3: require('../assets/event3.png'),
  4: require('../assets/event4.png'),
  5: require('../assets/event5.png'),
};

const EventDetailsScreen: React.FC<MenuScreenProps> = props => {
  const {params} = props.route;
  // @ts-ignore
  const event: Event = params?.event;

  return (
    <ScreenBg>
      <SafeAreaView edges={['top']} style={styles.mainContainer}>
        <MyHeader showBack title={'Topic'} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{paddingBottom: 100}}>
          <View style={{alignItems: 'center', paddingHorizontal: 16}}>
            <Image
              source={eventImages[event.image]}
              style={{width: '95%', height: 210, borderRadius: 16}}
            />
            <View style={styles.titleBg}>
              <Text style={styles.title}>{event.title}</Text>
            </View>
            <Text style={styles.desc}>{event.desc}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScreenBg>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  backBtn: {
    paddingTop: 60,
    paddingLeft: 20,
  },
  titleBg: {
    paddingVertical: 5,
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 500,
    color: COLORS.white,
  },
  desc: {
    color: COLORS.white,
  },
  date: {
    color: COLORS.white,
    marginLeft: 4,
  },
});

export default observer(EventDetailsScreen);
