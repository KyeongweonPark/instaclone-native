import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Room from "../screens/Room";
import Rooms from "../screens/Rooms";
import { colors } from "../screens/colors";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function MessagesNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: `${colors.gray}`,
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: "white" },
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
      }}
    >
      <Stack.Screen name="Rooms" component={Rooms} />
      <Stack.Screen name="Room" component={Room} />
    </Stack.Navigator>
  );
}
