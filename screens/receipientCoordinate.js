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
          marginTop="30%"
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
              placeholder="Prénom"
              marginBottom="5"
              onChangeText={(e) => setFirstname(e)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>Nom</FormControl.Label>
            <Input
              placeholder="Nom"
              marginBottom="5"
              onChangeText={(e) => setLastname(e)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>
              Numéro de téléphone
            </FormControl.Label>
            <Input
              placeholder="Numéro"
              marginBottom="5"
              onChangeText={(e) => setPhone(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>Email</FormControl.Label>
            <Input
              placeholder="Adresse email"
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
          <Modal.Header>Felicitions !</Modal.Header>
          <Modal.Body>
            <Text>
              Tu viens de faire une demande aupres d'un Kryer ! {"\n"}
              {"\n"}
              Il faut maintenant qu'il accepte. {"\n"}
              {"\n"}
              Vérifier dans la partie colis pour connaître l'état de la demande.{" "}
              {"\n"}
              {"\n"}
              Une fois acceptée, tu y trouveras un code de verification.
              Transmets ce code à la personne qui récupérera le colis car il lui
              sera demandé lors de l'echange avec le Kryer .{"\n"}
              Une fois la livraison effectuée, ton compte Kryer sera débité du
              montant de la mission !
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ backgroundColor: "indigo" }}
              mx="12"
              size="lg"
              onPress={() => validateClick()}
            >
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
