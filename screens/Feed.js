import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { logUserOut } from "../apollo";
import { COMMENT_FRAGMENT } from "../fragments";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      commentNumber
      isLiked
      createdAt
      isMine
      comments {
        ...CommentFragment
      }
    }
  }
  ${COMMENT_FRAGMENT}
`;

export default function Feed({navigation}) {

  const {data} = useQuery(FEED_QUERY);
  console.log(data);

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <Text style={{ color: "#8E8E8E" }}>Feed</Text>
    </View>
  );
}
