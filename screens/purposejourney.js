import React, { useState } from "react";
import {
  NativeBaseProvider,
  VStack,
  FormControl,
  Input,
  Button,
} from "native-base";

export default function PurposeJourney({ navigation }) {
  const [weight, setWeight] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  return (
    <NativeBaseProvider>
      <VStack width="80%" mx="auto" justifyContent="center" alignItems="center">
        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>Départ</FormControl.Label>
          <Input
            placeholder="Ex : Paris"
            onChangeText={(e) => setDeparture(e)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>Arrivée</FormControl.Label>
          <Input placeholder="Ex : Rome" onChangeText={(e) => setArrival(e)} />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>
            Capacité de transport:
          </FormControl.Label>
          <Input placeholder="En kg" onChangeText={(e) => setWeight(e)} />
        </FormControl>

        <Button colorScheme="indigo">Simuler</Button>

        <Button
          colorScheme="indigo"
          onPress={() =>
            navigation.navigate("PurposeDetails", {
              departure: departure,
              arrival: arrival,
              weight: weight,
            })
          }
        >
          Suivant
        </Button>
      </VStack>
    </NativeBaseProvider>
  );
}
