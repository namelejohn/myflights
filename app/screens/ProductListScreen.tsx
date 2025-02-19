import React, {useCallback, useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Product} from '../types';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductCard from '../components/ProductItemView.tsx';
import ScreenBg from '../components/ScreenBg.tsx';
import Filter from '../components/Filter.tsx';
import MyHeader from '../components/MyHeader.tsx';
import {filterData} from '../data/data.ts';
import {useFocusEffect} from '@react-navigation/native';

interface HomeScreenProps {
  navigation: any;
}

function ListEmptyView() {
  return (
    <View style={styles.emptyContainer}>
      <Image source={require('../assets/empty.png')} style={styles.emptyIcon} />
      <Text style={styles.emptyTitle}>No flights yet, add something</Text>
    </View>
  );
}

const ProductListScreen: React.FC<HomeScreenProps> = props => {
  const {productStore} = useStore();
  const {filteredList, activeFilter, setFilter, loadProducts} = productStore;

  useFocusEffect(
    useCallback(() => {
      loadProducts();
    }, []),
  );

  const renderItem = ({item}: {item: Product}) => <ProductCard item={item} />;
  return (
    <ScreenBg>
      <SafeAreaView edges={['left', 'right']} style={styles.mainContainer}>
        <MyHeader title={'My flights'} />
        <View>
          <Filter
            filters={filterData}
            activeFilter={activeFilter}
            onSelect={setFilter}
          />
        </View>
        <FlatList
          data={filteredList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<ListEmptyView />}
        />
      </SafeAreaView>
    </ScreenBg>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
  },
  container: {
    paddingTop: 10,
    paddingBottom: 400,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    color: 'gray',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#5C0DAC',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  columnContainer: {
    justifyContent: 'space-evenly',
  },
  filterText: {
    fontSize: 16,
    lineHeight: 16,
    color: COLORS.white,
    fontWeight: '600',
    margin: 20,
  },
  headerImgContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  cartBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  cartBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    marginLeft: 6,
  },
  cartBtnWrapContainer: {
    marginRight: 8,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  cartIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  iconContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 65,
    padding: 6,
    marginRight: 6,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  rightItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    bottom: -2,
    right: -4,
    borderRadius: 60,
    backgroundColor: COLORS.white,
    padding: 1,
    paddingHorizontal: 4,
  },
  badge: {
    color: COLORS.black,
    fontSize: 10,
  },
  emptyTitle: {
    color: COLORS.white,
    fontSize: 17,
  },
  emptyIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  emptyContainer: {
    alignItems: 'center',
  },
});

export default observer(ProductListScreen);
