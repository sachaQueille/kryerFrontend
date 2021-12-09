import React, { useState } from "react";
import {
  NativeBaseProvider,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Icon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";


export default function PurposeDetails({ route, navigation  }) {
  const { departure, arrival, weight, dateJourney } = route.params;

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
      dateJourney,
    };
    const response = await fetch("http://192.168.1.33:3000/saveMission/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `departure=${data.departure}&arrival=${data.arrival}&weight=${data.weight}&dateJourney=${data.dateJourney}&recuperationPlace=${data.recuperationPlace}&recuperationDate=${data.recuperationDate}&deliveryPlace=${data.deliveryPlace}&deliveryDate=${data.deliveryDate}&pricePerKg=${data.pricePerKg}`,
    });
    console.log(data);

    if(data.result){
      navigation.navigate('Missions');
    }
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
      <VStack
        width="80%"
        mx="auto"
        marginTop="40%"
        marginBottom="50"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>
            Récupération du colis
          </FormControl.Label>
          <HStack space={2}>
            <Input
              placeholder="Lieu de récupération"
              w={{
                base: "100%",
                md: "25%",
              }}
              marginBottom="2"
              InputLeftElement={
                <MaterialIcons
                  name="location-history"
                  size={25}
                  color="indigo"
                />
              }
              onChangeText={(e) => setRecuperationPlace(e)}
            />
          </HStack>
        </FormControl>

        <FormControl isRequired>
          <Input
            placeholder="Date"
            w={{
              md: "25%",
            }}
            marginBottom="5"
            InputLeftElement={
              <MaterialIcons name="calendar-today" size={25} color="indigo" />
            }
            onChangeText={(e) => setRecuperationDate(e)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>
            Livraison du colis :
          </FormControl.Label>
          <Input
            placeholder="Lieu de livraison"
            w={{
              md: "25%",
            }}
            marginBottom="2"
            InputLeftElement={
              <MaterialIcons name="location-history" size={25} color="indigo" />
            }
            onChangeText={(e) => setDeliveryPlace(e)}
          />
          <FormControl isRequired>
            <Input
              placeholder="Date de livraison"
              w={{
                md: "25%",
              }}
              marginBottom="5"
              InputLeftElement={
                <MaterialIcons name="calendar-today" size={25} color="indigo" />
              }
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
            w={{
              md: "25%",
            }}
            marginBottom="5"
            InputLeftElement={
              <FontAwesome5 name="coins" size={25} color="indigo" />
            }
            onChangeText={(e) => setPricePerKg(e)}
          />
        </FormControl>
      </VStack>
      <Button
        style={{ backgroundColor: "indigo" }}
        mx="12"
        size="lg"
        onPress={sendToDB}
      >
        Valider
      </Button>
      </ScrollView>
    </NativeBaseProvider>
  );
}
