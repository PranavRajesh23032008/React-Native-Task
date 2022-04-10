import { View, Text, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Stats = ({ title, leftNum, rightNum }) => {
  return (
    <View style={tw`border-b-2 border-t-2 border-gray-200 px-5 py-2`}>
      <Text
        style={[
          {
            color: "rgba(33, 41, 76, 1)",
          },
          tw`font-bold text-center mb-3`,
        ]}
      >
        {title}
      </Text>
      <View style={tw`flex flex-row items-center justify-center`}>
        <View style={[tw`flex flex-row flex-1 justify-between`]}>
          <Text style={[tw`font-bold`]}>{leftNum}</Text>
          <View
            style={[
              tw`rounded-full  h-3 my-auto m-2`,
              {
                backgroundColor: "rgba(6, 178, 248, 1)",
                width: "50%",
              },
            ]}
          />
        </View>
        <View style={[tw`flex flex-row flex-1 justify-between`]}>
          <View
            style={[
              tw`rounded-full  h-3 my-auto m-2`,
              {
                backgroundColor: "rgba(142, 57, 208, 1)",
                width: "50%",
              },
            ]}
          />
          <Text style={[tw`font-bold`]}>{rightNum}</Text>
        </View>
      </View>
    </View>
  );
};

const GameStats = () => {
  return (
    <View style={[tw`my-5`]}>
      <View style={tw`flex flex-row items-center justify-center`}>
        <View style={tw`flex flex-col items-center mx-auto`}>
          <View
            style={[
              tw`rounded-full mx-auto border-2 border-gray-300 `,
              {
                alignSelf: "flex-start",
              },
            ]}
          >
            <Image
              style={[
                {
                  width: 60,
                  height: 60,
                },
                tw`rounded-full`,
              ]}
              source={require("../Images/PVSindhu.png")}
            />
          </View>
          <Text style={[{ color: "rgba(33, 41, 76, 1)" }, tw`font-bold mt-1`]}>
            P V Sindhu
          </Text>
        </View>
        <View style={tw`flex flex-col items-center mx-auto`}>
          <View
            style={[
              tw`rounded-full mx-auto border-2 border-gray-300`,
              {
                alignSelf: "flex-start",
              },
            ]}
          >
            <Image
              style={[
                {
                  width: 60,
                  height: 60,
                },
                tw`rounded-full`,
              ]}
              source={require("../Images/CarolinaMarin.png")}
            />
          </View>
          <Text style={[{ color: "rgba(33, 41, 76, 1)" }, tw`font-bold mt-1`]}>
            Carolina Marin
          </Text>
        </View>
      </View>
      <View style={tw`m-5 border-gray-200 border-2 rounded-lg`}>
        <Stats title={"Winners"} leftNum={"29"} rightNum={"32"} />
        <Stats title={"Errors"} leftNum={"23"} rightNum={"23"} />
        <Stats
          title={"Points scored without serve"}
          leftNum={"19"}
          rightNum={"18"}
        />
        <Stats
          title={"Points scored with serve"}
          leftNum={"07"}
          rightNum={"07"}
        />
        <Stats title={"Shot serve"} leftNum={"22"} rightNum={"32"} />
        <Stats title={"Long serve"} leftNum={"24"} rightNum={"22"} />
        <Stats title={"Straight shots"} leftNum={"65%"} rightNum={"55%"} />
        <Stats title={"Cross shots"} leftNum={"35%"} rightNum={"35%"} />
        <Stats title={"Attacking shots"} leftNum={"42%"} rightNum={"40%"} />
        <Stats title={"Defensive shots"} leftNum={"50%"} rightNum={"50%"} />
      </View>
    </View>
  );
};

export default GameStats;
