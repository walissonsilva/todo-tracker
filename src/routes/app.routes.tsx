import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TodayScreen } from "../pages/Today/TodayScreen";

import { RFValue } from "react-native-responsive-fontsize";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "styled-components";
import { ProfileScreen } from "../pages/Profile";
import { RegisterScreen } from "../pages/Register";
import { StatsScreen } from "../pages/Stats";
import { UpcomingScreen } from "../pages/Upcoming";

const { Navigator, Screen } = createBottomTabNavigator();
const AppStack = createNativeStackNavigator();

export function AppTabs() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: theme.colors["background-variant"],
        tabBarInactiveBackgroundColor: theme.colors["background-variant"],
        tabBarActiveTintColor: theme.colors["primary-variant"],
        tabBarStyle: {
          borderTopWidth: 0,
          height: RFValue(46),
          paddingBottom: 7,
          paddingTop: 7,
          backgroundColor: theme.colors["background-variant"],
        },
      }}
    >
      <Screen
        name="Hoje"
        component={TodayScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <Feather name="list" {...props} size={props.size - 5} />
          ),
        }}
      />
      <Screen
        name="Próximas"
        component={UpcomingScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <Feather name="calendar" {...props} size={props.size - 5} />
          ),
        }}
      />
      <Screen
        name="Estatísticas"
        component={StatsScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <Feather name="bar-chart-2" {...props} size={props.size - 5} />
          ),
        }}
      />
      <Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <Feather name="user" {...props} size={props.size - 5} />
          ),
        }}
      />
    </Navigator>
  );
}

export function AppRoutes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_bottom",
        }}
      >
        <AppStack.Group>
          <AppStack.Screen name="Home" component={AppTabs} />
        </AppStack.Group>
        <AppStack.Group
          screenOptions={{
            presentation: "modal",
          }}
        >
          <AppStack.Screen name="RegisterModal" component={RegisterScreen} />
        </AppStack.Group>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
