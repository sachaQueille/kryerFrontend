import React, { useState } from "react";
import {
  Box,
  Heading,
  NativeBaseProvider,
  Progress,
  Center,
  FormControl,
  Select,
  CheckIcon,
  VStack,
  Image,
  Flex,
  Button,
  AspectRatio,
  Modal,
  Stack,
} from "native-base";

import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";

const logo = require("../assets/avatarfemal.jpg");

function CurrentMissionClient(props) {
  const [showModalItem, setshowModalItem] = useState(false);
  const [showModalRecipient, setshowModalRecipient] = useState(false);
  return (
    <NativeBaseProvider>
      <ScrollView>
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
          Missions en cours
        </Center>

        <Stack
          flex={1}
          direction={{
            base: "column",
            md: "row",
            justifyContent: "center",
          }}
          space={8}
          px="10"
          py="10"
          width="100%"
          height="0%"
          flexDir="column"
        >
          <Box w="100%">
            <Center mb="10">
              <Heading size="md">Capacite de transport restante: 10kg</Heading>
            </Center>
            <Progress
              colorScheme="violet"
              bg="purple.300"
              mb="4"
              value={50}
              mx="4"
            />
          </Box>

          <VStack alignItems="center" space={4}>
            <Select
              borderWidth="3"
              borderColor="#701a75"
              fontWeight="bold"
              minWidth="200"
              accessibilityLabel="Selectionner un client"
              placeholder="Selectionner un client"
              _selectedItem={{
                bg: "indigo",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
            >
              <Select.Item label="Alice Dupont" value="cl1" />
              <Select.Item label="Joh Doe" value="cl2" />
              <Select.Item label="Alex Leblanc" value="cl3" />
            </Select>
          </VStack>

          {/* <Box
                        alignItems="center"
                        borderColor="black"
                        style={{ flex: 1, }}>
                        <FormControl
                            marginRight="7"
                            marginBottom="5"
                            justifyContent="center"
                            style={{ width: '50%', borderColor: '#000000' }}
                            isRequired
                            isInvalid>
                            <FormControl.Label ></FormControl.Label>
                            <Select
                                borderWidth="2"
                                minWidth="200"
                                accessibilityLabel="Selectionner un client"
                                placeholder="Selectionner un client"
                                _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size={5} />,
                                }}
                                mt="1"
                            >
                                <Select.Item label="Alice Dupont" value="cl1" />
                                <Select.Item label="Joh Doe" value="cl2" />
                                <Select.Item label="Alex Leblanc" value="cl3" />
                            </Select>
                        </FormControl>
                    </Box> */}

          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: "https://st.depositphotos.com/1177973/1764/i/950/depositphotos_17640367-stock-photo-parcel-box-with-kraft-paper.jpg",
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              style={{ backgroundColor: "indigo" }}
              bg="violet.500"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              45 € pour 15 kg
            </Center>
          </Box>

          <VStack>
            <Button
              style={{ backgroundColor: "indigo" }}
              onPress={() => setshowModalItem(true)}
            >
              Dimensions
            </Button>
            <Modal
              isOpen={showModalItem}
              onClose={() => setshowModalItem(false)}
            >
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Dimensions</Modal.Header>
                <Modal.Body>
                  <FormControl>
                    <FormControl.Label>Largeur : 13 cm</FormControl.Label>
                  </FormControl>
                  <FormControl mt="3">
                    <FormControl.Label>Longueur : 21 cm</FormControl.Label>
                  </FormControl>
                  <FormControl mt="3">
                    <FormControl.Label>Hauteur : 8 cm</FormControl.Label>
                  </FormControl>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button
                      style={{ backgroundColor: "indigo" }}
                      onPress={() => {
                        setshowModalItem(false);
                      }}
                    >
                      Revenir
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </VStack>

          <VStack>
            <Button
              style={{ backgroundColor: "indigo" }}
              onPress={() => setshowModalRecipient(true)}
            >
              Coordonnées du receveur
            </Button>
            <Modal
              isOpen={showModalRecipient}
              onClose={() => setshowModalRecipient(false)}
            >
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Coordonnées du receveur</Modal.Header>
                <Modal.Body>
                  <FormControl>
                    <FormControl.Label>Nom : DUMANS</FormControl.Label>
                  </FormControl>
                  <FormControl mt="3">
                    <FormControl.Label>Prenom : Alexis</FormControl.Label>
                  </FormControl>
                  <FormControl mt="3">
                    <FormControl.Label>
                      Email : alexis.dumant@gmail.com
                    </FormControl.Label>
                  </FormControl>
                  <FormControl mt="3">
                    <FormControl.Label>Tel : 06 07 08 09 13</FormControl.Label>
                  </FormControl>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button
                      style={{ backgroundColor: "indigo" }}
                      onPress={() => {
                        setshowModalRecipient(false);
                      }}
                    >
                      Revenir
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </VStack>

          <VStack>
            <Button.Group
              marginTop="5%"
              colorScheme="indigo"
              mx={{
                base: "auto",
                md: 0,
              }}
              size="lg"
            >
              <Button
                style={{ backgroundColor: "#e11d48", marginRight: "20%" }}
              >
                Annuler
              </Button>
              <Button
                onPress={() => props.navigation.navigate("TerminateMission")}
                style={{ backgroundColor: "#059669" }}
              >
                Terminer
              </Button>
            </Button.Group>
          </VStack>
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

function mapStateToProps(state) {
  return { idmission: state.idmissionReducer };
}

export default connect(mapStateToProps, null)(CurrentMissionClient);
