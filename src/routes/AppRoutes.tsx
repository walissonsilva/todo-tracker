import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TodayScreen } from "../pages/Today/TodayScreen";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "styled-components";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Today"
          component={TodayScreen}
          options={{
            tabBarActiveTintColor: theme.colors.primary,
            headerShown: false,
            tabBarIcon: (props) => <Ionicons name="today-outline" {...props} />,
          }}
        />
        <Screen
          name="Upcoming"
          component={TodayScreen}
          options={{
            tabBarActiveTintColor: theme.colors.primary,
            headerShown: false,
            tabBarIcon: (props) => (
              <Ionicons name="calendar-outline" {...props} />
            ),
          }}
        />
        <Screen
          name="Profile"
          component={TodayScreen}
          options={{
            tabBarActiveTintColor: theme.colors.primary,
            headerShown: false,
            tabBarIcon: (props) => (
              <Ionicons name="person-outline" {...props} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
