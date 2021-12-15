import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  Button,
  NativeBaseProvider,
  VStack,
  Input,
  StatusBar,
  KeyboardAvoidingView,
  Heading,
  Center,
  Modal,
  HStack,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";

function TerminateMission(props) {
  const [verifCode, setVerifCode] = useState("");
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalFail, setShowModalFail] = useState(false);

 const code = props.route.params.verifCode
 const price = props.route.params.price
 const info = props.route.params;




  async function finishClick  () {
    if (code === verifCode) { console.log(info.weigth);
      setShowModalSuccess(true);
     
      await fetch(`${global.ipa}changeStatusValidate`, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: `idMission=${props.missionId}&idDelivery=${info._id}`
                });

    } else {
      setShowModalFail(true);
    }
  };

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView>
        <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

        <ScrollView>
          <VStack
            mx="auto"
            marginTop={64}
            justifyContent="center"
            alignItems="center"
          >
            <Heading size="xs">Entrer le code de validation</Heading>

            <Input
              marginTop="4"
              mx="3"
              placeholder="Code à 6 chiffres"
              w={{
                base: "75%",
                md: "50%",
              }}
              onChangeText={(value) => setVerifCode(value)}
              value={verifCode}
            />

            <Button marginTop="4" onPress={() => finishClick()}>
              Terminer la mission
            </Button>
          </VStack>
        </ScrollView>
        <Modal
          isOpen={showModalSuccess}
          onClose={() => setShowModalSuccess(false)}
          size="lg"
        >
          <Modal.Content maxWidth="350">
            <Modal.CloseButton />
            <Modal.Header>Mission accomplie !</Modal.Header>
            <Modal.Body>
              <VStack space={3}>
                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">
                    Félicitations pour cette mission ! Vous allez être crédité
                    de {price} € sur votre compte Kryer
                  </Text>
                </HStack>
              </VStack>
            </Modal.Body>
            <Modal.Footer>
              <Button
                flex="1"
                onPress={() => {
                  props.navigation.navigate("HomeScreen");
                }}
              >
                Retourner à l'accueil
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>

        <Modal
          isOpen={showModalFail}
          onClose={() => setShowModalFail(false)}
          size="lg"
        >
          <Modal.Content maxWidth="350">
            <Modal.CloseButton />
            <Modal.Header>Mission failed !</Modal.Header>
            <Modal.Body>
              <VStack space={3}>
                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">
                    Le code de vérification ne correspond pas à celui de la
                    mission, veuillez reessayer !
                  </Text>
                </HStack>
              </VStack>
            </Modal.Body>
            <Modal.Footer>
              <Button
                flex="1"
                onPress={() => {
                  setShowModalFail(false);
                }}
              >
                Réessayer
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
}

function mapStateToProps(state){
  return { missionId: state.missionIdReducer}
}



export default connect(
  mapStateToProps,
  null
)(TerminateMission);