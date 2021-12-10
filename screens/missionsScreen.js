import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Button, NativeBaseProvider, VStack , Center} from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from "react-redux";


function MissionsScreen(props){

   

    async function buttonClick(e){

        var  responce = await fetch("http://172.17.1.42:3000/loadDeliveries", {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `idMission=${e}&status=${props.route.params.status}`
            });

        responce = await responce.json();
     

        props.addDeliveries(responce);
        props.addMissionId(e)

        props.navigation.navigate("MissionsScreen2")
    }


    var missions = (props.missions.length !=0 ) ? props.missions.map(function(e,i){
        return (
            <Button variant="outline"
            key={i}
            mx="12"
            size="lg"
            marginBottom="5"
            onPress={() => buttonClick(e._id)}
            >
            <Text>
                {e.departure_journey} / {e.arrival_journey} le {e.date_journey}
            </Text> 
            </Button> 
        )
    }) : <Text>tu n'as aucune missions a afficher</Text>


    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                {missions}
            </Center>
            
        </NativeBaseProvider>
    )
}

function mapStateToProps(state){
    return { missions: state.missionsReducer}
  }
  

  function mapDispatchToProps(dispatch) {
    return {
      addDeliveries: function(e) {
            dispatch( {type: 'addDeliveries', deliveries:e} )
        },
        addMissionId: function(e) {
            dispatch( {type: 'addMissionId', missionId:e} )
        }

    }
   };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MissionsScreen);