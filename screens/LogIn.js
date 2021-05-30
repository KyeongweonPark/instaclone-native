import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function LogIn({ navigation }) {
  const {} = useForm()
  const passwordRef = useRef();
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  return (
    <AuthLayout>
      <TextInput
        placeholder="Username"
        returnKeyType="next"
        placeholderTextColor={"rgba(0,0,0,0.3)"}
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
      ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        placeholderTextColor={"rgba(0,0,0,0.3)"}
      />
      <AuthButton text="Log In" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
}
