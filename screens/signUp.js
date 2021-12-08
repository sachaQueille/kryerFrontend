import React from "react";
import { View } from "react-native";
import {
  NativeBaseProvider,
  Text,
  Box,
  Button,
  VStack,
  FormControl,
  Input
 
} from "native-base";

function signUp(props) {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Je crée mon compte</Text>

        <VStack space={3} mt="5">
          <FormControl isRequired>
            <FormControl.Label>Nom d'utilisateur</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Téléphone</FormControl.Label>
            <Input />
          </FormControl >
          <FormControl isRequired>
            <FormControl.Label>Mot de passe</FormControl.Label>
            <Input />
          </FormControl>

          <Button size="sm" colorScheme="indigo">
            Connexion
          </Button>

          <Button size="sm" colorScheme="indigo">
            Connexion
          </Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default signUp;
