import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TournamentComponent = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={tw`rounded-lg m-3`}>
      <View
        style={[
          tw`rounded-t-lg flex flex-row items-center justify-center px-5 py-3 `,
          {
            backgroundColor: "rgba(50, 67, 113, 1)",
          },
        ]}
      >
        <Text style={tw`text-white`}>{title}</Text>
      </View>
      <View
        style={[
          tw`rounded-b-lg  flex flex-row bg-white border-gray-300 border-2 border-t-0 p-2`,
          {
            backgroundColor: "rgba(247, 249, 253, 1)",
          },
        ]}
      >
        <View
          style={[
            tw`border-gray-300 border-2 rounded-lg p-2`,
            { alignSelf: "flex-start" },
          ]}
        >
          <Image
            style={{
              width: 80,
              height: 100,
            }}
            source={require("../Images/Rio2016.png")}
          />
        </View>
        <View style={tw`flex  justify-between flex-col  p-2 ml-1`}>
          <View style={tw`flex flex-row `}>
            <EvilIcons name="location" size={30} color="rgba(50, 67, 113, 1)" />
            <Text
              style={[
                tw`ml-1`,
                {
                  color: "rgba(50, 67, 113, 1)",
                },
              ]}
            >
              Rio de Janeiro, Brazil{" "}
            </Text>
          </View>
          <View style={tw`flex flex-row items-center my-2`}>
            <AntDesign name="calendar" size={24} color="rgba(50, 67, 113, 1)" />
            <Text
              style={[
                tw`ml-2`,
                {
                  color: "rgba(50, 67, 113, 1)",
                },
              ]}
            >
              12th March - 25th March, 2016
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MatchData");
            }}
            style={[
              tw`px-4 py-2 rounded-lg`,
              {
                borderWidth: 1,
                alignSelf: "flex-start",
                borderColor: "rgba(50, 67, 113, 1)",
              },
            ]}
          >
            <Text
              style={{
                color: "rgba(50, 67, 113, 1)",
              }}
            >
              View Match
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TournamentComponent;
