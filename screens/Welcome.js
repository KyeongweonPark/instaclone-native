import React from "react";
import styled from "styled-components/native";
import { Text, View, TouchableOpacity } from "react-native";
import { colors } from "./colors";

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 0px 40px;
`;

const Logo = styled.Image`
  max-width: 50%;
  height: 100px;
`;

const CreateAccount = styled.TouchableOpacity`
  background-color: ${colors.blue};
  padding: 10px 10px;
  border-radius: 3px;
  width: 100%;
  text-align: center;
  
`;

const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
  
`;

const LoginLink = styled.TouchableOpacity``;

const LoginLinkText = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
`;

export default function Welcome({ navigation }) {
  const goTCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogIn = () => navigation.navigate("LogIn");
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../assets/logo.png")} />
      <CreateAccount onPress={goTCreateAccount}>
        <CreateAccountText>New Account</CreateAccountText>
      </CreateAccount>
      <LoginLink onPress={goToLogIn}>
        <LoginLinkText>Log in</LoginLinkText>
      </LoginLink>
    </Container>
  );
}
