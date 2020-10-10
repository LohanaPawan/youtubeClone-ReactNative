import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
const API_KEY = "your-api-key";
import Constant from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import MiniCard from "../components/MiniCard";
import { useDispatch, useSelector } from "react-redux";

const Search = ({ navigation }) => {
  const [inputVal, setInputVal] = useState("");
  // const [searchData, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchData = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const getData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inputVal}&type=video&videoType=any&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        dispatch({ type: "add", payload: data.items });

        // setData(data.items);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="md-arrow-back"
          size={32}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={styles.input}
          value={inputVal}
          onChangeText={(text) => setInputVal(text)}
        />
        <Ionicons
          name="md-send"
          size={32}
          color="black"
          onPress={() => getData()}
        />
      </View>
      {loading ? (
        <ActivityIndicator size={30} color="red" style={{ marginTop: 10 }} />
      ) : (
        <FlatList
          data={searchData}
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
                <MiniCard
                  videoId={item.id.videoId}
                  title={item.snippet.title}
                  channel={item.snippet.channelTitle}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id.videoId}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },
  header: {
    flexDirection: "row",
    elevation: 5,
    padding: 6,
    backgroundColor: "white",
    justifyContent: "space-around",
  },
  body: {},
  input: {
    backgroundColor: "#e6e6e6",
    width: "70%",
  },
});

export default Search;
