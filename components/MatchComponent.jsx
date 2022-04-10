import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const MatchComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`rounded-lg m-3`}>
      <View
        style={[
          tw`rounded-t-lg flex flex-row items-center justify-between px-5 py-3 `,
          {
            backgroundColor: "rgba(50, 67, 113, 1)",
          },
        ]}
      >
        <Text style={tw`text-white`}>Jwala Gutta Academy</Text>
        <Text style={tw`text-white`}>26 Nov, 2016</Text>
      </View>
      <View
        style={tw`rounded-b-lg bg-white border-gray-300 border-2 border-t-0`}
      >
        <View style={tw` flex flex-row items-center justify-between px-6 py-4`}>
          <View style={tw`flex flex-row items-center justify-between flex-1`}>
            <View>
              <View
                style={[
                  tw`border-2 border-gray-300 rounded-lg mr-auto`,
                  {
                    width: 89,
                    height: 81,
                  },
                ]}
              >
                <Image
                  style={{
                    width: 85,
                    height: 77,
                  }}
                  source={require("../Images/ShrikanthKadambi.png")}
                />
              </View>
              <Text
                style={[
                  tw`font-semibold text-xs text-left mt-2`,
                  {
                    color: "rgba(33, 41, 76, 1)",
                  },
                ]}
              >
                Shrikanth{"\n"}Kadambi
              </Text>
            </View>

            <View>
              <View
                style={[
                  tw`border-2 border-gray-300  rounded-lg ml-auto`,
                  {
                    width: 89,
                    height: 81,
                  },
                ]}
              >
                <Image
                  style={{
                    width: 85,
                    height: 77,
                  }}
                  source={require("../Images/TanongsakSaensomboonsuk.png")}
                />
              </View>

              <Text
                style={[
                  tw`font-semibold text-xs text-right mt-2`,
                  {
                    color: "rgba(33, 41, 76, 1)",
                  },
                ]}
              >
                Tanongsak{"\n"}Saensomboonsuk
              </Text>
            </View>
          </View>
        </View>
        <View style={tw`-mt-36 `}>
          <View style={[tw``]}>
            <View
              style={[
                tw`py-1 px-3 mx-auto rounded-sm`,
                {
                  alignSelf: "flex-start",
                  backgroundColor: "rgba(204, 215, 242, 0.57)",
                  borderWidth: 2,
                  borderColor: "rgba(141, 162, 212, 1)",
                },
              ]}
            >
              <View style={tw`flex flex-row items-center`}>
                <Text
                  style={[
                    tw`text-gray-400 font-bold`,
                    {
                      fontSize: 12,
                    },
                  ]}
                >
                  11 -{" "}
                </Text>
                <Text
                  style={[
                    {
                      color: "rgba(50, 67, 113, 1)",
                      fontSize: 12,
                    },
                    tw`font-bold`,
                  ]}
                >
                  21
                </Text>
              </View>
              <View style={tw`flex flex-row items-center my-2`}>
                <Text
                  style={[
                    {
                      color: "rgba(50, 67, 113, 1)",
                      fontSize: 12,
                    },
                    tw`font-bold`,
                  ]}
                >
                  21 -
                </Text>
                <Text
                  style={[
                    tw`text-gray-400 font-bold`,
                    {
                      fontSize: 12,
                    },
                  ]}
                >
                  14
                </Text>
              </View>
              <View style={tw`flex flex-row items-center`}>
                <Text
                  style={[
                    {
                      color: "rgba(50, 67, 113, 1)",
                      fontSize: 12,
                    },
                    tw`font-bold`,
                  ]}
                >
                  21
                </Text>
                <Text
                  style={[
                    tw`text-gray-400 font-bold`,
                    {
                      fontSize: 12,
                    },
                  ]}
                >
                  {" "}
                  - 19
                </Text>
              </View>
            </View>
            <View
              style={[
                tw`mx-auto px-3 py-1 my-5 rounded-md`,
                {
                  backgroundColor: "rgba(204, 215, 242, 0.57)",
                },
              ]}
            >
              <Text
                style={[
                  tw` font-semibold`,
                  {
                    color: "rgba(33, 41, 76, 1)",
                  },
                ]}
              >
                v/s
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Match");
            }}
            style={[
              tw`mb-5 px-4 py-2 rounded-lg mx-auto`,
              {
                borderWidth: 1,
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

export default MatchComponent;
