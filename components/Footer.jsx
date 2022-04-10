import { View, Text, Image } from "react-native";
import React from "react";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";

const Footer = () => {
  return (
    <View
      style={[
        tw`px-7 py-14`,
        {
          backgroundColor: "rgba(33, 41, 76, 1)",
        },
      ]}
    >
      <Image
        style={[tw`h-12 w-64`, {}]}
        source={require("../Images/AppLogoLight.png")}
      />
      <Text style={tw`text-white my-6 text-lg`}>AI enabled intelligence!</Text>
      <View style={tw`flex flex-row items-center`}>
        <MaterialCommunityIcons
          style={tw`mr-6`}
          name="email"
          size={24}
          color="white"
        />
        <Entypo style={tw`mr-6`} name="instagram" size={24} color="white" />
        <AntDesign style={tw`mr-6`} name="twitter" size={24} color="white" />
        <FontAwesome5
          name="facebook-f"
          style={tw`mr-6`}
          size={24}
          color="white"
        />
        <Entypo style={tw`mr-6`} name="linkedin" size={24} color="white" />
      </View>
      <View style={tw`flex flex-row items-center mt-6`}>
        <Text style={tw`text-gray-300`}>Copyright | </Text>
        <Text style={tw`text-gray-300`}>FAQ | </Text>
        <Text style={tw`text-gray-300`}>Privacy Policy | </Text>
        <Text style={tw`text-gray-300`}>Terms of Use</Text>
      </View>
    </View>
  );
};

export default Footer;
