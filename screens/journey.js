import React from "react";
import { View } from "react-native";
import { Button, NativeBaseProvider, VStack } from "native-base";

function Journey(props) {
  return (
    <NativeBaseProvider>
      <VStack
        mx="auto"
        marginTop="60%"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          style={{ backgroundColor: "indigo" }}
          mx="12"
          size="lg"
          marginBottom="3%"
          onPress={() => props.navigation.navigate("NewMission")}
        >
          Nouvelles Missions
        </Button>

        <Button
          style={{ backgroundColor: "indigo" }}
          mx="12"
          size="lg"
          marginBottom="3%"
          onPress={() => props.navigation.navigate("CurrentMission")}
        >
          Missions en cours
        </Button>

        <Button
          style={{ backgroundColor: "indigo" }}
          mx="12"
          size="lg"
          marginBottom="3%"
          onPress={() => props.navigation.navigate("FinishedMissions")}
        >
          Missions Accomplies
        </Button>
      </VStack>
    </NativeBaseProvider>
  );
}

export default Journey;
