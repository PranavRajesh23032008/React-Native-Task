import { View, Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const PVSindhuStats = () => {
  return (
    <View style={[{ backgroundColor: "#FFF0BD" }, tw`p-5`]}>
      <Text
        style={[
          { color: "rgba(50, 67, 113, 1)", fontSize: 35 },
          tw`font-bold text-center`,
        ]}
      >
        PV SINDHU
      </Text>
      <View style={tw`flex flex-row items-center justify-between mt-5`}>
        <View>
          <View
            style={[
              {
                borderWidth: 10,
                borderColor: "rgba(255, 195, 60, 1)",
                alignSelf: "flex-start",
              },
              tw`p-5 rounded-full mb-3 mx-auto`,
            ]}
          >
            <Text
              style={[
                tw`font-bold`,
                {
                  fontSize: 30,
                  color: "rgba(50, 67, 113, 1)",
                },
              ]}
            >
              05
            </Text>
          </View>
          <Text
            style={[
              tw`text-xs text-center font-bold`,
              {
                color: "rgba(50, 67, 113, 1)",
              },
            ]}
          >
            WINNING STREAK
          </Text>
        </View>
        <View>
          <View
            style={[
              {
                borderWidth: 10,
                borderColor: "rgba(255, 195, 60, 1)",
                alignSelf: "flex-start",
              },
              tw`p-5 rounded-full mb-3 mx-auto`,
            ]}
          >
            <Text
              style={[
                tw`font-bold`,
                {
                  fontSize: 30,
                  color: "rgba(50, 67, 113, 1)",
                },
              ]}
            >
              03
            </Text>
          </View>
          <Text
            style={[
              tw`text-xs text-center font-bold`,
              {
                color: "rgba(50, 67, 113, 1)",
              },
            ]}
          >
            BIGGEST COMEBACK
          </Text>
        </View>
        <View>
          <View
            style={[
              {
                borderWidth: 10,
                borderColor: "rgba(255, 195, 60, 1)",
                alignSelf: "flex-start",
              },
              tw`p-5 rounded-full mb-3 mx-auto`,
            ]}
          >
            <Text
              style={[
                tw`font-bold`,
                {
                  fontSize: 30,
                  color: "rgba(50, 67, 113, 1)",
                },
              ]}
            >
              08
            </Text>
          </View>
          <Text
            style={[
              tw`text-xs text-center font-bold`,
              {
                color: "rgba(50, 67, 113, 1)",
              },
            ]}
          >
            BIGGEST LEAD
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PVSindhuStats;
