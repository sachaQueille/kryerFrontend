import React from "react";
import {  ScrollView ,Image} from "react-native";
import { Button, NativeBaseProvider, VStack, Center } from "native-base";
import { connect } from "react-redux";

function Journey(props) {


  async function buttonClick(e) {

    //recupere les missions selon le bouton pressé et envoi le missionList dans le store.
    // le tatut du bouton est envoyé a la page suivante pour pouvoir filtrer selon ce statut dans la route loadDelivery
    if (props.user) {
      var responce = await fetch(`${global.ipa}loadMissions`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `token=${props.user.token}&status=${e}`,
      });

      responce = await responce.json();

      props.addMissions(responce);

      props.navigation.navigate("MissionsScreen", { status: e });
    } else {
      props.navigation.navigate("Profil");
    }
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
        Missions
      </Center>
      <Image source={require("../assets/plan.png")} style={{flex:1, justifyContent:'center', alignItems:'center',position:"absolute",marginTop:'5%',opacity:0.8}} width="100%" height="60%"/>
      <ScrollView>
      
      <VStack
        mx="auto"
        marginTop="35%"
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
                    onPress={() => buttonClick("finishMission")}
                    mx="12"
                    size="lg"
                >
                    Missions accomplies
                </Button>
            </VStack>
            </ScrollView>
           
        </NativeBaseProvider>
    );
}

function mapStateToProps(state) {
  return { user: state.userReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    addMissions: function (e) {
      dispatch({ type: "addMissions", missions: e });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Journey);