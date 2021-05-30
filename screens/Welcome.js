import React from "react";
import styled from "styled-components/native";
import { Text, View, TouchableOpacity } from "react-native";
import { colors } from "./colors";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";



const LoginLink = styled.TouchableOpacity``;

const LoginLinkText = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
  align-self: center;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogIn = () => navigation.navigate("LogIn");
  return (
    <AuthLayout>
      <AuthButton
        text="Create New Account"
        disabled={false}
        onPress={goToCreateAccount}
      />
      <LoginLink onPress={goToLogIn}>
        <LoginLinkText>Log In</LoginLinkText>
      </LoginLink>
    </AuthLayout>
  );
}
