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

function signIn(props) {
  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('');
  const [listErrorsSignin, setErrorsSignin] = useState([]);
  const [token, setToken] = useState('');
  const [userExists, setUserExists] = useState(false);

  var handleSubmitSignin = async () => {
 
    const data = await fetch("http://172.17.1.16:3000/signIn/", {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
    })

    const body = await data.json()

     if(body.result === true){
      props.addUser(body.user);
      setToken(body.token);
      setUserExists(true);
      //props.navigation.navigate("User");
    }  else {
      setErrorsSignin(body.error)
    } 
  }

  //possibilité d'utiliser la liste des erreurs pour afficher un message spécifique

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
          Je me connecte
        </Heading>

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
          onPress={()=>{
            handleSubmitSignin(); 
            AsyncStorage.setItem('token',JSON.stringify(token));
          }
          }
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
)(signIn);
