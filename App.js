import React from "react";
import { FontAwesome } from "@expo/vector-icons";



import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/home";
import MyDelivery from "./screens/delivery";
import DeliveryStatus from "./screens/deliverystatus";
import Journey from "./screens/journey";
import User from "./screens/user";
import Tchat from "./screens/tchat";
import PurposeJourney from "./screens/purposejourney";
import SendDelivery from "./screens/senddelivery";
import KryerList from "./screens/kryerList";
import PurposeDetails from "./screens/purposedetails";
import Kryer from "./screens/kryer";
import TerminateMission from "./screens/terminatemission";
import ReceipientCoordinate from "./screens/receipientCoordinate";
import signIn from "./screens/signIn";
import signUp from "./screens/signUp";
import MissionsScreen from "./screens/missionsScreen";
import MissionsScreen2 from "./screens/missionsScreen2";
import MissionsScreen3 from "./screens/missionsScreen3";
import TchatDetails from "./screens/tchatdetails";
import cameraScreen from "./screens/cameraScreen";

// redux
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import kryerListReducer from "./reducers/kryerListReducer";
import kryerReducer from "./reducers/kryerReducer";
import userReducer from "./reducers/userReducer";
import infoDelivery from "./reducers/infoDeliveryReducer";
import missionsReducer from "./reducers/missionsReducer";
import deliveriesReducer from "./reducers/deliveriesReducer";
import missionIdReducer from "./reducers/missionIdReducer";
import photoReducer from "./reducers/photoReducer";


import variable from "./vglobal/variable";


const store = createStore(
  combineReducers({
    kryerListReducer,
    kryerReducer,
    userReducer,
    infoDelivery,
    missionsReducer,
    deliveriesReducer,
    missionIdReducer,
    photoReducer
   
  })
);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackJourneyNavigator(props) {
  

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}  >
      <Stack.Screen name="JourneyScreen" component={Journey} />
      <Stack.Screen name="PurposeJourney" component={PurposeJourney} />
      <Stack.Screen name="SendDelivery" component={SendDelivery} />
      <Stack.Screen name="PurposeDetails" component={PurposeDetails} />
      <Stack.Screen name="MissionsScreen" component={MissionsScreen} />
      <Stack.Screen name="MissionsScreen2" component={MissionsScreen2} />
      <Stack.Screen name="MissionsScreen3" component={MissionsScreen3} />
      <Stack.Screen name="TerminateMission" component={TerminateMission} />
    </Stack.Navigator>
  );
}

function StackHomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home}/>
      <Stack.Screen name="PurposeJourney" component={PurposeJourney} />
      <Stack.Screen name="SendDelivery" component={SendDelivery} />
      <Stack.Screen name="PurposeDetails" component={PurposeDetails} />
      <Stack.Screen name="KryerList" component={KryerList} />
      <Stack.Screen name="Kryer" component={Kryer} />
      <Stack.Screen name="ReceipientCoordinate" component={ReceipientCoordinate}/>
      <Stack.Screen name="CameraScreen" component={cameraScreen}/>
    </Stack.Navigator>
  );
}

function StackProfilNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="signIn" component={signIn} />
      <Stack.Screen name="signUp" component={signUp} />
    </Stack.Navigator>
  );
}

function StackDeliveryNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyDelivery" component={MyDelivery} />
      <Stack.Screen name="DeliveryStatus" component={DeliveryStatus} />
    </Stack.Navigator>
  );
}

function StackTchatNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tchats" component={Tchat} />
      <Stack.Screen name="TchatDetails" component={TchatDetails} />
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
          <Tab.Screen name="Accueil" component={StackHomeNavigator} />
          <Tab.Screen name="Colis" component={StackDeliveryNavigator} />
          <Tab.Screen name="Missions"  component={StackJourneyNavigator} />
          <Tab.Screen name="Tchat"  component={StackTchatNavigator} />
          <Tab.Screen name="Profil" component={StackProfilNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

