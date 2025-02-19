import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GetInTouchScreen from '../../screens/GetInTouchScreen';
import WriteToUsScreen from '../../screens/WriteToUsScreen.tsx';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'black',
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={GetInTouchScreen} />
      <Stack.Screen name="WriteToUs" component={WriteToUsScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
