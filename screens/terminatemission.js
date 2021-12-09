import React from "react";
import { View, Text } from "react-native";
import { Button, NativeBaseProvider, VStack, Input, StatusBar, KeyboardAvoidingView, Heading, Center } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default function TerminateMission(props) {
  return (
    
    <NativeBaseProvider>
    <KeyboardAvoidingView>
    <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
    
    <ScrollView>
      <VStack
        mx="auto"
        marginTop={64}
        justifyContent="center"
        alignItems="center"       
      >       
        <Heading size="xs">Entrer le code que vous avez reçu.</Heading>

        <Input
        marginTop="4"
        mx="3"
        placeholder="Code à 6 chiffres"
        w={{
            base: "75%",
            md: "50%",
        }}
        />

        <Button marginTop="4">Terminer la mission</Button>

      </VStack>
      </ScrollView>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
    
  );
}


