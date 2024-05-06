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
import Ionicons from '@expo/vector-icons/Ionicons';
import Awesome from '@expo/vector-icons/FontAwesome5';

const Chat = () => {
  return (
    <SafeAreaView className="h-full px-4" style={styles.container}>
      {/* Card */}
      <View className="mt-10">
        <View className=" flex-row items-center space-x-4 ">
          <Image
            className="w-16 h-16 rounded-full bg-red-300"
            source={require('../../onboarding/assets/logo.svg')}
          />
          <View className="space-y-1">
            <Text style={{ fontFamily: 'SemiBold', fontSize: 18 }}>Marrakesh Foodie</Text>
            <View className="flex-row">
              <Text style={{ fontFamily: 'Medium', fontSize: 16 }}>You: </Text>
              <Text style={{ fontFamily: 'Regular', fontSize: 16 }}>Where did it happen?</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 9999,
    borderWidth: 5,
    borderColor: '#fff',
  },
});
