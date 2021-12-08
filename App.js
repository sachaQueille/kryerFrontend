import React from "react";
import { FontAwesome } from "@expo/vector-icons";

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
import ReceipientCoordinate from "./screens/receipientCoordinate";
import ConnectionScreen from "./screens/connectionScreen";
import signIn from "./screens/signIn";
import signUp from "./screens/signUp";

// redux
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import kryerListReducer from "./reducers/kryerListReducer";
import kryerReducer from "./reducers/kryerReducer";
import infoDelivery from "./reducers/infoDeliveryReducer";

<<<<<<< HEAD

const store = createStore(combineReducers({ kryerListReducer, kryerReducer, infoDelivery }));
=======
const store = createStore(combineReducers({ kryerListReducer, kryerReducer }));
>>>>>>> b90746c3f97e05f9c1927eb3240db0bbdf65d273

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
      <Stack.Screen name="SendDelivery" component={SendDelivery}/>
      <Stack.Screen name="PurposeDetails" component={PurposeDetails} />
<<<<<<< HEAD
      <Stack.Screen name="CurrentMissionClient" component={CurrentMissionClient}/>
=======
      <Stack.Screen
        name="CurrentMissionClient"
        component={CurrentMissionClient}
      />
>>>>>>> b90746c3f97e05f9c1927eb3240db0bbdf65d273
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
      <Stack.Screen
        name="ReceipientCoordinate"
        component={ReceipientCoordinate}
      />
    </Stack.Navigator>
  );
}

function StackProfilNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {props.user ? (
        <Stack.Screen name="User" component={User} />
      ) : (
        <Stack.Screen name="ConnectionScreen" component={ConnectionScreen} />
      )}
      <Stack.Screen name="signIn" component={signIn} />
      <Stack.Screen name="signUp" component={signUp} />
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
              if (route.name === "Accueil") {
                iconName = "home";
              } else if (route.name === "Colis") {
                iconName = "cube";
              } else if (route.name === "Missions") {
                iconName = "rocket";
              } else if (route.name === "Tchat") {
                iconName = "comments";
              } else if (route.name === "Profil") {
                iconName = "user";
              }
              return <FontAwesome name={iconName} size={25} color={color} />;
            },
            tabBarActiveTintColor: "#22d3ee",
            tabBarInactiveTintColor: "#FFFFFF",
          })}
        >
<<<<<<< HEAD
          <Tab.Screen name="Home" component={StackHomeNavigator} /> 
          <Tab.Screen name="DeliveryStatus" component={DeliveryStatus} />
          <Tab.Screen name="Journey" component={StackJourneyNavigator} />
=======
          <Tab.Screen name="Accueil" component={StackHomeNavigator} />
          <Tab.Screen name="Colis" component={DeliveryStatus} />
          <Tab.Screen name="Missions" component={StackJourneyNavigator} />
>>>>>>> b90746c3f97e05f9c1927eb3240db0bbdf65d273
          <Tab.Screen name="Tchat" component={Tchat} />
          <Tab.Screen name="Profil" component={StackProfilNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
