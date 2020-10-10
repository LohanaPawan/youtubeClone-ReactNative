import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Card = (props) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
        }}
        style={styles.image}
      />
      <View style={{ flexDirection: "row", margin: 5 }}>
        <MaterialIcons name="account-circle" size={35} />
        <View
          style={{
            marginLeft: 10,
          }}
        >
          <Text style={styles.topic} ellipsizeMode="tail" numberOfLines={2}>
            {props.title}
          </Text>
          <Text style={styles.channelName}> {props.channel} </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  topic: {
    fontSize: 22,
    width: Dimensions.get("screen").width - 50,
  },
  channelName: {
    fontSize: 15,
  },
});
