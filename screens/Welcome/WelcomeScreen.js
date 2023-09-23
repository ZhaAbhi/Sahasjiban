import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text testID="title">Welcome to SahasJiban</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="continue"
        testID="button"
        style={{backgroundColor: 'red'}}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
