import React, { useState } from "react";
import {
  NativeBaseProvider,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function PurposeDetails({ route, navigation }) {
  const { departure, arrival, weight } = route.params;

  const [recuperationPlace, setRecuperationPlace] = useState("");
  const [deliveryPlace, setDeliveryPlace] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [pricePerKg, setPricePerKg] = useState("");
  const [recuperationDate, setRecuperationDate] = useState("");

  const sendToDB = async () => {
    const data = {
      departure,
      arrival,
      weight,
      recuperationPlace,
      recuperationDate,
      deliveryPlace,
      deliveryDate,
      pricePerKg,
    };
    const response = await fetch("http://192.168.0.30:3000/saveMission/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `departure=${data.departure}&arrival=${data.arrival}&weight=${data.weight}&recuperationPlace=${data.recuperationPlace}&recuperationDate=${data.recuperationDate}&deliveryPlace=${data.deliveryPlace}&deliveryDate=${data.deliveryDate}&pricePerKg=${data.pricePerKg}`,
    });
    console.log(data);
  };

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
          <FormControl.Label _text={{ bold: true }}>
            Récupération du colis
          </FormControl.Label>
          <HStack space={2}>
            <MaterialIcons name="location-history" size={24} color="black" />
            <Input
              placeholder="Lieu de récupération"
              onChangeText={(e) => setRecuperationPlace(e)}
            />
          </HStack>
        </FormControl>

        <FormControl isRequired>
          <Input
            placeholder="Date"
            onChangeText={(e) => setRecuperationDate(e)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>
            Livraison du colis :
          </FormControl.Label>
          <Input
            placeholder="Lieu de livraison"
            onChangeText={(e) => setDeliveryPlace(e)}
          />
          <FormControl isRequired>
            <Input
              placeholder="Date de livraison"
              onChangeText={(e) => setDeliveryDate(e)}
            />
          </FormControl>
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>
            Tarif de la mission :
          </FormControl.Label>
          <Input
            placeholder="Prix par kg"
            onChangeText={(e) => setPricePerKg(e)}
          />
        </FormControl>
      </VStack>
      <Button colorScheme="indigo" mx="12" onPress={sendToDB}>
        Valider
      </Button>
    </NativeBaseProvider>
  );
}
