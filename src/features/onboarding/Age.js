import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Platform,
  Pressable,
} from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Awesome from '@expo/vector-icons/FontAwesome5';

const Age = () => {
  return (
    <SafeAreaView style={styles.container} className="mx-4 ">
      {/* Container */}
      <KeyboardAwareScrollView
        contentContainerStyle={{
          justifyContent: 'flex-between',
        }}
      >
        <View className="space-y-5 flex-1">
          {/* Title */}
          <View className="space-y-2">
            <Text style={{ fontFamily: 'SemiBold', fontSize: 30 }} className="">
              Let's get started
            </Text>
            <Text style={{ fontFamily: 'Regular', fontSize: 16 }} className="">
              Pick a username you want to be recognized by, you can change it later if you like
            </Text>
          </View>

          <View className="flex-1 justify-between">
            {/* Text Fields */}
            <View className="space-y-4">
              {/* Username */}
              <View className="gap-1">
                <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
                  Username
                </Text>
                <TextInput
                  style={styles.textInput}
                  className="border border-border rounded bg-white"
                />
              </View>
              {/* Gender */}
              <View className="gap-1">
                <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
                  Gender
                </Text>
                <TextInput
                  style={styles.textInput}
                  className="border border-border rounded bg-white"
                />
              </View>
              {/* Age */}
              <View className="gap-1">
                <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
                  Age
                </Text>
                <TextInput
                  style={styles.textInput}
                  className="border border-border rounded bg-white"
                />
              </View>
              {/* Action */}
              <View className="flex-row justify-end">
                {/* <Pressable className="bg-primary w-1/2 px-8 py-4 space-x-6 items-center justify-between rounded-lg flex-row -mr-3">
                    <Text style={{ fontFamily: 'Medium', fontSize: 16 }} className="">
                      Continue
                    </Text>
                    <Awesome name="chevron-right" size={18} color="black" />
                  </Pressable> */}
                <Pressable className="bg-primary w-full p-4 rounded-lg">
                  <Text style={{ fontFamily: 'Medium', fontSize: 16 }} className="mx-auto">
                    Continue
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      {/* <View className="h-full">
      </View> */}
      {/* <KeyboardAwareScrollView contentContainerStyle={{ justifyContent: 'flex-between' }}>
        </KeyboardAwareScrollView> */}
    </SafeAreaView>
  );
};

export default Age;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : 0,
    paddingTop: StatusBar.currentHeight,
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
