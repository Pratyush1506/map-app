import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';
import * as SecureStore from "expo-secure-store"; // IMPORT FOR STORING TOKEN
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

SplashScreen.preventAutoHideAsync();

//START OF STORING TOKEN CODE SO THAT USER DONT NEED LOGIN AGAIN AFTER RESTARING THE APP
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
//END

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  // <ClerkProviderProvider publishableKey={'pk_test_bm9ybWFsLXJhdHRsZXItNjMuY2xlcmsuYWNjb3VudHMuZGV2JA'}></ClerkProvider>
      //   <View style={styles.container} onLayout={onLayoutRootView}>
      //     <LoginScreen />
      //     <StatusBar style="auto" />
      //   </View>
      // </ClerkProvider>
  return (
      <ClerkProvider
        tokenCache={tokenCache}
        publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
        <View style={styles.container} onLayout={onLayoutRootView}>
          <SignedIn>
            <Text>You are Signed in</Text>
          </SignedIn>
          <SignedOut>
            <LoginScreen />
          </SignedOut>
          <StatusBar style="auto" />
        </View>
      </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
