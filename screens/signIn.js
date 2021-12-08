import React, { useState } from "react";
import { View } from "react-native";
import {
  NativeBaseProvider,
  Text,
  Box,
  Button,
  VStack,
  FormControl,
  Input,
} from "native-base";

function signIn(props) {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  var handleSubmitSignin = async () => {
 
<<<<<<< HEAD
    const data = await fetch("http://172.17.1.42:3000/signIn", {
=======
    const data = await fetch("http://192.168.1.33:3000/signIn/", {
>>>>>>> b90746c3f97e05f9c1927eb3240db0bbdf65d273
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
    })

    const body = await data.json();
    console.log(body);

    /* if(body.result === true){
      props.addToken(body.token);
      setUserExists(true)
    }  else {
      setErrorsSignin(body.error)
    } */
  };

  return (
    <NativeBaseProvider>
      <VStack
        space={3}
        mt="5"
        width="80%"
        mx="auto"
        marginTop="40%"
        marginBottom="50"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Je me connecte</Text>
        <FormControl isRequired>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            w={{
              base: "100%",
              md: "25%",
            }}
            placeholder="Adresse email"
            marginBottom="5"
            onChangeText={(e) => setSignInEmail(e)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Mot de passe</FormControl.Label>
          <Input
            type="password"
            placeholder="Mot de passe"
            marginBottom="5"
            onChangeText={(e) => setSignInPassword(e)}
          />
        </FormControl>

        <Button
          style={{ backgroundColor: "indigo" }}
          mx="12"
          size="lg"
          onPress={() => handleSubmitSignin()}
        >
          Connexion
        </Button>

        <Text>Vous n'avez pas de compte ?</Text>

        <Button
          style={{ backgroundColor: "indigo" }}
          mx="12"
          size="lg"
          onPress={() => props.navigation.navigate("signUp")}
        >
          Inscription
        </Button>
      </VStack>
    </NativeBaseProvider>
  );
}

export default signIn;
