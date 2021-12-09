import React, { useState } from "react";
import { View } from "react-native";
import {
  NativeBaseProvider,
  Text,
  Button,
  VStack,
  FormControl,
  Input,
  ScrollView
 
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
    
    const data = await fetch("http://172.17.1.42:3000/signUp", {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `firstNameFromFront=${signUpFirstname}&lastNameFromFront=${signUpLastname}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}&phoneFromFront=${signUpPhone}`
    })

    const body = await data.json(); 
    
    if(body.result === true){
      props.addUser(body.user);
      AsyncStorage.setItem('token',JSON.stringify(body.token));
      props.navigation.navigate("Profil",{screen:'User'});   
    } else {
      setErrorsSignup(body.error)
    }
    
  }

  //possibilité d'utiliser la liste des erreurs pour afficher un message


  return (
    <NativeBaseProvider>
      <ScrollView>
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
        <Text>Je crée mon compte</Text>

        <FormControl isRequired>
          <FormControl.Label>Nom</FormControl.Label>
          <Input
            w={{
              base: "100%",
              md: "25%",
            }}
            placeholder="Nom"
            marginBottom="5"
            onChangeText={(e) => setSignUpFirstname(e)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Prénom</FormControl.Label>
          <Input
            placeholder="Prénom"
            marginBottom="5"
            onChangeText={(e) => setSignUpLastname(e)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            placeholder="Adresse email"
            marginBottom="5"
            onChangeText={(e) => setSignUpEmail(e)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Téléphone</FormControl.Label>
          <Input
            placeholder="Téléphone"
            marginBottom="5"
            onChangeText={(e) => setSignUpPhone(e)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Mot de passe</FormControl.Label>
          <Input
            placeholder="Mot de passe"
            marginBottom="5"
            onChangeText={(e) => setSignUpPassword(e)}
          />
        </FormControl>

        <Button
          style={{ backgroundColor: "indigo" }}
          mx="12"
          size="lg"
          onPress={()=>
            handleSubmitSignup()
          }
        >
          Inscription
        </Button>
      </VStack>
      </ScrollView>
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
