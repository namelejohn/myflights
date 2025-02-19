import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, StyleSheet, Dimensions} from 'react-native';
import ProfileStack from './stacks/ProfileStack.tsx';
import MenuStack from './stacks/MenuStack.tsx';
import ProductListScreen from '../screens/ProductListScreen.tsx';
import EventsStack from './stacks/EventsStack.tsx';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#3967FF',
          tabBarInactiveTintColor: '#999999',
          tabBarStyle: {
            height: 65,
            paddingTop: 4,
            backgroundColor: '#0A1E4D',
            borderTopWidth: 0,
            position: 'absolute',
            left: 50,
            right: 50,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
          },
          tabBarLabelStyle: {
            display: 'none',
          },
        }}>
        <Tab.Screen
          name="MenuTab"
          component={ProductListScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/tabs/pizza.png')}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: color,
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="AddTab"
          component={MenuStack}
          options={{
            tabBarIcon: () => (
              <View style={styles.centralButton}>
                <Image
                  source={require('../assets/tabs/plus.png')}
                  style={{width: 60, height: 60}}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="ReserveTab"
          component={EventsStack}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/tabs/reserve.png')}
                style={{width: 24, height: 24, tintColor: color}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="ProfileTab"
          component={ProfileStack}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/tabs/contact.png')}
                style={{width: 24, height: 24, tintColor: color}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  centralButton: {
    position: 'absolute',
    top: -30,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default AppNavigator;
