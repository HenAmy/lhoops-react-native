import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';

const Intro = () => {
  return (
    <SafeAreaView className="h-full px-4" style={styles.container}>
      <View className="space-y-8">
        {/* Title */}
        <View className="space-y-2">
          <Text style={{ fontFamily: 'Bold', fontSize: 32 }} className="">
            Let's get started
          </Text>
          <Text style={{ fontFamily: 'Regular', fontSize: 18 }} className="">
            Pick a username you want to be recognized by, you can change it later if you like
          </Text>
        </View>

        {/* Text Fields */}
        <View className="gap-4">
          <View className="gap-1">
            <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
              Photo
            </Text>
            <TextInput className="border border-border rounded py-1 px-2" />
          </View>
          <View className="gap-1">
            <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
              Username
            </Text>
            <TextInput className="border border-border rounded py-1 px-2" />
          </View>
          <View className="gap-1">
            <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
              Gender
            </Text>
            <TextInput className="border border-border rounded py-1 px-2" />
          </View>
          <View className="gap-1">
            <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
              Age
            </Text>
            <TextInput className="border border-border rounded py-1 px-2" />
          </View>
        </View>
        {/* Actions */}
        <View className="shadow ">
          <Pressable className="bg-primary py-4 rounded">
            <Text style={{ fontFamily: 'Medium', fontSize: 16 }} className="mx-auto">
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
