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
  Heading,
} from "native-base";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

function signIn(props) {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [listErrorsSignin, setErrorsSignin] = useState([]);

  var handleSubmitSignin = async () => {
    const data = await fetch("http://172.17.1.16:3000/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`,
    });

    const body = await data.json();
    

    if (body.result === true) {
      props.addUser(body.user);
      AsyncStorage.setItem("token", JSON.stringify(body.token));
      props.navigation.navigate("Profil", { screen: "User" });
    } else {
      setErrorsSignin(body.error);
    }
  };

  //possibilité d'utiliser la liste des erreurs pour afficher un message spécifique

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
      </VStack>
    </NativeBaseProvider>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: function (user) {
      dispatch({ type: "addUser", user: user });
    },
  };
}

export default connect(null, mapDispatchToProps)(signIn);
