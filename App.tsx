import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { SignIn } from "./src/pages/SignIn/SignIn";
import mainTheme from "./src/styles/themes/main";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadingFonts() {
      await SplashScreen.preventAutoHideAsync();

      await Font.loadAsync({
        "Cairo-Bold": require("./src/assets/fonts/Cairo-Bold.ttf"),
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
      <View style={styles.container}>
        <SignIn />
        <StatusBar style="light" />
      </View>
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
