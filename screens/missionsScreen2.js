import React, { useEffect, useState } from "react";
import {
  Box,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Heading,
  Progress,
 
} from "native-base";

import { FontAwesome } from "@expo/vector-icons";

import { connect } from 'react-redux';
import { TouchableOpacity , Image, ScrollView} from "react-native";

function MissionsScreen2(props) {
  const [inProgress, setInProgress] = useState(0);
  const [cagnotte, setCagnotte] = useState(0);

  useEffect(() => {
    setInProgress(props.route.params.etatCapacity);
    setCagnotte(props.route.params.cagnotte);
  }, []);

  function deliveryClick(e) {
    props.navigation.navigate("MissionsScreen3", e);
  }

  var deliveries =
    props.deliveries.length != 0 ? (
      props.deliveries.map(function (e, i) {
        return (
          <TouchableOpacity onPress={() => deliveryClick(e)} key={i}>
            <Box>
              <HStack
                borderBottomWidth="1"
                width="300"
                height="20"
                space="3"
                justifyContent="space-between"
              >
                <Avatar
                  margin="4"
                  key={`avatar${i}`}
                  size="48px"
                  source={{
                    uri: e.infoExpeditor.avatar,
                  }}
                  bg="transparent"
                />
                <VStack>
                  <Text margin="4" key={`username${i}`} fontWeight="bold">
                    {e.infoExpeditor.firstName} {e.infoExpeditor.lastName}
                  </Text>
                </VStack>
                <Spacer />

                <Center>
                  <Text fontSize="xs" fontWeight="bold" alignSelf="flex-start">
                    {e.weigth} kg
                  </Text>
                  <FontAwesome
                    name="cube"
                    size={32}
                    type="Ionicons"
                    color="indigo"
                  />
                </Center>

                    </HStack>
                </Box>
            </TouchableOpacity>

        )
      }) 
    )
    : <Text>tu n'as aucune demande pour cette mission </Text>

    // affichage different selon l'etat de la mission
    var statusScreen = "Missions Accomplies";
    var nameImage = <Image source={require(`../assets/winner.png`)} style={{flex:1, justifyContent:'center', alignItems:'center',position:"absolute",marginTop:'115%',marginLeft:'20%',opacity:0.8}} width="60%" height="30%"/>
    if (props.route.params.status == "newMission") {
        statusScreen = "Nouvelles Missions";
        nameImage= <Image source={require(`../assets/question.png`)} style={{flex:1, justifyContent:'center', alignItems:'center',position:"absolute",marginTop:"90%",marginLeft:'35%',opacity:0.8}} width="75%" height="50%"/>
    } else if (props.route.params.status == "currentMission") {
        statusScreen = "Missions en cours";
        nameImage = null;
    }

   

    return (
        <NativeBaseProvider>
            
            <Center
                style={{ backgroundColor: "indigo" }}
                _text={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: "32",
                    marginTop: "10%",

                }}
                height={120}
                width="100%">
                {statusScreen}
        </Center>
        
       {nameImage}

       {/* si on est dans mission en cours ou mission accomplie affiche la cagnotte et l'etat de la capacityTransport */}
        {(props.route.params.status !== "newMission" && props.deliveries.length !==0)?
            <Center marginTop="30">
                <Box w="80%">
                    <VStack space="sm">
                        <Heading textAlign="center" mb="2" size="sm">
                            capacitée de transport restante :
                        </Heading>
                        <VStack style={{marginTop:3}} >
                            <Progress size="lg" colorScheme="purple" value={inProgress} />

                        </VStack>
                    </VStack>
                </Box>
                <Box style={{marginTop:"10%"}}>
                    <Center>
                    <Text style={{fontSize:24,position:"relative",zIndex:1,paddingTop:20,marginTop:20,color:"white"}}> {cagnotte} </Text>
                    <Image source={require('../assets/euro.png')} style={{position:"absolute"}} width="500%" height="200%"/>
                    </Center>
                </Box>
            </Center> : null }
            <ScrollView style={{marginTop:'10%'}}>
            <Center flex={1} px="3" marginTop="10">
                {deliveries}
            </Center>
            </ScrollView>
        </NativeBaseProvider>
    )

}

function mapStateToProps(state) {
  return {
    deliveries: state.deliveriesReducer,
    missionId: state.missionIdReducer,
  };
}

export default connect(mapStateToProps, null)(MissionsScreen2);
