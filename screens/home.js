import React from "react";
import { View, Text } from "react-native";
import { Button, NativeBaseProvider, VStack } from "native-base";

export default function Home(props) {
  return (
    <NativeBaseProvider>
      <VStack
        mx="auto"
        marginTop={80}
        justifyContent="center"
        alignItems="center"
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>KRYER</Text>

        <Text>Envoyez vos colis à l'international à moindre frais</Text>
        <Button
          colorScheme="indigo"
          onPress={() => props.navigation.navigate("PurposeJourney")}
        >
          Proposer une mission
        </Button>

        <View>
          <Button
            colorScheme="indigo"
            onPress={() => props.navigation.navigate("SendDelivery")}
          >
            Envoyer colis
          </Button>
        </View>
      </VStack>
    </NativeBaseProvider>
  );
}


