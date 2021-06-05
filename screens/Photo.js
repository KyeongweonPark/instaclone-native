import React from "react";
import { Text, View } from "react-native";

export default function Photo() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#8E8E8E" }}>Photo</Text>
    </View>
  );
}
