import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import Awesome from '@expo/vector-icons/FontAwesome5';

const NewGroup = () => {
  return (
    <SafeAreaView className="h-full px-4" style={styles.container}>
      <Text>Lhoop Swiper</Text>
    </SafeAreaView>
  );
};

export default NewGroup;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
