import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';

const MyStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="Welcome" component={WelcomeScreen} />
      <MyStack.Screen name="Home" component={HomeScreen} />
    </MyStack.Navigator>
  );
};

export default AppNavigator;
