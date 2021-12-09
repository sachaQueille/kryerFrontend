import React, { useState } from "react";

import { FontAwesome } from '@expo/vector-icons';
// import { View, Text } from 'react-native';

import {
    NativeBaseProvider,
    Center,
    HStack,
    Badge,
    Box,
    Button,
    Stack,
    Icon,
    Text,
    VStack,
    Avatar,
    Image,
    Modal,
    FormControl,
    Input,
    AspectRatio,
} from 'native-base';


import { ScrollView } from "react-native-gesture-handler";


export default function NewMissionOne(props) {
    const [showModal, setShowModal] = useState(false)
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Center
                    style={{ backgroundColor: "indigo" }}
                    _text={{
                        color: "#ffffff",
                        fontWeight: "600",
                        fontSize: "32",
                        marginTop: "10%"

                    }}
                    height={120}
                    width="100%">
                    Nouvelles missions
                </Center>



                <Stack flex={1}
                    direction={{
                        base: "column",
                        md: "row",
                        justifyContent: 'center',

                    }}
                    space={8}
                    px="10"
                    py="10"
                    width="100%"
                    height="0%"
                    flexDir="column">
                    <VStack
                        space={2}
                        alignItems={{
                            base: "center",
                            md: "flex-start",
                        }}
                    >
                        <Avatar
                            bg="amber.500"
                            size="xl"
                            source={{
                                uri: "https://meragor.com/files/styles//ava_800_800_wm/dlya_devochek2.jpg",
                            }}
                        />

                        <Text fontWeight="bold">
                            Alice DUPONT
                        </Text>

                    </VStack>

                    <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image
                                source={{
                                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
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
                            15 kg
                        </Center>
                    </Box>

                    <VStack>
                        <Button style={{ backgroundColor: "indigo" }} onPress={() => setShowModal(true)}>Dimensions</Button>
                        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
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
                                                setShowModal(false)
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
                            marginTop="30%"
                            colorScheme="indigo"
                            mx={{
                                base: "auto",
                                md: 0,
                            }}
                            size="lg"
                        >
                            <Button style={{ backgroundColor: "#e11d48", marginRight: "20%" }}>Refuser</Button>
                            <Button style={{ backgroundColor: "#059669" }}>Accepter</Button>
                        </Button.Group>
                    </VStack>



                </Stack>
            </ScrollView>


        </NativeBaseProvider>
    );
}