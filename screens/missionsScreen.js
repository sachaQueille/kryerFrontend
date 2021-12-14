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

    props.addDeliveries(responce);
    props.addMissionId(e);


    props.navigation.navigate("MissionsScreen2",{status:props.route.params.status})
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
            borderColor="black"
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

    var statusScreen = <Text style={{fontSize:25,color:'#ffffff', marginTop:"10%"}}> Missions Accomplies</Text>
    if (props.route.params.status== "newMission"){
      statusScreen =  <Text style={{fontSize:25,color:'#ffffff', marginTop:"10%"}}> Nouvelles Missions</Text>
    }else if (props.route.params.status == "currentMission"){
      statusScreen = <Text style={{fontSize:25,color:'#ffffff', marginTop:"10%"}}> Missions  en cours</Text>
    }


  return (
    <NativeBaseProvider >
      
      <Center           
                style={{ backgroundColor: "indigo" }}
                _text={{
                    color: "#ffffff",
                    fontWeight: "600",
                    fontSize: "32",

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
