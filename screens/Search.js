import { gql, useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  FlatList,
  View,
  ActivityIndicator,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import styled from "styled-components/native";
import DissmissKeyboad from "../components/DismissKeyboard";
import { colors } from "./colors";

const SEARCH_PHOTOS = gql`
  query searchPhotos($keyword: String!) {
    searchPhotos(keyword: $keyword) {
      id
      file
    }
  }
`;

const SearchingContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const SearchingText = styled.Text`
  margin-top: 15px;
  color: ${colors.gray};
  font-weight: 600;
`;

const Input = styled.TextInput`
  color: ${colors.gray};
  width: ${(props) => props.width / 1.5}px;
  border-radius: 10px;
  border-width: 1px;
  border-color: rgba(225, 225, 225, 0.8);
  padding: 5px 10px;
`;

export default function Search({ navigation }) {
  const numColumns = 4;
  const { width } = useWindowDimensions();
  const { setValue, register, handleSubmit } = useForm();
  const [startQueryFn, { loading, data, called }] = useLazyQuery(SEARCH_PHOTOS);
  const onValid = ({ keyword }) => {
    startQueryFn({
      variables: {
        keyword,
      },
    });
  };
  const SearchBox = () => (
    <Input
      width={width}
      style={{ backgroundColor: "white" }}
      placeholderTextColor={`${colors.gray}`}
      placeholder="Search Photos..."
      autoCapitalize="none"
      returnKeyLabel="Search"
      returnKeyType="search"
      autoCorrect={false}
      onChangeText={(text) => setValue("keyword", text)}
      onSubmitEditing={handleSubmit(onValid)}
    />
  );
  useEffect(() => {
    navigation.setOptions({
      headerTitle: SearchBox,
    });
    register("keyword", { required: true, minLength: 2 });
  }, []);
  const renderItem = ({ item: photo }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Photo", { photoId: photo.id })}
    >
      <Image
        source={{ uri: photo.file }}
        style={{ width: width / numColumns, height: width / numColumns }}
      />
    </TouchableOpacity>
  );
  return (
    <DissmissKeyboad>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {loading ? (
          <SearchingContainer>
            <ActivityIndicator size="small" />
            <SearchingText>Searching...</SearchingText>
          </SearchingContainer>
        ) : null}
        {!called ? (
          <SearchingContainer>
            <SearchingText>Search by Keyword</SearchingText>
          </SearchingContainer>
        ) : null}
        {data?.searchPhotos !== undefined ? (
          data?.searchPhotos.length === 0 ? (
            <SearchingContainer>
              <SearchingText>No Results</SearchingText>
            </SearchingContainer>
          ) : (
            <FlatList
              numColumns={numColumns}
              data={data?.searchPhotos}
              keyExtractor={(photo) => "" + photo.id}
              renderItem={renderItem}
            />
          )
        ) : null}
      </View>
    </DissmissKeyboad>
  );
}
