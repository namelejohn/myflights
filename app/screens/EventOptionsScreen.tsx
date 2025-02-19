import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenBg from '../components/ScreenBg.tsx';
import {useNavigation} from '@react-navigation/native';
import {eventData} from '../data/data.ts';
import {Event} from '../types';
import MyHeader from '../components/MyHeader.tsx';
import MainStore from '../stores/MainStore';
import {useStore} from '../stores/StoreContext.tsx';

interface MenuScreenProps {
  navigation: any;
}

const EventOptionsScreen: React.FC<MenuScreenProps> = props => {
  const store = useStore().productStore;
  const [showFavorites, setShowFavorites] = React.useState(false);

  const filterTopics = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <ScreenBg>
      <SafeAreaView edges={['top']} style={styles.mainContainer}>
        <MyHeader
          title={'Useful topics'}
          rightItem={
            <Pressable onPress={filterTopics}>
              <Image
                style={styles.heartIcon}
                source={
                  showFavorites
                    ? require('../assets/filled_heart.png')
                    : require('../assets/white_heart.png')
                }
              />
            </Pressable>
          }
        />
        <FlatList
          data={
            showFavorites
              ? eventData.filter(event => store.favorites.includes(event.id))
              : eventData
          }
          renderItem={({item}) => <ItemButton key={item.id} event={item} />}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.menuContainer}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Image
                source={require('../assets/no_topic.png')}
                style={styles.emptyIcon}
              />
              <Text style={styles.emptyText}>
                {'No topics yet, please back\nagain later'}
              </Text>
            </View>
          }
        />
      </SafeAreaView>
    </ScreenBg>
  );
};

const ItemButton = observer(({event}: {event: Event}) => {
  const store = useStore().productStore;
  const navigation: any = useNavigation();

  function handlePress() {
    navigation.navigate('EventDetail', {event: event});
  }

  return (
    <Pressable style={styles.menuItem} onPress={handlePress}>
      <Image source={event.image} style={styles.img} />
      <TouchableOpacity
        style={styles.favIconContainer}
        onPress={() => store.toggleFavorite(event.id)}>
        <Image
          source={
            store.favorites.includes(event.id)
              ? require('../assets/filled_heart.png')
              : require('../assets/white_heart.png')
          }
          style={styles.favIcon}
        />
      </TouchableOpacity>
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuTitle}>{event.title}</Text>
        <Text style={styles.menuSubTitle} numberOfLines={1}>
          {event.desc}
        </Text>
      </View>
    </Pressable>
  );
});

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 1,
    color: COLORS.white,
    textAlign: 'center',
  },
  menuContainer: {
    alignItems: 'center',
    paddingBottom: 80,
    paddingTop: 20,
  },
  menuItem: {
    width: '100%',
    alignItems: 'center',
  },
  menuText: {
    color: COLORS.white,
    fontWeight: 400,
    marginLeft: 4,
  },
  icon: {
    width: 90,
    height: 90,
  },
  iconContainer: {
    alignItems: 'flex-end',
    marginBottom: 60,
    marginRight: 20,
  },
  emptyContainer: {
    width: '100%',
    height: height * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  profileTitleContainer: {
    backgroundColor: COLORS.transparentBg,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
  },
  editBtn: {
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 12,
    marginBottom: 30,
    alignSelf: 'flex-end',
  },
  emptyText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 17,
    marginTop: 20,
  },
  goBasketContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  goBasketButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  goBasketTitle: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '700',
  },
  emptyText1: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 700,
    opacity: 0.5,
  },
  emptyText2: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 500,
    marginTop: 8,
  },
  emptyTextContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  menuItemContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  eventTextIcon: {
    width: 150,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -60,
    right: 0,
  },
  img: {
    width: 350,
    height: 165,
    borderRadius: 20,
    overflow: 'hidden',
  },
  menuTextContainer: {
    width: 350,
    paddingVertical: 12,
    backgroundColor: COLORS.secondary,
    bottom: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 12,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: COLORS.white,
    marginBottom: 6,
  },
  menuSubTitle: {
    color: '#999999',
    marginBottom: 6,
  },
  heartIcon: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
  },
  favIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  favIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  emptyIcon: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
});

export default observer(EventOptionsScreen);
