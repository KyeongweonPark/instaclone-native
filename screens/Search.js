import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Search({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text style={{ color: "#8E8E8E" }}>Photo</Text>
      </TouchableOpacity>
    </View>
  );
}
