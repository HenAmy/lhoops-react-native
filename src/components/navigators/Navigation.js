import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import Awesome from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
// import Splash from '../../features/onboarding/Splash';

// Screens
import Signin from '../../features/authentication/screens/Signin';
import Signup from '../../features/authentication/screens/Signup';
import Onboarding from '../../features/onboarding/Onboarding';
import Splash from '../../features/onboarding/Splash';
import Username from '../../features/onboarding/Username';
import Gender from '../../features/onboarding/Gender';
import Age from '../../features/onboarding/Age';
import Explore from '../../features/explore/screens/Explore';
import Invite from '../../features/invites/screen/Invite';
import NewGroup from '../../features/groups/screens/NewGroup';
import Chat from '../../features/chat/screens/Chat';
import Profile from '../../features/profile/screens/Profile';
import LhoopDetails from '../../features/explore/screens/LhoopDetails';
import LhoopChat from '../../features/explore/screens/LhoopChat';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const AuthNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={Signin}
        options={{
          headerStyle: {
            // backgroundColor: 'transparent',
          },
          headerLeft: () => {
            return (
              <View className="flex flex-row items-center gap-2">
                <Image
                  className="w-8 h-8"
                  source={require('../../features/authentication/assets/logo.png')}
                />
                <Text style={{ fontFamily: 'SemiBold', fontSize: 24 }} className="">
                  lhoops
                </Text>
              </View>
            );
          },
          headerTitle: '',
          headerRight: () => {
            return (
              <View className="flex-row space-x-2">
                <Text style={{ fontFamily: 'Regular', fontSize: 14 }}>New user?</Text>
                <Pressable onPress={() => navigation.navigate('SignUp')}>
                  <Text style={{ fontFamily: 'SemiBold', fontSize: 14 }} className=" text-primary">
                    Sign Up
                  </Text>
                </Pressable>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={Signup}
        options={{
          headerStyle: {
            // backgroundColor: '',
          },
          headerLeft: () => {
            return (
              <View className="flex flex-row items-center gap-2">
                <Image
                  className="w-8 h-8"
                  source={require('../../features/authentication/assets/logo.png')}
                />
                <Text style={{ fontFamily: 'SemiBold', fontSize: 24 }} className="">
                  lhoops
                </Text>
              </View>
            );
          },
          headerTitle: '',
          headerRight: () => {
            return (
              <View className="flex-row space-x-2">
                <Text style={{ fontFamily: 'Regular', fontSize: 14 }}>Already a member?</Text>
                <Pressable onPress={() => navigation.navigate('SignIn')}>
                  <Text style={{ fontFamily: 'SemiBold', fontSize: 14 }} className=" text-primary">
                    Sign In
                  </Text>
                </Pressable>
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

const DataNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Username"
        component={Username}
        options={{
          headerTitle: 'About You',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'SemiBold',
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="Gender"
        component={Gender}
        options={{
          headerTitle: 'About You',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'SemiBold',
            fontSize: 18,
          },
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="Age"
        component={Age}
        options={{
          headerTitle: 'About You',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'SemiBold',
            fontSize: 18,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#141517',
        tabBarInactiveTintColor: '#CED4DA',
        headerTitleStyle: {
          fontFamily: 'SemiBold',
          fontSize: 26,
        },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={26} color={color} />,
          headerTitleAlign: 'left',
        }}
      />
      <Tab.Screen
        name="Invites"
        component={Invite}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="mail" size={26} color={color} />,
          headerTitleAlign: 'left',
        }}
      />
      <Tab.Screen
        name="NewGroup"
        component={NewGroup}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="add-circle" size={48} color={color} />,
          headerTitle: 'Create new loop',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'SemiBold',
            fontSize: 18,
          },
          headerRight: () => {
            return (
              <Text className="px-4">
                <Awesome name="times" size={24} color="black" />
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chat}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbox" size={26} color={color} />,
          headerTitleAlign: 'left',
          headerRight: () => {
            return (
              <Text className="px-4">
                {/* <Pressable>
                  <Awesome name="address-book" size={18} color="black" />
                </Pressable> */}
                <Pressable>
                  <Awesome name="search" size={20} color="black" />
                </Pressable>
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person" size={26} color={color} />,
          headerTitleAlign: 'left',
          headerRight: () => {
            return (
              <View className="flex-row px-4 space-x-8">
                <Awesome name="pen" size={20} color="black" />
                <Awesome name="sliders-h" size={20} color="black" />
                {/* <Awesome name="cog" size={20} color="black" /> */}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LhoopDetails"
        component={LhoopDetails}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Lhoop Details',

          headerTitleStyle: {
            fontFamily: 'SemiBold',
            fontSize: 16,
          },
        }}
      />
      <Stack.Screen
        name="LhoopChat"
        component={LhoopChat}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'York New City Lhoop',

          headerTitleStyle: {
            fontFamily: 'SemiBold',
            fontSize: 16,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  let isLoggedIn = false;

  return <AppNavigator />;
};

export default Navigation;
