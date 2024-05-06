// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

// Navigator
import Navigation from './src/components/navigators/Navigation';

// SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Bold: require('./assets/fonts/Fredoka-Bold.ttf'),
    SemiBold: require('./assets/fonts/Fredoka-SemiBold.ttf'),
    Medium: require('./assets/fonts/Fredoka-Medium.ttf'),
    Regular: require('./assets/fonts/Fredoka-Regular.ttf'),
    Light: require('./assets/fonts/Fredoka-Light.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  // const { height, width } = useWindowDimensions();

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
