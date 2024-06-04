import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/modules/common/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    ProximaNovaBlack: require('../assets/fonts/ProximaNovaBlack.otf'),
    ProximaNovaBold: require('../assets/fonts/ProximaNovaBold.otf'),
    ProximaNovaExtraBold: require('../assets/fonts/ProximaNovaExtrabold.otf'),
    ProximaNovaLight: require('../assets/fonts/ProximaNovaLight.otf'),
    ProximaNovaRegular: require('../assets/fonts/ProximaNovaRegular.otf'),
    ProximaNovaSemiBold: require('../assets/fonts/ProximaNovaSemibold.otf'),
    ProximaNovaThin: require('../assets/fonts/ProximaNovaThin.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
