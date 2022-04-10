import tw from "tailwind-react-native-classnames";
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Image,
} from "react-native";
import MenuDrawer from "react-native-side-drawer";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title }) => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const toggleOpenOrClose = () => {
    setOpen(!open);
  };
  const drawerContent = () => {
    return (
      <View style={[tw`shadow-xl bg-white flex-1 p-5 flex`]}>
        <MaterialIcons
          style={tw`mb-12  w-10`}
          onPress={toggleOpenOrClose}
          name="close"
          size={27}
          color="#21294C"
        />
        <Image
          style={[tw`mx-auto mb-7 h-20 w-20 rounded-full`]}
          source={require("../Images/ProfilePic.png")}
        />
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
              toggleOpenOrClose();
            }}
            style={[
              tw`w-full rounded-lg flex flex-row mt-3 p-2 items-center mb-5 border-2 border-gray-200`,
            ]}
          >
            <Feather name="home" size={22} color="#21294C" />
            <Text style={tw`font-semibold ml-3`}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MyMatches");
              toggleOpenOrClose();
            }}
            style={[
              tw`w-full rounded-lg flex flex-row p-2 items-center mb-5 border-2 border-gray-200`,
            ]}
          >
            <Image
              style={{
                width: 22,
                height: 22,
              }}
              source={require("../icons/BatmintonCock.png")}
            />
            <Text style={tw`font-semibold ml-3`}>My Matches</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MyAcademy");
              toggleOpenOrClose();
            }}
            style={[
              tw`w-full rounded-lg flex flex-row p-2 items-center mb-5 border-2 border-gray-200`,
            ]}
          >
            <MaterialCommunityIcons
              name="soccer-field"
              size={22}
              color="#21294C"
            />
            <Text style={tw`font-semibold ml-3`}>My Academy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AllMatches");
              toggleOpenOrClose();
            }}
            style={[
              tw`w-full rounded-lg flex flex-row p-2 items-center mb-5 border-2 border-gray-200`,
            ]}
          >
            <SimpleLineIcons name="trophy" size={22} color="#21294C" />

            <Text style={tw`font-semibold ml-3`}>All matches</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={[tw`mx-auto h-20 w-48 mb-10 mt-auto`]}
          source={require("../Images/AppLogoDark.png")}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <MenuDrawer
        open={open}
        drawerContent={drawerContent()}
        drawerPercentage={70}
        animationTime={170}
        overlay={true}
      ></MenuDrawer>
      <View style={[tw`bg-white flex flex-row items-center p-4`]}>
        <TouchableOpacity style={tw`justify-end`} onPress={toggleOpenOrClose}>
          <MaterialIcons name="menu" size={30} color="#21294C" />
        </TouchableOpacity>
        <Text
          style={[
            tw`font-semibold ml-2`,
            {
              color: "#21294C",
              fontSize: 18,
            },
          ]}
        >
          {title}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
