import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Screens/Home';
import { Cart } from './Screens/Cart';
import { SinglePost } from './Screens/SinglePost';
import { Profile } from './Screens/Profile';
import { TestProducts } from './Screens/TestProducts';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="TestProducts" component={TestProducts} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
}

export const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="SinglePost" component={SinglePost} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}