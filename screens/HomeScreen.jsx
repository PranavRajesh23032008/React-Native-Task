import { View, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import tw from "tailwind-react-native-classnames";
import MyProfile from "../components/MyProfile";
import MyMatches from "../components/MyMatches";
import MyAcademy from "../components/MyAcademy";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <View style={tw`bg-gray-50 flex flex-1`}>
      <Header title={"Home"} />
      <ScrollView style={tw`flex-1 flex-col flex`}>
        <MyProfile />
        <MyMatches />
        <MyAcademy />
        <Footer />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
