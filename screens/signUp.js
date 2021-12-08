import React, {useState} from "react";
import { View } from "react-native";
import {
  NativeBaseProvider,
  Text,
  Box,
  Button,
  VStack,
  FormControl,
  Input,
  Heading
 
} from "native-base";
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

function signUp(props) {
  const [signUpFirstname, setSignUpFirstname] = useState('');
  const [signUpLastname, setSignUpLastname] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpPhone, setSignUpPhone] = useState('');
  const [listErrorsSignup, setErrorsSignup] = useState([]);

  //fonction  submit signUp
  var handleSubmitSignup = async () => {
    
    const data = await fetch("http://172.17.1.16:3000/signUp/", {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `firstNameFromFront=${signUpFirstname}&lastNameFromFront=${signUpLastname}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}&phoneFromFront=${signUpPhone}`
    })

    const body = await data.json(); 
    
    if(body.result === true){
      props.addUser(body.user);
      setToken(body.token);
    } else {
      setErrorsSignup(body.error)
    }
    
  }

  //possibilité d'utiliser la liste des erreurs pour afficher un message


  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Je crée mon compte
        </Heading>

        <VStack space={1} mt="3">
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
          onPress={()=>{handleSubmitSignup(); AsyncStorage.setItem('token',JSON.stringify(token))}}
          >
            Connexion
          </Button>

        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: function(user) {
        dispatch( {type: 'addUser', user: user} )
    }
  }
 }

 export default connect(
  null,
  mapDispatchToProps
)(signUp);
