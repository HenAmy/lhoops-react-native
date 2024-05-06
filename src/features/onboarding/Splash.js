import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import React from 'react';
// import { useFonts } from "expo-font";

const Splash = ({ navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('Onboarding')}
      className="bg-secondary h-full flex justify-center items-center"
    >
      <Image className="w-28 h-28" source={require('./assets/logo.svg')} />
    </Pressable>
  );
};

export default Splash;

// setTimeout(() => {
//   console.log('Hello, World!');
// }, 2000);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141517',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // flex: 1,
    width: '100%',
  },
});
