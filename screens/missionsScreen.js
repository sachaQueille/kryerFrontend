import React from "react";
import { Text, ScrollView, Image } from "react-native";
import {  NativeBaseProvider, VStack, Center, Box } from "native-base";

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

    props.addDeliveries(responce.result);
    props.addMissionId(e);
   
  

    props.navigation.navigate("MissionsScreen2", {
      status: props.route.params.status,
      etatCapacity: responce.etatCapacity,
      cagnotte: responce.cagnotte,
    });
  }

  
  var missions =
    props.missions.length != 0 ? (
      props.missions.map(function (e, i) {
        return (
          <VStack key={e._id}>
            <TouchableOpacity onPress={() => buttonClick(e._id)}>
              <Box borderWidth="1" marginBottom="3" height="12" width="320" borderRadius="15" bgColor="cyan.200"
                        borderColor="cyan.200">
                <Text style={{ fontSize: 16, textAlign: "center", marginTop:"2%",  }}>
                  {e.departure_journey} / {e.arrival_journey}
                </Text>
                <Text style={{ color: "grey", textAlign: "center" }}>
                  le {e.date_journey}
                </Text>
              </Box>
            </TouchableOpacity>
          </VStack>

        );
      })
    ) : (
      <Text>Tu n'as aucune missions à afficher</Text>
    );

  var statusScreen = "Missions Accomplies";
  if (props.route.params.status == "newMission") {
    statusScreen = "Nouvelles Missions";
  } else if (props.route.params.status == "currentMission") {
    statusScreen = "Missions  en cours";
  }

  return (
    
    <NativeBaseProvider>
      
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
      <Image source={require(`../assets/go.png`)} style={{flex:1, justifyContent:'center', alignItems:'center',position:"absolute",opacity:0.8,marginTop:'80%',marginLeft:"5%"}} width="60%" height="30%"/>
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MissionsScreen);
