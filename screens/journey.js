import React from "react";
import { View, Text } from "react-native";
import { Button, NativeBaseProvider, VStack, } from "native-base";

export default function Home(props) {
    return (
        <NativeBaseProvider>
            <VStack
                mx="auto"
                marginTop="50%"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Text style={{ fontSize: 40, fontWeight: "bold"}}>KRYER</Text>
            </VStack>

            <VStack
                mx="auto"
                marginTop="10%"
                justifyContent="center"
                alignItems="center"
            >

                <Button
                    style={{ backgroundColor: "indigo" }}
                    onPress={() => props.navigation.navigate("NewMission")}
                    marginBottom={10}
                    marginTop={20}
                    mx="12"
                    size="lg"
                >
                    Nouvelles missions
                </Button>

                <Button
                    style={{ backgroundColor: "indigo" }}
                    onPress={() => props.navigation.navigate("CurrentMission")}
                    marginBottom={10}
                    mx="12"
                    size="lg"
                >
                    Missions en cours
                </Button>
                <Button
                    style={{ backgroundColor: "indigo" }}
                    onPress={() => props.navigation.navigate("FinishedMission")}
                    mx="12"
                    size="lg"
                >
                    Missions accomplies
                </Button>
            </VStack>
        </NativeBaseProvider>
    );
}

