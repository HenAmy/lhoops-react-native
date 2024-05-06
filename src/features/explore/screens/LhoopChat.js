import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const LhoopChat = () => {
  return (
    <ScrollView>
      {/* Recipient */}
      <View className="w-4/5">
        <View className="flex-row items-center space-x-3">
          <Image
            className="w-10 h-10 rounded-full bg-red-300"
            source={require('../../onboarding/assets/logo.svg')}
          />
          <View className="flex-1 space-y-1">
            <View className="bg-white py-3 px-3 flex-1 rounded-lg space-y-3">
              <Text style={{ fontFamily: 'SemiBold', fontSize: 16 }}>$User1</Text>
              <Text style={{ fontFamily: 'Regular', fontSize: 14 }}>Message1</Text>
            </View>
            <Text style={{ fontFamily: 'Regular', fontSize: 10 }} className="text-right">
              10:30 pm
            </Text>
          </View>
        </View>
      </View>

      {/* Sender */}
      <View className="w-4/5">
        <View className="flex-row items-center space-x-3">
          <Image
            className="w-10 h-10 rounded-full bg-red-300"
            source={require('../../onboarding/assets/logo.svg')}
          />
          <View className="flex-1 space-y-1">
            <View className="bg-white py-3 px-3 flex-1 rounded-lg space-y-3">
              <Text style={{ fontFamily: 'SemiBold', fontSize: 16 }}>$User1</Text>
              <Text style={{ fontFamily: 'Regular', fontSize: 14 }}>Message1</Text>
            </View>
            <Text style={{ fontFamily: 'Regular', fontSize: 10 }} className="text-right">
              10:30 pm
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LhoopChat;

const styles = StyleSheet.create({});
