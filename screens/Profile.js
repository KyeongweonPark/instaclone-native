import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function Profile({ navigation, route }) {
  useEffect(() => {
    if (route?.params?.username) {
      navigation.setOptions({
        title: route.params.username,
      });
    }
  }, []);
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#8E8E8E" }}>Someone's Profile</Text>
    </View>
  );
}
