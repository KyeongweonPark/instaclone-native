import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Photo({navigation}) {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={{ color: "#8E8E8E" }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
