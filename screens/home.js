import React from "react";
import { View, Text } from "react-native";
import { Button, NativeBaseProvider, VStack } from "native-base";

export default function Home(props) {
    return (
        <NativeBaseProvider>
            <VStack
                mx="auto"
                marginTop="40%"
                justifyContent="center"
                alignItems="center"
            >
                <Text style={{ fontSize: 40, fontWeight: "bold", color: "indigo" }}>KRYER</Text>
            </VStack>

            <VStack
                mx="auto"
                marginTop="30%"
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
                    Envoyer colis
                </Button>
            </VStack>
        </NativeBaseProvider>
    );
}
