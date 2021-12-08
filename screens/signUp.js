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

function signUp(props) {
  const [signUpFirstname, setSignUpFirstname] = useState('');
  const [signUpLastname, setSignUpLastname] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpPhone, setSignUpPhone] = useState('');

  //fonction  submit signUp
  var handleSubmitSignup = async () => {
    
    const data = await fetch("http://172.17.1.42:3000/signUp/", {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `firstNameFromFront=${signUpFirstname}&lastNameFromFront=${signUpLastname}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}&phoneFromFront=${signUpPhone}`
    })

    const body = await data.json(); 
    console.log(body);   
    
    /*
    if(body.result === true){
      props.addToken(body.token);
      setUserExists(true);
    } else {
      setErrorsSignup(body.error)
    }
    */
  }

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Je crée mon compte</Text>

        <VStack space={3} mt="5">
          <FormControl isRequired>
            <FormControl.Label>Nom</FormControl.Label>
            <Input
            placeholder="John Doe"
            marginBottom="5"
            onChangeText={(e) => setSignUpFirstname(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Prénom</FormControl.Label>
            <Input
            placeholder="John Doe"
            marginBottom="5"
            onChangeText={(e) => setSignUpLastname(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Email</FormControl.Label>
            <Input
            placeholder="john@doe.fr"
            marginBottom="5"
            onChangeText={(e) => setSignUpEmail(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Téléphone</FormControl.Label>
            <Input
            placeholder="XX XX XX XX XX"
            marginBottom="5"
            onChangeText={(e) => setSignUpPhone(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Mot de passe</FormControl.Label>
            <Input
            placeholder="********"
            marginBottom="5"
            onChangeText={(e) => setSignUpPassword(e)}
            />
          </FormControl>

          <Button size="sm" colorScheme="indigo"
          onPress={()=> handleSubmitSignup()}
          >
            Connexion
          </Button>

        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default signUp;
