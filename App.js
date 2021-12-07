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
import PurposeDetails from "./screens/purposedetails";
import NewMissionOne from "./screens/newmissionone";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackJourneyNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Journey" component={Journey} />
      <Stack.Screen name="NewMission" component={NewMission} />
      <Stack.Screen name="NewMissionOne" component={NewMissionOne} />
      <Stack.Screen name="CurrentMission" component={CurrentMission} />
      <Stack.Screen name="FinishedMissions" component={FinishedMissions} />
      <Stack.Screen name="PurposeJourney" component={PurposeJourney} />
      <Stack.Screen name="SendDelivery" component={SendDelivery} />
      <Stack.Screen name="PurposeDetails" component={PurposeDetails} />
    </Stack.Navigator>
  );
}


function StackHomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PurposeJourney" component={PurposeJourney} />
      <Stack.Screen name="SendDelivery" component={SendDelivery} />
      <Stack.Screen name="PurposeDetails" component={PurposeDetails} />
    </Stack.Navigator>
  );
}

export default function App(props) {

  return (
    <NavigationContainer >
      <Tab.Navigator

        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#3730a3' },
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'DeliveryStatus') {
              iconName = 'cube';
            } else if (route.name === 'Journey') {
              iconName = 'rocket';
            } else if (route.name === 'Tchat') {
              iconName = 'comments';
            } else if (route.name === 'User') {
              iconName = 'user';
            }
            return <FontAwesome name={iconName} size={25} color={color} />;
          },
          

        })}
        tabBarOptions={{
          activeTintColor: '#9b59b6',
          inactiveTintColor: '#c4b5fd',
          style: {
            backgroundColor: '#3730a3',
          }
        }}

      >
        <Tab.Screen
          name="Home"
          component={StackHomeNavigator}
        />
        <Tab.Screen
          name="DeliveryStatus"
          component={DeliveryStatus}
        />
        <Tab.Screen
          name="Journey"
          component={StackJourneyNavigator}
        />
        <Tab.Screen
          name="Tchat"
          component={Tchat}
        />
        <Tab.Screen
          name="User"
          component={User}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
