import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Constant from "expo-constants";
import WebView from "react-native-webview";
import { Constants } from "react-native-unimodules";
const VideoPlayer = ({ route }) => {
  const { videoId, title } = route.params;
  return (
    <View
      style={{
        flex: 1,
        marginTop: Constant.statusBarHeight,
      }}
    >
      <View style={styles.player}>
        <WebView source={{ uri: `https://www.youtube.com/embed/${videoId}` }} />
      </View>
      <Text> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  player: {
    width: Dimensions.get("screen").width,
    height: "50%",
    marginTop: "20%",
  },
});
export default VideoPlayer;
