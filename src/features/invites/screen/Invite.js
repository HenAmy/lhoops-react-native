import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Awesome from '@expo/vector-icons/FontAwesome5';

const Invite = () => {
  return (
    <SafeAreaView className="h-full px-4" style={styles.container}>
      <View className="flex-row items-center space-x-3">
        <Image
          className="w-20 h-20 rounded-full bg-red-300"
          source={require('../../onboarding/assets/logo.svg')}
        />
        <View className="">
          <Text className="" style={{ fontFamily: 'SemiBold', fontSize: 18 }}>
            Marrakesh Foodie
          </Text>
          <View className="flex-row items-center space-x-2">
            <Text className="" style={{ fontFamily: 'Regular', fontSize: 14 }}>
              Invite from
            </Text>
            <Image
              className="w-8 h-8 rounded-full bg-red-300"
              source={require('../../onboarding/assets/logo.svg')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Invite;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
