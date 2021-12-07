import React, { useState } from "react";
import {
  NativeBaseProvider,
  VStack,
  FormControl,
  Input,
  Button,
} from "native-base";
import { EvilIcons } from "@expo/vector-icons";

export default function PurposeJourney({ navigation }) {
  const [weight, setWeight] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [dateJourney, setDateJourney] = useState("");

  return (
    <NativeBaseProvider>
      <VStack
        width="80%"
        mx="auto"
        marginTop="70"
        marginBottom="50"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>Départ</FormControl.Label>
          <Input
            placeholder="Ex : Paris"
            marginBottom="5"
            onChangeText={(e) => setDeparture(e)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>Arrivée</FormControl.Label>
          <Input
            placeholder="Ex : Rome"
            marginBottom="5"
            onChangeText={(e) => setArrival(e)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>
            Capacité de transport:
          </FormControl.Label>
          <Input
            placeholder="En kg"
            marginBottom="5"
            onChangeText={(e) => setWeight(e)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>
            Date de trajet
          </FormControl.Label>
          <Input placeholder="Date" onChangeText={(e) => setDateJourney(e)} />
        </FormControl>
      </VStack>
      <Button.Group
        display="flex"
        flexDirection="column"
        size="lg"
        marginTop="4"
        mx="12"
      >
        <Button marginBottom="4">Simuler</Button>

        <Button
          onPress={() =>
            navigation.navigate("PurposeDetails", {
              departure: departure,
              arrival: arrival,
              weight: weight,
              dateJourney: dateJourney,
            })
          }
          leftIcon={<EvilIcons name="arrow-right" size={24} color="white" />}
          colorScheme="indigo"
        >
          Suivant
        </Button>
      </Button.Group>
    </NativeBaseProvider>
  );
}
