import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import Constant from "expo-constants";
import { useSelector } from "react-redux";
export default function HomeScreen({ navigation }) {
  const dataItems = useSelector((state) => {
    return state;
  });
  return (
    <View>
      <Header />
      <FlatList
        data={dataItems}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("videoPlayer", {
                  videoId: item.id.videoId,
                  title: item.snippet.title,
                })
              }
            >
              <Card
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                videoId={item.id.videoId}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
}
