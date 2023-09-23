import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import WelcomeScreen from './screens/Welcome/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
