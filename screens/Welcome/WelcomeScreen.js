import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <Text testID="title">Welcome to SahasJiban</Text>
      <Button title="continue" testID='button' style={{backgroundColor: 'red'}} />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
