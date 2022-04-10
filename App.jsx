import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Platform,
  StatusBar as AndroidStatusBarHeight,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import MyMatchesScreen from "./screens/MyMatchesScreen";
import MatchScreen from "./screens/MatchScreen";
import MatchDataScreen from "./screens/MatchDataScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <View
      style={{
        marginTop:
          Platform.OS === "android" ? AndroidStatusBarHeight.currentHeight : 0,
        flex: 1,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"Home"}
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureDirection: "horizontal",
            gestureEnabled: true,
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MyMatches" component={MyMatchesScreen} />
          <Stack.Screen name="Match" component={MatchScreen} />
          <Stack.Screen name="MatchData" component={MatchDataScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor="white" />
    </View>
  );
}
