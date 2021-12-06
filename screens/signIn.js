import React from "react";
import { View } from "react-native";
import {
  NativeBaseProvider,
  Text,
  Box,
  Button,
  VStack,
  FormControl,
  Input,
  Button,
} from "native-base";

function signIn(props) {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Je me connecte</Text>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>

          <Button size="sm" colorScheme="indigo">
            Connexion
          </Button>

          <Text>Vous n'avez pas de compte ?</Text>

          <Button size="sm" colorScheme="indigo">
            Inscription
          </Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default signIn;
