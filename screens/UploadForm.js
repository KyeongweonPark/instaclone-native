import { gql, useMutation } from "@apollo/client";
import { ReactNativeFile } from "apollo-upload-client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import styled from "styled-components/native";
import DissmissKeyboad from "../components/DismissKeyboard";
import { FEED_PHOTO } from "../fragments";
import { colors } from "./colors";

const UPLOAD_PHOTO_MUTATION = gql`
  mutation uploadPhoto($file: Upload!, $caption: String) {
    uploadPhoto(file: $file, caption: $caption) {
      ...FeedPhoto
    }
  }
  ${FEED_PHOTO}
`;

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 0px 20px;
`;
const Photo = styled.Image`
  height: 400px;
`;
const CaptionContainer = styled.View`
  margin-top: 20px;
`;
const Caption = styled.TextInput`
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 30px;
  border-width: 1px;
  border-color: ${colors.gray};
`;

const HeaderRightText = styled.Text`
  color: ${colors.blue};
  font-size: 16px;
  font-weight: 600;
  margin-right: 8px;
`;

export default function UploadForm({ navigation, route }) {
  const updateUploadPhoto = (cache, result) => {
    const {
      data: { uploadPhoto },
    } = result;
    if (uploadPhoto.id) {
      cache.modify({
        id: "ROOT_QUERY",
        fields: {
          seeFeed(prev) {
            return [uploadPhoto, ...prev];
          },
        },
      });
      navigation.navigate("Tabs");
    }
  };
  const [uploadPhotoMutation, { loading }] = useMutation(
    UPLOAD_PHOTO_MUTATION,
    {
      update: updateUploadPhoto,
    }
  );
  const HeaderRight = () => (
    <TouchableOpacity onPress={handleSubmit(onValid)}>
      <HeaderRightText>Next</HeaderRightText>
    </TouchableOpacity>
  );
  const HeaderRightLoading = () => (
    <ActivityIndicator
      size="small"
      color={colors.gray}
      style={{ marginRight: 10 }}
    />
  );
  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    register("caption");
  }, [register]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: loading ? HeaderRightLoading : HeaderRight,
      ...(loading && { headerLeft: () => null }),
    });
  }, [loading]);

  const onValid = ({ caption }) => {
    Keyboard.dismiss();
    const file = new ReactNativeFile({
      uri: route.params.file,
      name: `photo.jpg`,
      type: "image/jpeg",
    });
    uploadPhotoMutation({ variables: { caption, file } });
  };
  return (
    <DissmissKeyboad>
      <Container>
        <KeyboardAvoidingView
          style={{ width: "100%" }}
          behavior="position"
          keyboardVerticalOffset={Platform.OS == "ios" ? 100 : 100}
        >
          <Photo resizeMode="contain" source={{ uri: route.params.file }} />
          <CaptionContainer>
            <Caption
              returnKeyType="done"
              placeholder="Write a caption..."
              placeholderTextColor="rgba(0,0,0,0.5)"
              onSubmitEditing={handleSubmit(onValid)}
              onChangeText={(text) => setValue("caption", text)}
            />
          </CaptionContainer>
        </KeyboardAvoidingView>
      </Container>
    </DissmissKeyboad>
  );
}
