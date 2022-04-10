import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import tw from "tailwind-react-native-classnames";
import Footer from "../components/Footer";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Match from "../components/Match";
import PVSindhuStats from "../components/PVSindhuStats";
import GameStats from "../components/GameStats";

const MatchStats = ({ title }) => {
  return (
    <View
      style={tw`border-gray-300 flex flex-row  rounded-lg border-2 p-5 m-2 shadow-md bg-white`}
    >
      <Image style={tw`h-40 w-40`} source={require("../icons/Player.png")} />
      <View style={tw`mr-5 flex-col justify-between`}>
        <Text
          style={[
            {
              color: "rgba(11, 31, 80, 1)",
            },
            tw`mt-3 w-40`,
          ]}
        >
          {title}
        </Text>
        <View style={tw`flex flex-row items-end`}>
          <Text
            style={[
              tw`text-4xl`,
              {
                color: "rgba(11, 31, 80, 1)",
              },
            ]}
          >
            11
          </Text>
          <Text
            style={[
              tw`text-sm mb-2`,
              {
                color: "rgba(11, 31, 80, 1)",
              },
            ]}
          >
            shots
          </Text>
        </View>
      </View>
    </View>
  );
};

const MatchScreen = () => {
  return (
    <View style={tw`bg-gray-50 flex flex-1`}>
      <Header title={"Match Center"} />
      <ScrollView style={tw`flex-1 flex-col flex`}>
        <View style={tw`m-5`}>
          <Match />
          <View
            style={tw`m-5 justify-center flex flex-row items-center flex-wrap mx-auto`}
          >
            <TouchableOpacity
              style={[
                {
                  borderColor: "rgba(72, 180, 153, 1)",
                  borderWidth: 2,
                },
                tw`rounded-lg mb-5 flex mr-4 flex-row shadow-md bg-white items-center p-5`,
              ]}
            >
              <Ionicons
                name="stats-chart-outline"
                size={80}
                color="rgba(72, 180, 153, 1)"
              />
              <Text style={[tw`ml-5 text-2xl font-semibold text-black`]}>
                View{"\n"}Analysis
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                {
                  borderColor: "rgba(72, 180, 153, 1)",
                  borderWidth: 2,
                },
                tw`rounded-lg flex flex-row shadow-md bg-white items-center p-5`,
              ]}
            >
              <Ionicons
                name="videocam-outline"
                size={80}
                color="rgba(72, 180, 153, 1)"
              />
              <Text style={[tw`ml-5 text-2xl font-semibold text-black`]}>
                View{"\n"}Video
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={tw`m-5 flex justify-center flex-row items-center flex-wrap`}
        >
          <MatchStats title={"AVG RALLY LENGTH "} />
          <MatchStats title={"MATCH INTENSITY"} />
          <MatchStats title={"LONGEST RALLY"} />
          <MatchStats title={"TOTAL NO OF SHOTS"} />
        </View>
        <PVSindhuStats />
        <GameStats />
        <Footer />
      </ScrollView>
    </View>
  );
};

export default MatchScreen;
