import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Button, NativeBaseProvider, VStack } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from "react-redux";

function Home(props) {


    useEffect(()=>{
            AsyncStorage.getItem("token", function(error, data) {
           

            if (data){
                async function loadUser(){
                var user = await fetch(`http://192.168.1.109:3000/getUser?token=${JSON.parse(data)}`);
                user = await user.json();
               
                props.addUser(user.user[0]);
            }
            
            loadUser()
            
            } 
           
          });
        
       

    },[])

    return (
        <NativeBaseProvider>
            <VStack
                mx="auto"
                marginTop="40%"
                justifyContent="center"
                alignItems="center"
            >
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>KRYER</Text>
            </VStack>

            <VStack
                mx="auto"
                marginTop="30%"
                justifyContent="center"
                alignItems="center"
            >
                <Text>Envoyez vos colis à l'international à moindre frais</Text>

                <Button
                    style={{ backgroundColor: "indigo" }}
                    onPress={() => props.navigation.navigate("PurposeJourney")}
                    marginBottom={10}
                    marginTop={20}
                    mx="12"
                    size="lg"
                >
                    Proposer une mission
                </Button>

                <Button
                    style={{ backgroundColor: "indigo" }}
                    onPress={() => props.navigation.navigate("SendDelivery")}
                    mx="12"
                    size="lg"
                >
                    Envoyer un colis
                </Button>
            </VStack>
        </NativeBaseProvider>
    );
}


function mapDispatchToProps(dispatch) {
    return {
      addUser: function(e) {
            dispatch( {type: 'addUser', user:e} )
        }
    }
   };

   export default connect(
    null,
    mapDispatchToProps
    )(Home);

