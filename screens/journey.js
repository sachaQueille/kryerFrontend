import React from "react";
import { View, Text } from "react-native";
import { Button, NativeBaseProvider, VStack, } from "native-base";
import { connect } from "react-redux";

function Journey(props) {

  
    
    async function buttonClick(e){
        if(props.user){
        var  responce = await fetch("http://192.168.1.109:3000/loadMissions", {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `idKryer=${props.user._id}&status=${e}`
            });

        responce = await responce.json();

      
        props.addMissions(responce);

        props.navigation.navigate("MissionsScreen");
        
    }else{
        props.navigation.navigate('Profil');
    }
    }

    return (
        <NativeBaseProvider>
            <VStack
                mx="auto"
                marginTop="50%"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>KRYER</Text>
            </VStack>

            <VStack
                mx="auto"
                marginTop="10%"
                justifyContent="center"
                alignItems="center"
            >

                <Button
                    style={{ backgroundColor: "indigo" }}
                    onPress={() => buttonClick("newMission")}
                    marginBottom={10}
                    marginTop={20}
                    mx="12"
                    size="lg"
                >
                    Nouvelles missions
                </Button>

                <Button
                    style={{ backgroundColor: "indigo" }}
                    onPress={() => buttonClick("currentMission")}
                    marginBottom={10}
                    mx="12"
                    size="lg"
                >
                    Missions en cours
                </Button>
                <Button
                    style={{ backgroundColor: "indigo" }}
                    onPress={() => buttonClick("finishedMission")}
                    mx="12"
                    size="lg"
                >
                    Missions accomplies
                </Button>
            </VStack>
        </NativeBaseProvider>
    );
}

function mapStateToProps(state){
    return { user: state.userReducer}
  }
  

  function mapDispatchToProps(dispatch) {
    return {
        addMissions: function(e) {
            dispatch( {type: 'addMissions', missions: e } )
        }
    }
   };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Journey);