import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, NativeBaseProvider, VStack, Center, Box } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

function MissionsScreen(props) {
  async function buttonClick(e) {
    var responce = await fetch(`${global.ipa}loadDeliveries`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `idMission=${e}&status=${props.route.params.status}`,
    });

    responce = await responce.json();

    props.addDeliveries(responce);
    props.addMissionId(e);


    props.navigation.navigate("MissionsScreen2", { status: props.route.params.status })
  }

  var missions =
    (props.missions.length != 0) ? (
      props.missions.map(function (e, i) {
        return (
          <VStack key={e._id}>
            <TouchableOpacity onPress={() => buttonClick(e._id)} >
              <Box
                borderWidth="1"
                marginBottom="3"
                height="12"
                width="300"
              >
                <Text
                  style={{ fontSize: 16, textAlign: "center" }}>
                  {e.departure_journey} / {e.arrival_journey}
                </Text>
                <Text style={{ color: 'grey', textAlign: "center" }}>le {e.date_journey}</Text>
              </Box>
            </TouchableOpacity>
          </VStack>
        );
      })
    ) : (
      <Center marginTop="50%">
        <Text >Vous n'avez aucune missions à afficher</Text>
      </Center>
    );

  var statusScreen = "Missions Accomplies"
  if (props.route.params.status == "newMission") {
    statusScreen = "Nouvelles Missions"
  } else if (props.route.params.status == "currentMission") {
    statusScreen = "Missions  en cours"
  }

  return (
    <NativeBaseProvider >
      <Center
        style={{ backgroundColor: "indigo" }}
        _text={{
          color: "#ffffff",
          fontWeight: "600",
          fontSize: "32",
          marginTop: "10%",

        }}
        height={120}
        width="100%"
      >
        {statusScreen}
      </Center>

      <ScrollView>
        <Center flex={1} px="3" marginTop="20">
          {missions}
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}

function mapStateToProps(state) {
  return { missions: state.missionsReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    addDeliveries: function (e) {
      dispatch({ type: "addDeliveries", deliveries: e });
    },
    addMissionId: function (e) {
      dispatch({ type: "addMissionId", missionId: e });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MissionsScreen);
