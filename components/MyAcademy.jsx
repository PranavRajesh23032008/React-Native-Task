import { View, Text, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const MyAcademy = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white rounded-lg border-2 border-gray-200 m-7 my-7`}>
      <View style={tw`flex flex-row items-center border-gray-200 border-b-2 `}>
        <View
          style={[
            tw`h-full rounded-l-lg rounded-b-none`,
            {
              backgroundColor: "#324371",
              width: 11,
            },
          ]}
        />
        <Text
          style={[
            tw`font-bold px-7 py-3 mr-auto`,
            {
              color: "#324371",
            },
          ]}
        >
          MY ACADEMY
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyAcademy");
          }}
          style={[
            tw`mx-7 px-3 py-1  rounded-lg `,
            {
              borderWidth: 2,
              borderColor: "rgba(72, 180, 153, 1)",
            },
          ]}
        >
          <Text
            style={[
              tw`text-xs`,
              {
                color: "rgba(72, 180, 153, 1)",
              },
            ]}
          >
            View Academy
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          tw`flex items-center justify-center bg-gray-200`,
          {
            width: null,
            resizeMode: "contain",
            height: 320,
          },
        ]}
      >
        <Text>No Image Provided</Text>
      </View>
    </View>
  );
};

export default MyAcademy;
