import "react-native-gesture-handler";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import { AppRoutes } from "./src/routes/app.routes";
import mainTheme from "./src/styles/themes/main";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadingFonts() {
      await SplashScreen.preventAutoHideAsync();

      await Font.loadAsync({
        "Cairo-Bold": require("./src/assets/fonts/Cairo-Bold.ttf"),
        "Cairo-SemiBold": require("./src/assets/fonts/Cairo-SemiBold.ttf"),
        "Cairo-Medium": require("./src/assets/fonts/Cairo-Medium.ttf"),
        "Cairo-Regular": require("./src/assets/fonts/Cairo-Regular.ttf"),
        "Cairo-Light": require("./src/assets/fonts/Cairo-Light.ttf"),
      });

      await SplashScreen.hideAsync();
      setFontsLoaded(true);
    }

    loadingFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={mainTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppRoutes />
        <StatusBar style="light" />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
