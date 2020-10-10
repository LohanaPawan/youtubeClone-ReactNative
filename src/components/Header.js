import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <AntDesign name="youtube" size={35} color="red" />
        <Text style={styles.text}>YouTube</Text>
      </View>
      <View style={styles.view2}>
        <Ionicons name="md-videocam" size={35} color="#212121" />
        <Ionicons
          name="md-search"
          size={35}
          color="#212121"
          onPress={() => navigation.navigate("search")}
        />
        <MaterialIcons name="account-circle" size={35} color="#212121" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    marginTop: Constants.statusBarHeight,
    margin: 5,
  },
  view1: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "space-between",
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "40%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
  },
});
