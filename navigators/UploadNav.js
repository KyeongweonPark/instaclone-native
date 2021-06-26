import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/SelectPhoto";
import TakePhoto from "../screens/TakePhoto";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../screens/colors";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function UploadNav() {
  return (
    <Tab.Navigator tabBarPosition="bottom">
      <Tab.Screen name="Select">
        {() => (
          <Stack.Navigator
            screenOptions={{
              headerTintColor: `${colors.gray}`,
              headerBackTitleVisible: false,
              headerBackImage: ({ tintColor }) => (
                <TouchableOpacity>
                  <Ionicons
                    color={tintColor}
                    name="close"
                    size={25}
                    style={{ marginLeft: 5 }}
                  />
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: "white",
                shadowOpacity: 0.3,
              },
            }}
          >
            <Stack.Screen
              name="select"
              options={{ title: "Choose a Photo" }}
              component={SelectPhoto}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Take" component={TakePhoto} />
    </Tab.Navigator>
  );
}
