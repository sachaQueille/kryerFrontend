import React, { useEffect } from "react";
import { View, Text , ScrollView , Image} from "react-native";
import { Button, NativeBaseProvider, VStack } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";

function Home(props) {
  useEffect(() => {
    AsyncStorage.getItem("token", function (error, data) {
      if (data) {
        async function loadUser() {
          var user = await fetch(
            `${global.ipa}getUser?token=${JSON.parse(data)}`
          );
          user = await user.json();

          props.addUser(user.user[0]);
        }
        loadUser();
      }
    });
  }, []);

  return (
    <NativeBaseProvider>
      <Image source={require("../assets/home.png")} style={{flex:1, justifyContent:'center', alignItems:'center',position:"absolute"}} width="100%" height="100%"/>
      <ScrollView>
      
      <VStack
        mx="auto"
        marginTop="45%"
        justifyContent="center"
        alignItems="center"
      >
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>KRYER</Text>
     
 </VStack>
      <VStack
        mx="auto"
        marginTop="5%"
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
      </ScrollView>
      
    </NativeBaseProvider>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: function (e) {
      dispatch({ type: "addUser", user: e });
    },
  };
}

export default connect(null, mapDispatchToProps)(Home);
