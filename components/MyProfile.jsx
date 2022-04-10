import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";

const BlueBox = ({ heading, image, details, imageStyles }) => {
  return (
    <View
      style={[
        tw`flex flex-row p-2 h-20 w-40 mr-3 items-center mt-2 rounded-lg`,
        {
          borderWidth: 2,
          borderColor: "#E3E8F5",
          backgroundColor: "#E3E8F5",
        },
      ]}
    >
      <Image style={tw`${imageStyles}`} source={image} />
      <View>
        <Text
          style={[
            {
              fontSize: 8,
              color: "#324371",
            },
          ]}
        >
          {heading}
          {"\n"}
        </Text>
        <Text
          style={[
            tw`font-bold`,
            {
              fontSize: 9,
              color: "#324371",
            },
          ]}
        >
          {details}
        </Text>
      </View>
    </View>
  );
};

const GreenBoxes = ({ heading, numbers }) => {
  return (
    <View
      style={[
        tw`flex items-center flex-col p-2 h-20 w-40 mr-3 mb-3  items-center rounded-lg`,
        {
          borderWidth: 2,
          borderColor: "#rgba(143, 209, 122, 1)",
          backgroundColor: "rgba(143, 209, 122, 0.2)",
        },
      ]}
    >
      <Text
        style={{
          fontSize: 10,
          color: "rgba(33, 41, 76, 1)",
        }}
      >
        {heading}
      </Text>
      <Text
        style={[
          tw`font-bold text-2xl`,
          {
            color: "rgba(33, 41, 76, 1)",
          },
        ]}
      >
        {numbers}
      </Text>
    </View>
  );
};

const MatchesWinsLoses = () => {
  return (
    <View
      style={tw`mx-auto py-4 flex flex-row items-center justify-center flex-wrap`}
    >
      <View
        style={[
          tw`flex flex-row p-2 h-16 justify-between w-40 mr-3 mb-3 items-center rounded-lg`,
          {
            borderWidth: 2,
            borderColor: "#E3E8F5",
            backgroundColor: "#E3E8F5",
          },
        ]}
      >
        <MaterialIcons name="sports-tennis" size={30} color="black" />
        <Text
          style={[
            tw`font-bold`,
            {
              color: "rgba(50, 67, 113, 1)",
              borderWidth: 2,
              borderColor: "rgba(227, 232, 245, 1)",
            },
          ]}
        >
          Matches
        </Text>
        <Text
          style={[
            tw`font-bold`,
            {
              color: "rgba(37, 179, 158, 1)",
            },
          ]}
        >
          10
        </Text>
      </View>
      <View
        style={[
          tw`flex flex-row p-2 h-16 justify-between w-40 mr-3 mb-3 items-center rounded-lg`,
          {
            borderWidth: 2,
            borderColor: "#E3E8F5",
            backgroundColor: "#E3E8F5",
          },
        ]}
      >
        <Ionicons name="ios-medal-outline" size={30} color="black" />
        <Text
          style={[
            tw`font-bold`,
            {
              color: "rgba(50, 67, 113, 1)",
              borderWidth: 2,
              borderColor: "rgba(227, 232, 245, 1)",
            },
          ]}
        >
          Wins
        </Text>
        <Text
          style={[
            tw`font-bold`,
            {
              color: "rgba(37, 179, 158, 1)",
            },
          ]}
        >
          10
        </Text>
      </View>
      <View
        style={[
          tw`flex flex-row p-2 h-16 justify-between w-40 mr-3 mb-3 items-center rounded-lg`,
          {
            borderWidth: 2,
            borderColor: "#E3E8F5",
            backgroundColor: "#E3E8F5",
          },
        ]}
      >
        <MaterialIcons name="stacked-bar-chart" size={30} color="black" />
        <Text
          style={[
            tw`font-bold`,
            {
              color: "rgba(50, 67, 113, 1)",
              borderWidth: 2,
              borderColor: "rgba(227, 232, 245, 1)",
            },
          ]}
        >
          Losses
        </Text>
        <Text
          style={[
            tw`font-bold`,
            {
              color: "rgba(171, 7, 56, 1)",
            },
          ]}
        >
          10
        </Text>
      </View>
    </View>
  );
};

const MyProfile = () => {
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
            tw`font-bold px-7 py-3`,
            {
              color: "#324371",
            },
          ]}
        >
          MY PROFILE
        </Text>
      </View>
      <View style={tw`px-3 py-4 rounded-lg`}>
        <View style={tw`mx-auto flex flex-row`}>
          <View style={tw`bg-white`}>
            <View
              style={[
                tw`border-2 border-gray-200 rounded-lg`,
                {
                  alignSelf: "flex-start",
                },
              ]}
            >
              <Image
                style={{
                  width: 182.4,
                  height: 141.6,
                }}
                source={require("../Images/PVSindhu.png")}
              />
            </View>
          </View>
          <View style={tw`justify-between ml-3`}>
            <View style={tw``}>
              <Text
                style={[
                  tw`text-xs`,
                  {
                    color: "#324371",
                  },
                ]}
              >
                PLAYER NAME
              </Text>
              <Text
                style={[
                  tw`font-bold text-xl`,
                  {
                    color: "#324371",
                  },
                ]}
              >
                PV Sindhu
              </Text>
            </View>
            <View style={tw`flex flex-row items-center justify-between`}>
              <View style={tw``}>
                <Text
                  style={[
                    tw`text-xs`,
                    {
                      color: "#324371",
                    },
                  ]}
                >
                  AGE
                </Text>
                <Text
                  style={[
                    tw`font-bold text-xl`,
                    {
                      color: "#324371",
                    },
                  ]}
                >
                  26
                </Text>
              </View>
              <Image
                style={{
                  width: 45,
                  height: 45,
                }}
                source={require("../Images/PVSindhusSchool.png")}
              />
            </View>
          </View>
        </View>
        {/* <BlueBoxes /> */}
        <View
          style={tw`mx-auto py-4 mb-8 flex flex-row items-center flex-1 justify-center flex-wrap`}
        >
          <BlueBox
            heading={"PLAYER LEVEL"}
            image={require("../icons/PlayerLevelIcon.png")}
            details={"LEVEL 7"}
            imageStyles={"mr-2 h-14 w-11"}
          />
          <BlueBox
            heading={"PLAYING"}
            image={require("../icons/SportIcon.png")}
            details={"ATTACK"}
            imageStyles={"mr-2 h-12"}
          />
          <BlueBox
            heading={"HANDEDNESS"}
            image={require("../icons/HandednessIcon.png")}
            details={"RIGHT"}
            imageStyles={"mr-2 h-12 w-12"}
          />
        </View>
        <View
          style={tw`mx-auto py-4 mb-8 flex flex-row items-center flex-1 justify-center flex-wrap`}
        >
          <GreenBoxes heading={"ATTACK RATING"} numbers={"56"} />
          <GreenBoxes heading={"CAREER WINS"} numbers={"145"} />
          <GreenBoxes heading={"CAREER ERRORS"} numbers={"92"} />
          <GreenBoxes heading={"DEFENCE RATING"} numbers={"86%"} />
          <GreenBoxes heading={"WINNER%"} numbers={"11%"} />
          <GreenBoxes heading={"ERROR%"} numbers={"07%"} />
        </View>
        <MatchesWinsLoses />
      </View>
    </View>
  );
};

export default MyProfile;
