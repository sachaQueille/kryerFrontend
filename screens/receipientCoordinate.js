import React, { useState } from "react";
import { connect } from "react-redux";
import { View, ScrollView, Text } from "react-native";
import {
  NativeBaseProvider,
  Button,
  VStack,
  FormControl,
  Input,
  Modal,
} from "native-base";

function ReceipientCoordinate(props) {
  console.log(props.user);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  async function validateClick() {
    const response = await fetch(`${global.ipa}saveDelivery`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `height=${props.infoDelivery.height}&length=${props.infoDelivery.length}&width=${props.infoDelivery.width}&weight=${props.infoDelivery.weight}&price=${props.route.params.price}&idMission=${props.route.params.id}&firstname=${firstname}&lastname=${lastname}&email=${email}&phone=${phone}&expeditorId=${props.user._id}&avatarExp=${props.user.avatar}&firstNameExp=${props.user.firstName}&lastNameExp=${props.user.lastName}`,
    });
    props.navigation.navigate("Colis");
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
          <FormControl.Label>
            Coordonnées de la personne qui va récupérer le colis :
          </FormControl.Label>
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>
              Prénom{" "}
            </FormControl.Label>
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
              Numéro de téléphone
            </FormControl.Label>
            <Input
              placeholder="XX XX XX XX XX"
              marginBottom="5"
              onChangeText={(e) => setPhone(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>email</FormControl.Label>
            <Input
              placeholder="willy.Wonka@chocolat.com"
              onChangeText={(e) => setEmail(e)}
            />
          </FormControl>

          <Button
            marginTop="5"
            onPress={() => setModalIsVisible(true)}
            style={{ backgroundColor: "indigo" }}
          >
            Valider
          </Button>
        </VStack>
      </ScrollView>

      {/* modal  */}

      <Modal isOpen={modalIsVisible} onClose={setModalIsVisible} size={"lg"}>
        <Modal.Content maxH="500">
          <Modal.CloseButton />
          <Modal.Header>Félicition !</Modal.Header>
          <Modal.Body >
            
              <Text>
                Vous venez de faire une demande auprès d'un Kryer ! {"\n"}{"\n"}
                
                Il faut maintenant qu'il accepte.  {"\n"}{"\n"}
                Verrifiez dans la partie colis pour
                connaitre l'état de la demande.  {"\n"}{"\n"}
                Une fois accepté , vous y trouverez
                un code de vérification. Transmettez ce code à la personne qui
                récupèrera le colis car il lui sera demandé lors de l'échange
                avec le Kryer .
              </Text>
            
          </Modal.Body>
          <Modal.Footer>
            <Button colorScheme="indigo" onPress={() => validateClick()}>
              Embarquer dans l'aventure
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </NativeBaseProvider>
  );
}

function mapStateToProps(state) {
  return { infoDelivery: state.infoDelivery, user: state.userReducer };
}

export default connect(mapStateToProps, null)(ReceipientCoordinate);
