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
import Ionicons from '@expo/vector-icons/Ionicons';

const Profile = () => {
  return (
    <SafeAreaView className="h-full px-4" style={styles.container}>
      <View className="py-10 space-y-6">
        <View className="space-x-2 flex-row">
          <Image
            className="w-20 h-20 rounded-full bg-red-300"
            source={require('../../onboarding/assets/logo.svg')}
          />
          <View className="justify-center space-y-1">
            <Text style={{ fontFamily: 'SemiBold', fontSize: 18 }}>@wendy-wu</Text>
            <Text style={{ fontFamily: 'Regular', fontSize: 16 }}>26 years</Text>
          </View>
        </View>
        {/* Chips */}
        <View className="flex-row space-x-2">
          {/* Location */}
          <View className="rounded-full border px-4 py-1 flex-row space-x-2">
            <Awesome name="map-pin" size={16} color="black" />
            <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
              Ghana
            </Text>
          </View>
          {/* Gender */}
          <View className="rounded-full border px-4 py-1 flex-row space-x-2">
            <Ionicons name="male-female" size={16} color="black" />
            <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
              Female
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
