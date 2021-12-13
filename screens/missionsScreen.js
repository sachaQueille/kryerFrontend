import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Button, NativeBaseProvider, VStack, Center } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";

function MissionsScreen(props) {
  // async function buttonClick(e) {
  //   var responce = await fetch("http://192.168.0.30:3000/loadDeliveries", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: `idMission=${e.id}&status=${e.status}`,
  //   });

  //   responce = await responce.json();

   

    async function buttonClick(e){

        var  responce = await fetch("http://192.168.1.32:3000/loadDeliveries", {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `idMission=${e.id}&status=${e.status}`
            });

        responce = await responce.json();
     

        props.addDeliveries(responce);

    //     props.navigation.navigate("MissionsScreen2")
    // }

    props.navigation.navigate("MissionsScreen2");
  }

  var missions =
    props.missions.length != 0 ? (
      props.missions.map(function (e, i) {
        return (
          <Button
            variant="outline"
            key={i}
            mx="12"
            size="lg"
            marginBottom="5"
            onPress={() => buttonClick({ id: e._id, status: e.mission_status })}
          >
            <Text>
              {e.departure_journey} / {e.arrival_journey} le {e.date_journey}
            </Text>
          </Button>
        );
      })
    ) : (
      <Text>Tu n'as aucune missions à afficher</Text>
    );

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        {missions}
      </Center>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MissionsScreen);
