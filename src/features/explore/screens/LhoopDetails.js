import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Awesome from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

const LhoopDetails = () => {
  return (
    <SafeAreaView className="h-full mx-4" style={styles.container}>
      {/* Container */}
      <ScrollView className="space-y-8">
        <View className="space-y-1">
          {/* Image & Title */}
          {/* Image */}
          {/* <Image
            className="w-20 h-20 rounded-full bg-red-300"
            source={require('../../onboarding/assets/logo.svg')}
          /> */}
          {/* <View className="space-y-4 ">
          </View> */}
          <View className="flex-row  justify-between ">
            <View className="space-y-2 ">
              {/* Title */}
              <View className="">
                <Text className="" style={{ fontFamily: 'SemiBold', fontSize: 18 }}>
                  Marrakesh Foodie
                </Text>
              </View>
              {/* Location */}
              <View className="rounded-full border px-4 py-1 flex-row space-x-2 w-">
                <Awesome name="map-pin" size={16} color="black" />
                <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
                  Ashaley Botwe, Ghana
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Ionicons name="add-circle-outline" size={56} color="#F4B41A" />
            </TouchableOpacity>
          </View>
          {/* Chips */}
          <View className="flex-row flex-wrap gap-2">
            {/* Type */}
            <View className="rounded-full border px-4 py-1 flex-row space-x-2">
              <Awesome name="lock-open" size={16} color="black" />
              <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
                Open
              </Text>
            </View>
            {/* Age Range */}
            <View className="rounded-full border px-4 py-1 flex-row space-x-2">
              <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
                23 — 35 years
              </Text>
            </View>
            {/* Female */}
            <View className="rounded-full border px-4 py-1 flex-row space-x-2">
              <Ionicons name="male-female" size={16} color="black" />
              <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
                Female
              </Text>
            </View>
          </View>
        </View>

        <View className="bg-border p-[0.8px]"></View>

        {/* Members & Description */}
        <View className="space-y-2">
          <Text style={{ fontFamily: 'Regular', fontSize: 14 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          </Text>
          <View className="flex-row items-center space-x-1 ">
            {/* Members Images */}
            <View className="flex-row ">
              <Image
                style={styles.avatar}
                className="w-12 h-12"
                source={require('../assets/single-logo.png')}
              />
              <Image
                style={styles.avatar}
                className="-ml-5"
                source={require('../assets/single-logo.png')}
              />
              <Image
                style={styles.avatar}
                className="-ml-5"
                source={require('../assets/single-logo.png')}
              />
              <Image
                style={styles.avatar}
                className="-ml-5"
                source={require('../assets/single-logo.png')}
              />
            </View>
            {/* Members Count */}
            <View className="flex-row space-x-2">
              <Text style={{ fontFamily: 'SemiBold', fontSize: 18 }}>15</Text>
              <Text style={{ fontFamily: 'Regular', fontSize: 16 }}>members</Text>
            </View>
          </View>
        </View>

        <View className="bg-border p-[0.8px]"></View>

        <Text style={{ fontFamily: 'SemiBold', fontSize: 18 }}>House Rules</Text>
        <Text
          className="px-4 py-3 rounded-lg bg-disabled text-justify"
          style={{ fontFamily: 'Regular', fontSize: 14 }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
        </Text>
        <Text
          className="px-4 py-3 rounded-lg bg-disabled text-justify"
          style={{ fontFamily: 'Regular', fontSize: 14 }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LhoopDetails;

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
