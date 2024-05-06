import {
  Button,
  Text,
  View,
  Pressable,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import Awesome from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { Image } from 'expo-image';
import { SwiperFlatListWithGestureHandler } from 'react-native-swiper-flatlist/WithGestureHandler';

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container} className="">
      <SwiperFlatListWithGestureHandler>
        {/* One */}
        <View style={styles.child} className="">
          <Image className="h-full" source={require('./assets/onboarding.svg')} />
          {/* Container */}
          <View className="absolute h-full w-full flex justify-center items-center">
            {/* Logo */}
            <View className="flex flex-row items-center gap-2 mb-10">
              <Image className="w-12 h-12" source={require('./assets/logo.svg')} />
              <Text style={{ fontFamily: 'SemiBold', fontSize: 24 }} className="text-xl">
                lhoops
              </Text>
            </View>
            {/* Hero Text */}
            <Text style={{ fontFamily: 'SemiBold', fontSize: 56 }} className="text-center mb-10 ">
              lhoops is in BETA.{' '}
            </Text>
            {/* Button */}
            <Pressable
              onPress={() => {
                console.log('Button pressed');
              }}
              className="px-10 py-4 rounded flex-row space-x-3 items-center"
            >
              <Text style={{ fontFamily: 'Medium', fontSize: 20 }} className="">
                Swipe
              </Text>
              <Awesome name="long-arrow-alt-right" size={24} color="black" />
            </Pressable>
          </View>
        </View>

        {/* Two */}
        <View style={styles.child} className="">
          <Image className="h-full" source={require('./assets/onboarding.svg')} />
          {/* Container */}
          <View className="absolute h-full w-full flex justify-center items-center">
            {/* Logo */}
            <View className="flex flex-row items-center gap-2 mb-10">
              <Image className="w-12 h-12" source={require('./assets/logo.svg')} />
              <Text style={{ fontFamily: 'SemiBold', fontSize: 24 }} className="text-xl">
                lhoops
              </Text>
            </View>
            {/* Hero Text */}
            <Text style={{ fontFamily: 'SemiBold', fontSize: 56 }} className="text-center mb-10 ">
              lhoops is in BETA.
            </Text>
            {/* Button */}
            <Pressable
              onPress={() => {
                console.log('Button pressed');
              }}
              className="px-10 py-4 rounded flex-row space-x-3 items-center"
            >
              <Text style={{ fontFamily: 'Medium', fontSize: 20 }} className="">
                Swipe
              </Text>
              <Awesome name="long-arrow-alt-right" size={24} color="black" />
            </Pressable>
          </View>
        </View>

        {/* Three */}
        <View style={styles.child} className="">
          <Image className="h-full" source={require('./assets/onboarding.svg')} />
          {/* Container */}
          <View className="absolute h-full w-full flex justify-center items-center">
            {/* Logo */}
            <View className="flex flex-row items-center gap-2 mb-10">
              <Image className="w-12 h-12" source={require('./assets/logo.svg')} />
              <Text style={{ fontFamily: 'SemiBold', fontSize: 24 }} className="text-xl">
                lhoops
              </Text>
            </View>
            {/* Hero Text */}
            <Text style={{ fontFamily: 'SemiBold', fontSize: 56 }} className="text-center mb-10 ">
              lhoops is in BETA.
            </Text>
            {/* Button */}
            <Pressable
              onPress={() => {
                console.log('Button pressed');
              }}
              className="px-10 py-4 rounded flex-row space-x-3 items-center"
            >
              <Text style={{ fontFamily: 'Medium', fontSize: 20 }} className="">
                Swipe
              </Text>
              <Awesome name="long-arrow-alt-right" size={24} color="black" />
            </Pressable>
          </View>
        </View>

        {/* Four */}
        <View style={styles.child} className="">
          <Image className="h-full" source={require('./assets/onboarding.svg')} />
          {/* Container */}
          <View className="absolute h-full w-full flex justify-center items-center">
            {/* Logo */}
            <View className="flex flex-row items-center gap-2 mb-10">
              <Image className="w-12 h-12" source={require('./assets/logo.svg')} />
              <Text style={{ fontFamily: 'SemiBold', fontSize: 24 }} className="text-xl">
                lhoops
              </Text>
            </View>
            {/* Hero Text */}
            <Text style={{ fontFamily: 'SemiBold', fontSize: 56 }} className="text-center mb-10 ">
              lhoops is in BETA.
            </Text>
            {/* Button */}
            <Pressable
              onPress={() => {
                console.log('Button pressed');
              }}
              className="bg-primary px-10 py-4 rounded"
            >
              <Text style={{ fontFamily: 'Medium', fontSize: 16 }} className="">
                Get Started
              </Text>
            </Pressable>
          </View>
        </View>
      </SwiperFlatListWithGestureHandler>
    </SafeAreaView>
  );
};

export default Onboarding;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  child: {
    width,
    justifyContent: 'center',
  },
});
