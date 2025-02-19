import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddPointScreen from '../../screens/CreateFlight/AddPointScreen.tsx';
import AddDateDepartureScreen from '../../screens/CreateFlight/AddDateDepartureScreen.tsx';
import AddDateArriveScreen from '../../screens/CreateFlight/AddDateArriveScreen.tsx';
import AddCostScreen from '../../screens/CreateFlight/AddCostScreen.tsx';
import SuccessScreen from '../../screens/CreateFlight/SuccessScreen.tsx';

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'black',
        headerShown: false,
      }}>
      <Stack.Screen name="AddPoint" component={AddPointScreen} />
      <Stack.Screen
        name="AddDateDeparture"
        component={AddDateDepartureScreen}
      />
      <Stack.Screen name="AddDateArrive" component={AddDateArriveScreen} />
      <Stack.Screen name="AddCost" component={AddCostScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
};

export default MenuStack;
