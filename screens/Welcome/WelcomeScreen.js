import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text testID="title">Welcome to SahasJiban</Text>
      <Button
        onPress={() => navigation.navigate('Home', {item: 'You are awesome'})}
        title="continue"
        testID="button"
        style={{backgroundColor: 'red'}}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
