import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './login';
import ProfileScreen from './profile';
import Calculator from './calculator';
import ContactsScreen from './contacts';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Calculator" component={Calculator} />
        <Tab.Screen name="contacts" component={ContactsScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
