import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Awesome from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import lhoopsList from '../assets/data.json';
import { useNavigation } from '@react-navigation/native';

const Explore = ({ navigation }) => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView className="h-full mx-4" style={styles.container}>
      <FlatList
        data={lhoopsList}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigate('LhoopChat')}
              className="space-y-8 py-10"
              key={item.id}
            >
              <View className="space-y-4">
                {/* <Image
                  className="w-20 h-20 rounded-full bg-red-300"
                  source={require('../../onboarding/assets/logo.svg')}
                /> */}
                <View>
                  <Text style={{ fontFamily: 'SemiBold', fontSize: 18 }}>{item.name}</Text>
                  <Text style={{ fontFamily: 'Regular', fontSize: 16 }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor
                  </Text>
                </View>
              </View>
              {/* Chips */}
              <View className="flex-row flex-wrap gap-2">
                {/* Location */}
                <View className="rounded-full border px-4 py-1 flex-row space-x-2">
                  <Awesome name="map-pin" size={16} color="black" />
                  <Text style={{ fontFamily: 'Medium', fontSize: 14 }} className="">
                    Ashaley Botwe, Ghana
                  </Text>
                </View>
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
              {/* Members */}
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
                  <Text style={{ fontFamily: 'SemiBold', fontSize: 18 }}>11/15</Text>
                  <Text style={{ fontFamily: 'Regular', fontSize: 16 }}>members</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={<View className="bg-border p-[0.8px]"></View>}
      />
    </SafeAreaView>
  );
};

export default Explore;

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
