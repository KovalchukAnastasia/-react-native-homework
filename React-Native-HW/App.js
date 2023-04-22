import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./Screens/router";
SplashScreen.preventAutoHideAsync();

const AuthStack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto400: require("./assets/fonts/Roboto-Regular.ttf"),
    Roboto500: require("./assets/fonts/Roboto-Medium.ttf"),
    Roboto700: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const routing = useRoute(false);
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>{routing}</NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
