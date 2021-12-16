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
  ScrollView,
} from "native-base";

import { FontAwesome } from "@expo/vector-icons";

import { connect } from "react-redux";
import { TouchableOpacity, Image } from "react-native";
import { ImageBackground } from "react-native";

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

                {/* <Text margin="4" key={`weigth${i}`}
                            fontSize="xs"
                            alignSelf="flex-start"
                        >
                            <FontAwesome
                    name="cube"
                    size={32}
                    type="Ionicons"
                    color="indigo"
                  />
                            {e.weigth} kg
                        </Text> */}
              </HStack>
            </Box>
          </TouchableOpacity>
        );
      })
    ) : (
      <Text>Tu n'as aucune demande pour cette mission </Text>
    );

  var statusScreen = "Missions Accomplies";
  var namePhoto = "finishMission";
  if (props.route.params.status == "newMission") {
    statusScreen = "Nouvelles Missions";
    namePhoto = "newMission";
  } else if (props.route.params.status == "currentMission") {
    statusScreen = "Missions en cours";
    namePhoto = "currentMission";
  }

  console.log(namePhoto);

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
        width="100%"
      >
        {statusScreen}
      </Center>

      <ImageBackground
        source={require(`../assets/currentMission.png`)}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.route.params.status !== "newMission" &&
        props.deliveries.length !== 0 ? (
          <Center marginTop="30">
            <Box w="90%">
              <VStack space="md">
                <Heading textAlign="center" mb="0" size="md">
                  Capacitée de transport restante :
                </Heading>
                <VStack mx="3" space="md">
                  <Progress
                    size="2xl"
                    colorScheme="purple"
                    value={inProgress}
                  />
                </VStack>
              </VStack>
            </Box>
            <Box style={{ marginTop: "10%" }}>
              <Center>
                <Text
                  style={{
                    fontSize: 30,
                    position: "relative",
                    zIndex: 1,
                    paddingTop: 20,
                    marginTop: 90,
                    color: "white",
                  }}
                >
                  {cagnotte} €
                </Text>
                <Image
                  source={require("../assets/euro.png")}
                  style={{ position: "relative", bottom: "45%" }}
                />
              </Center>
            </Box>
          </Center>
        ) : null}
        
        <Center flex={1} px="3">
            {deliveries}
          </Center>
        
      </ImageBackground>
    </NativeBaseProvider>
  );
}

function mapStateToProps(state) {
  return {
    deliveries: state.deliveriesReducer,
    missionId: state.missionIdReducer,
  };
}

export default connect(mapStateToProps, null)(MissionsScreen2);
