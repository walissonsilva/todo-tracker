import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { TodayScreen } from "../pages/Today/TodayScreen";

import { RFValue } from "react-native-responsive-fontsize";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "styled-components";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: theme.colors.background,
          tabBarInactiveBackgroundColor: theme.colors.background,
          tabBarStyle: {
            borderTopWidth: 0,
            height: RFValue(46),
            paddingBottom: 7,
            paddingTop: 7,
            backgroundColor: theme.colors.background,
          },
        }}
      >
        <Screen
          name="Hoje"
          component={TodayScreen}
          options={{
            tabBarActiveTintColor: theme.colors.primary,
            headerShown: false,
            tabBarIcon: (props) => (
              <Feather name="list" {...props} size={props.size - 5} />
            ),
          }}
        />
        <Screen
          name="Próximas"
          component={TodayScreen}
          options={{
            tabBarActiveTintColor: theme.colors.primary,
            headerShown: false,
            tabBarIcon: (props) => (
              <Feather name="calendar" {...props} size={props.size - 5} />
            ),
          }}
        />
        <Screen
          name="Busca"
          component={TodayScreen}
          options={{
            tabBarActiveTintColor: theme.colors.primary,
            headerShown: false,
            tabBarIcon: (props) => (
              <Feather name="search" {...props} size={props.size - 5} />
            ),
          }}
        />
        <Screen
          name="Estatísticas"
          component={TodayScreen}
          options={{
            tabBarActiveTintColor: theme.colors.primary,
            headerShown: false,
            tabBarIcon: (props) => (
              <Feather name="bar-chart-2" {...props} size={props.size - 5} />
            ),
          }}
        />
        <Screen
          name="Perfil"
          component={TodayScreen}
          options={{
            tabBarActiveTintColor: theme.colors.primary,
            headerShown: false,
            tabBarIcon: (props) => (
              <Feather name="user" {...props} size={props.size - 5} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
