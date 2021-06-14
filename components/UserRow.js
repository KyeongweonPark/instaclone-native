import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";

const Column = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin-right: 10px;
`;
const Username = styled.Text`
  font-weight: 600;
`;
const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;
const FollowBtn = styled.TouchableOpacity`
  background-color: ${colors.blue};
  justify-content: center;
  border-radius: 4px;
  margin-right: 10px;
`;
const FollowBtnText = styled.Text`
  color: white;
  font-weight: 600;
  margin: 7px 7px 5px 5px;
`;

export default function UserRow({ id, avatar, username, isFollowing, isMe }) {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Column onPress={()=>navigation.navigate("Profile", {
        id,
        username
      })}>
        <Avatar
          source={
            avatar ? { uri: avatar } : require("../assets/defaultAvatar.jpg")
          }
        />
        <Username>{username}</Username>
      </Column>
      <FollowBtn>
        {!isMe ? (
          <FollowBtnText>{isFollowing ? "Unfollow" : "Follow"}</FollowBtnText>
        ) : null}
      </FollowBtn>
    </Wrapper>
  );
}
