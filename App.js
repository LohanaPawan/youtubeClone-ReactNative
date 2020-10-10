import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Constant from "expo-constants";
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from "./src/screens/Explore";
import Subscribtion from "./src/screens/Subscribtion";
import { MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { searchResult } from "./src/reducers/reducer";
const store = createStore(searchResult);

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "explore") {
            iconName = "explore";
          } else if (route.name === "subscribtion") {
            iconName = "subscriptions";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="subscribtion" component={Subscribtion} />
    </Tabs.Navigator>
  );
};
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="videoPlayer" component={VideoPlayer} />
          <Stack.Screen name="search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
