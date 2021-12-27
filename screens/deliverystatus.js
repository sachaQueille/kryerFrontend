import React, { useState, useEffect } from "react";
import {
  NativeBaseProvider,
  Center,
  Box,
  Button,
  VStack,
  Heading,
  Progress,
  Checkbox,
  Text,
  Modal,
} from "native-base";
import { ScrollView } from "react-native";

function DeliveryStatus(props) {

  var statusDelivery = props.route.params.deliveryStatus.delivery_status;
  var verifcode = props.route.params.deliveryStatus.verifcode;
  var price = props.route.params.deliveryStatus.price;

  const [supportedDelivery, setSupportedDelivery] = useState(false);
  const [inTransitDelivery, setIntransitDelivery] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const [inProgress, setInProgress] = useState(0);
  const [disableButton, setDisableButton] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [existDelivery, setExistDelivery] = useState(true);
  const [message, setMessage] = useState(true);

  useEffect(() => {
    if (statusDelivery === "supportedDelivery") {
      setSupportedDelivery(true);
      setInProgress(33);
    }
    if (statusDelivery === "inTransitDelivery") {
      setSupportedDelivery(true);
      setIntransitDelivery(true);
      setInProgress(66);
      setDisableButton(false);
    }
    if (statusDelivery === "delivered") {
      setSupportedDelivery(true);
      setIntransitDelivery(true);
      setDelivered(true);
      setInProgress(100);
      setDisableButton(false);
      setMessage(false);
    }
  }, []);

  async function deleteMyDelivery(verifcode) {
    var response = await fetch(`${global.ipa}deleteMyDelivery/${verifcode}`, {
      method: "DELETE",
    });
    response = await response.json();

    if (response) {
      setShowModal(true);
      setExistDelivery(false);
    }
  }


  if (existDelivery) {
    return (
      <NativeBaseProvider>
       
        <Center
          style={{ backgroundColor: "indigo" }}
          _text={{
            color: "#ffffff",
            fontWeight: "600",
            fontSize: "32",
            marginTop: "10%",
          }}
          height={120}
          width="100%"
        >
          Suivre mon colis
        </Center>
        <ScrollView>
        <Center marginTop="60">
          <Box w="90%">
            <VStack space="md">
              <Heading textAlign="center" mb="10" size="md">
                Etat de la livraison
              </Heading>
              <VStack mx="4" space="md">
                <Progress size="2xl" colorScheme="purple" value={inProgress} />
              </VStack>
            </VStack>
          </Box>
        </Center>

        <Center marginTop="100">
          <VStack space={3}>
            <Checkbox
              colorScheme="purple"
              size="lg"
              isChecked={supportedDelivery}
            >
              Demande accepter par le livreur
            </Checkbox>
            <Checkbox
              colorScheme="purple"
              size="lg"
              isChecked={inTransitDelivery}
            >
              Colis en transit
            </Checkbox>
            <Checkbox colorScheme="purple" size="lg" isChecked={delivered}>
              Colis livré
            </Checkbox>
          </VStack>
        </Center>

        <Center width="80%" marginTop="20%" marginLeft="10%">
          <Text>
            {message
              ? `Veuillez indiquer ce code à votre personne de confiance qui réceptionnera votre colis :`
              : `Votre colis est bien livré, vous allez être débité de ${price}€ de votre compte KRYER. Votre code de vérification est :`}
          </Text>
          <Text marginTop="5%" fontWeight="bold">
            {verifcode}
          </Text>
        </Center>

        <Center marginTop="100">
          <VStack space={4} alignItems="center">
            <Box>
              {disableButton ? (
                <Button
                  size="lg"
                  backgroundColor="error.800"
                  onPress={() => {
                    deleteMyDelivery(verifcode);
                  }}
                >
                  Annuler la demande
                </Button>
              ) : null}
            </Box>
          </VStack>
        </Center>
        </ScrollView>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Colis supprimé</Modal.Header>
            <Modal.Body>
              <Text>Vous avez bien annulé votre demande</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                OK
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </NativeBaseProvider>
    );
  } else {
    return (
      <NativeBaseProvider>
        <Center
          style={{ backgroundColor: "indigo" }}
          _text={{
            color: "#ffffff",
            fontWeight: "600",
            fontSize: "32",
            marginTop: "10%",
          }}
          height={120}
          width="100%"
        >
          suivre mon colis
        </Center>
        <Center marginTop="50%">
          <Text>Vous n'avez plus d'informations pour ce colis</Text>
        </Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Colis supprimé</Modal.Header>
            <Modal.Body>
              <Text>Vous avez bien annulé votre demande</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                OK
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </NativeBaseProvider>
    );
  }
}

export default DeliveryStatus;
