import React from "react";
import { View, Text } from "react-native";
import { Button, NativeBaseProvider, VStack } from "native-base";

export default function ConnectionScreen(props) {
  return (
    <NativeBaseProvider>
      <VStack
        mx="auto"
        marginTop="40%"
        justifyContent="center"
        alignItems="center"
      >
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>KRYER</Text>
      </VStack>

      <VStack
        mx="auto"
        marginTop="30%"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Reveille le Kryer qui est en toi !</Text>

        <Button
          style={{ backgroundColor: "indigo" }}
          onPress={() => props.navigation.navigate("signUp")}
          marginBottom={5}
          marginTop={5}
          mx="12"
          size="lg"
        >
          S'inscrire
        </Button>

        <Text>Tu es déjà un Kryer de confiance ?</Text>

        <Button
          style={{ backgroundColor: "indigo" }}
          onPress={() => props.navigation.navigate("signIn")}
          marginBottom={5}
          marginTop={5}
          mx="12"
          size="lg"
        >
          Se connecter
        </Button>
      </VStack>
    </NativeBaseProvider>
  );
}
