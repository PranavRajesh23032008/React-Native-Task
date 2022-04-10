import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import React, { useState } from "react";
import MatchComponent from "../components/MatchComponent";
import tw from "tailwind-react-native-classnames";
import { Feather, AntDesign } from "@expo/vector-icons";
import TournamentComponent from "../components/TournamentComponent";

const MyMatchesScreen = () => {
  return (
    <View style={tw`flex-1 bg-gray-50`}>
      <Header title={"My Matches"} />
      <View style={tw`flex-1`}>
        <Text style={tw`m-3 text-gray-400`}>
          My Matches {">"}
          <Text style={tw`text-gray-600`}> Tournaments</Text>{" "}
        </Text>
        <View
          style={[
            tw`flex flex-row items-center bg-white p-2 m-3 rounded-md`,
            {
              borderColor: "rgba(157, 168, 191, 1)",
              borderWidth: 1,
            },
          ]}
        >
          <Feather name="search" size={24} color="rgba(157, 168, 191, 1)" />
          <TextInput
            style={tw`ml-2`}
            placeholder={`Search`}
            placeholderTextColor={"rgba(157, 168, 191, 1)"}
          />
        </View>
        <View style={tw`flex flex-row items-center justify-between mx-3 mb-3`}>
          <TouchableOpacity
            style={[
              {
                borderWidth: 1,
                borderColor: "rgba(236, 240, 250, 1)",
              },
              tw`p-3 rounded-lg flex flex-row items-center`,
            ]}
          >
            <Text
              style={[
                { color: "rgba(72, 180, 153, 1)" },
                tw`mr-2 font-semibold`,
              ]}
            >
              By Matches
            </Text>
            <AntDesign name="down" size={20} color="rgba(72, 180, 153, 1)" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                borderWidth: 1,
                borderColor: "rgba(236, 240, 250, 1)",
              },
              tw`p-3 rounded-lg flex flex-row items-center`,
            ]}
          >
            <AntDesign name="calendar" size={24} color="rgba(50, 67, 113, 1)" />
            <Text
              style={[
                {
                  color: "rgba(50, 67, 113, 1)",
                },
                tw`ml-1 font-semibold`,
              ]}
            >
              Nov, 2021
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={tw``}>
          <TournamentComponent title={"Rio Olympics, 2016"} />
          <TournamentComponent title={"Toyota Thailand Open, 2020 "} />
          <TournamentComponent title={"Rio Olympics, 2016"} />
          <TournamentComponent title={"Rio Olympics, 2016"} />
        </ScrollView>
      </View>
    </View>
  );
};

export default MyMatchesScreen;
