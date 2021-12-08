import React, {useState} from "react";
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

function signIn(props) {
  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')

  var handleSubmitSignin = async () => {
 
    const data = await fetch("http://172.17.1.16:3000/signIn/", {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
    })

    const body = await data.json()
    console.log(body);

    /* if(body.result === true){
      props.addToken(body.token);
      setUserExists(true)
    }  else {
      setErrorsSignin(body.error)
    } */
  }


  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Je me connecte</Text>

        <VStack space={3} mt="5">
          <FormControl isRequired>
            <FormControl.Label>Email</FormControl.Label>
            <Input
            w={{
              base: "75%",
              md: "25%",
              }}
            placeholder="john@doe.fr"
            marginBottom="5"
            onChangeText={(e) => setSignInEmail(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Mot de passe</FormControl.Label>
            <Input
            type="password"
            placeholder="********"
            marginBottom="5"
            onChangeText={(e) => setSignInPassword(e)}
            />
          </FormControl>

          <Button size="sm" colorScheme="indigo"
          onPress={()=>handleSubmitSignin()}
          >
            Connexion
          </Button>

          <Text>Vous n'avez pas de compte ?</Text>

          <Button size="sm" colorScheme="indigo"
          onPress={() => props.navigation.navigate("signUp")}
          >
            Inscription
          </Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default signIn;
