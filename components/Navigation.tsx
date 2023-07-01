import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Gallery } from './Screens/Gallery';
import { Favorite } from './Screens/Favorite';
import { FSImage } from './Screens/FSImage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Gallery" component={Gallery} />
        <Tab.Screen name="Favorite" component={Favorite} />
      </Tab.Navigator>
    );
}

export const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="FSImage" component={FSImage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}