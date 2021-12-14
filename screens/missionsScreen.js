import React, { useEffect } from "react";
import { View, Text, ScrollView} from "react-native";
import { Button, NativeBaseProvider, VStack, Center } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";

function MissionsScreen(props) {
  async function buttonClick(e) {
    var responce = await fetch(`${global.ipa}loadDeliveries`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `idMission=${e}&status=${props.route.params.status}`,
    });

    responce = await responce.json();
    console.log(responce)

    props.addDeliveries(responce.result);
    props.addMissionId(e);


    props.navigation.navigate("MissionsScreen2",{status:props.route.params.status, etatCapacity: responce.etatCapacity , cagnotte: responce.cagnotte})
    }

   

  var missions =
    (props.missions.length != 0) ? (
      props.missions.map(function (e, i) {
        return (
          <Button
            variant="outline"
            key={i}
            mx="12"
            size="lg"
            marginBottom="5"
            onPress={() => buttonClick(e._id)}
            colorScheme="indigo"
            width="200"
            >
            <Text style={{fontSize:16}}>
              {e.departure_journey} / {e.arrival_journey} 
            </Text>
            <Text style={{color:'grey',textAlign:"center"}}>le {e.date_journey}</Text>
          </Button>
        );
      })
    ) : (
      <Text>Tu n'as aucune missions à afficher</Text>
    );

    var statusScreen = <Text style={{fontSize:25,color:'#ffffff'}}> Missions Accomplies :</Text>
    if (props.route.params.status== "newMission"){
      statusScreen =  <Text style={{fontSize:25,color:'#ffffff'}}> Nouvelles Missions :</Text>
    }else if (props.route.params.status == "currentMission"){
      statusScreen = <Text style={{fontSize:25,color:'#ffffff'}}> Missions  en cours :</Text>
    }


  return (
    <NativeBaseProvider >
      <ScrollView>
      <Center
                style={{ backgroundColor: "indigo" }}
                _text={{
                    color: "#ffffff",
                    fontWeight: "600",
                    fontSize: "32",
                    marginTop: "10%"

                }}
                height={120}
                width="100%">
                {statusScreen}
      </Center>
     
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
