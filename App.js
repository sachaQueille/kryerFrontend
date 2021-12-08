import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/home";
import DeliveryStatus from "./screens/deliverystatus";
import Journey from "./screens/journey";
import User from "./screens/user";
import Tchat from "./screens/tchat";
import NewMission from "./screens/newmission";
import CurrentMission from "./screens/currentmission";
import FinishedMissions from "./screens/finishedmissions";
import PurposeJourney from "./screens/purposejourney";
import SendDelivery from "./screens/senddelivery";
import KryerList from "./screens/kryerList";
import NewMissionOne from "./screens/newmissionone";
import PurposeDetails from "./screens/purposedetails";
import Kryer from "./screens/kryer";
import CurrentMissionClient from "./screens/currentmissionsclients";
import TerminateMission from "./screens/terminatemission";

// redux
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import kryerListReducer from "./reducers/kryerListReducer";
import kryerReducer from "./reducers/kryerReducer";

const store = createStore(combineReducers({ kryerListReducer, kryerReducer }));

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackJourneyNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="JourneyScreen" component={Journey} />
      <Stack.Screen name="NewMission" component={NewMission} />
      <Stack.Screen name="NewMissionOne" component={NewMissionOne} />
      <Stack.Screen name="CurrentMission" component={CurrentMission} />
      <Stack.Screen name="FinishedMissions" component={FinishedMissions} />
      <Stack.Screen name="PurposeJourney" component={PurposeJourney} />
      <Stack.Screen name="SendDelivery" component={SendDelivery} />
      <Stack.Screen name="PurposeDetails" component={PurposeDetails} />
      <Stack.Screen
        name="CurrentMissionClient"
        component={CurrentMissionClient}
      />
      <Stack.Screen name="TerminateMission" component={TerminateMission} />
    </Stack.Navigator>
  );
}

function StackHomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="PurposeJourney" component={PurposeJourney} />
      <Stack.Screen name="SendDelivery" component={SendDelivery} />
      <Stack.Screen name="PurposeDetails" component={PurposeDetails} />
      <Stack.Screen name="KryerList" component={KryerList} />
      <Stack.Screen name="Kryer" component={Kryer} />
    </Stack.Navigator>
  );
}

export default function App(props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: { backgroundColor: "indigo" },
            tabBarIcon: ({ color }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "DeliveryStatus") {
                iconName = "cube";
              } else if (route.name === "Journey") {
                iconName = "rocket";
              } else if (route.name === "Tchat") {
                iconName = "comments";
              } else if (route.name === "User") {
                iconName = "user";
              }
              return <FontAwesome name={iconName} size={25} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={StackHomeNavigator} />
          <Tab.Screen name="DeliveryStatus" component={DeliveryStatus} />
          <Tab.Screen name="Journey" component={StackJourneyNavigator} />
          <Tab.Screen name="Tchat" component={Tchat} />
          <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
