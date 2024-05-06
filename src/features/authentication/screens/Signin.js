import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Signin = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container} className="mx-4">
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-end' }}>
        {/* Container */}
        <View className="flex justify-center mb-5 space-y-6">
          <View className="space-y-2">
            <Text style={{ fontFamily: 'SemiBold', fontSize: 40 }} className="">
              Sign In
            </Text>
            {/* <View className="flex-row space-x-2">
              <Text style={{ fontFamily: 'Regular', fontSize: 16 }}>New user?</Text>
              <Pressable onPress={() => navigation.navigate('SignUp')}>
                <Text style={{ fontFamily: 'SemiBold', fontSize: 16 }} className=" text-primary">
                  Sign Up
                </Text>
              </Pressable>
            </View> */}
          </View>
          {/* Text Fields */}
          <View className="gap-4">
            {/* Email Address */}
            <View className="gap-1">
              <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
                Email address
              </Text>
              <TextInput className="border border-border rounded py-3 px-2" />
            </View>
            {/* Password */}
            <View className="gap-1">
              <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
                Password
              </Text>
              <TextInput className="border border-border rounded py-3 px-2" />
            </View>
          </View>
          {/* Actions */}
          <View className="space-y-2">
            <Pressable className="bg-primary px-10 py-4 rounded-lg">
              <Text style={{ fontFamily: 'Medium', fontSize: 16 }} className="mx-auto">
                Continue
              </Text>
            </Pressable>
            <Text style={{ fontFamily: 'Bold', fontSize: 16 }} className="mx-auto">
              or
            </Text>
            <Pressable className="flex-row items-center justify-center py-4 bg-white border rounded-lg space-x-2">
              <Image className="w-5 h-5" source={require('../assets/google-icon.png')} />
              <Text style={{ fontFamily: 'Medium', fontSize: 16 }} className="">
                Continue with Google
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    top: 20,
    // backgroundColor: 'red',
    // paddingHorizontal: 10,
    // marginHorizontal: 10,
  },
});
