import React, { useState } from "react";
import {connect} from 'react-redux';
import { View , ScrollView, Text} from "react-native";
import {
    NativeBaseProvider,
    Button,
    VStack,
    FormControl,
    Input
} from "native-base";




function ReceipientCoordinate(props){

  console.log(props.infoDelivery);
  console.log(props.route.params);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    async function validateClick(){
        const response = await fetch("http://172.17.1.42:3000/saveDelivery", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `height=${props.infoDelivery.height}&length=${props.infoDelivery.length}&width=${props.infoDelivery.width}&weight=${props.infoDelivery.weight}&price=${props.route.params.price}&firstname=${firstname}&lastname=${lastname}&email=${email}&phone=${phone}`,//&expeditorId=${props.user._id}
    });
    }

    return (
      <NativeBaseProvider>
        <ScrollView>
          <VStack
            width="80%"
            mx="auto"
            marginTop="40%"
            marginBottom="50"
            justifyContent="center"
            alignItems="center"
          >
            <FormControl.Label>Coordonnee de la personne qui va recuperer le colis :</FormControl.Label>
          <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>Prenom </FormControl.Label>
              <Input
                placeholder="willly"
                marginBottom="5"
                onChangeText={(e) => setFirstname(e)}
              />
          </FormControl>
  
          <FormControl isRequired>
              <FormControl.Label _text={{ bold: true }}>Nom</FormControl.Label>
              <Input
                placeholder="Wonka"
                marginBottom="5"
                onChangeText={(e) => setLastname(e)}
              />
          </FormControl>
  
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>
              email
            </FormControl.Label>
            <Input
              placeholder="XX XX XX XX XX"
              marginBottom="5"
              onChangeText={(e) => setPhone(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>
             numero de telephone
            </FormControl.Label>
            <Input placeholder="willy.Wonka@chocolat.com" onChangeText={(e) => setEmail(e)} />
          </FormControl>
       
       
         
          <Button
          marginTop="5"
            onPress={() => validateClick()}
            style={{ backgroundColor: "indigo" }}
          >valider</Button>
          
         </VStack>
       
        </ScrollView>
    </NativeBaseProvider>
    )
}

function mapStateToProps(state){
    return {infoDelivery : state.infoDelivery, user : state.user}
}

export default connect(
    mapStateToProps,
    null
)(ReceipientCoordinate);