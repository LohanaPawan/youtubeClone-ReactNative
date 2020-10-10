import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

const MiniCard = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
        }}
        style={styles.image}
      />
      <View style={styles.view2}>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={3}>
          {props.title}
        </Text>
        <Text style={styles.channel}>{props.channel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  image: {
    width: "40%",
    height: 100,
  },
  view2: {
    paddingLeft: 10,
    width: Dimensions.get("screen").width / 2,
  },
  title: {
    fontSize: 18,
    marginBottom: "2%",
  },
  channel: {},
});

export default MiniCard;
