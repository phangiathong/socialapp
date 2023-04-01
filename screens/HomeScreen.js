import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    Lobster: require("../assets/fonts/Lobster-Regular.ttf"),
  });
  return (
    <View>
      <Text style={{ fontFamily: "Lobster" }}>HomeScreen</Text>
      <Ionicons name="play" style={{ fontSize: 20 }}></Ionicons>
    </View>
  );
};

export default HomeScreen;
