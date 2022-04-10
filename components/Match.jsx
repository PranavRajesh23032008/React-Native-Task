import { Image, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    <View style={tw``}>
      <View style={tw`flex flex-row justify-between px-3`}>
        <View style={tw`border-gray-300 border-2 rounded-lg border-b-0`}>
          <Image
            style={[
              {
                width: 114,
                height: 91,
              },
            ]}
            source={require("../Images/PVSindhu.png")}
          />
        </View>
        <View style={tw`border-gray-300 border-2 rounded-lg border-b-0`}>
          <Image
            style={[
              {
                width: 114,
                height: 91,
              },
            ]}
            source={require("../Images/CarolinaMarin.png")}
          />
        </View>
      </View>
      <View
        style={[
          { backgroundColor: "rgba(33, 41, 76, 1)" },
          tw`p-4 rounded-lg `,
        ]}
      >
        <View style={tw`mx-auto`}>
          <Text style={tw`text-center text-white font-bold text-2xl`}>
            Olympics Tokyo
          </Text>
          <Text style={tw`text-center text-white text-lg`}>Semi Final</Text>
          <View style={tw`flex flex-row items-center justify-between`}>
            <View style={tw`-mt-8`}>
              <Image
                style={tw`mx-auto mb-3`}
                source={require("../Images/IndiaFlag.png")}
              />
              <Text style={tw`text-white `}>P V Sindhu</Text>
            </View>
            <View
              style={[
                tw`px-3 py-1 my-5 rounded-md mx-10`,
                {
                  backgroundColor: "rgba(72, 180, 153, 1))",
                  alignSelf: "flex-start",
                },
              ]}
            >
              <Text style={[tw`font-semibold text-white font-semibold`]}>
                v/s
              </Text>
            </View>
            <View>
              <Image
                style={tw`mx-auto mb-3`}
                source={require("../Images/ThailandFlag.png")}
              />
              <Text style={tw`text-white `}>Carolina Marin</Text>
            </View>
          </View>
          <Text style={[{ color: "rgba(157, 168, 191, 1)" }, tw`text-center`]}>
            11-21, 21-14, 21-19
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
