import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import TabIcon from "../components/nav/TabIcon";
import Me from "../screens/Me";
import StackNavFactory from "./SharedStackNav";
import Photo from "../screens/Photo";
import useMe from "../hooks/useMe";
import { colors } from "../screens/colors";
import { Image } from "react-native";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  const { data } = useMe();

  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: "white" },
      }}
    >
      <Tabs.Screen
        name="Feed"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              iconName={"home"}
              color={color}
              focused={focused}
              size={22}
            />
          ),
        }}
      >
        {() => <StackNavFactory screenName="Feed" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              iconName={"search"}
              color={color}
              focused={focused}
              size={22}
            />
          ),
        }}
      >
        {() => <StackNavFactory screenName="Search" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Camera"
        component={Photo}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              iconName={"camera"}
              color={color}
              focused={focused}
              size={22}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              iconName={"heart"}
              color={color}
              focused={focused}
              size={22}
            />
          ),
        }}
      >
        {() => <StackNavFactory screenName="Notifications" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Me"
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            data?.me?.avatar ? (
              <Image
                source={{ uri: data.me.avatar }}
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  ...(focused && {
                    borderColor: `${colors.gray}`,
                    borderWidth: 1,
                  }),
                }}
              />
            ) : (
              <TabIcon
                iconName={"person"}
                color={color}
                focused={focused}
                size={22}
              />
            ),
        }}
      >
        {() => <StackNavFactory screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
