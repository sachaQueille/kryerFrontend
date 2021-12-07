import React, { useState } from "react";

import { FontAwesome } from '@expo/vector-icons';
// import { View, Text } from 'react-native';

import { NativeBaseProvider, Center, HStack, Badge, Box, Button, Stack, Icon, Text, VStack, Avatar, Image, Modal, FormControl, Input, } from 'native-base';
import { ScrollView } from "react-native-gesture-handler";


export default function NewMissionOne(props) {

    const [showModal, setShowModal] = useState(false)
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Center
                    bg="indigo.800"
                    _text={{
                        color: "#9b59b6",
                        fontWeight: "600",
                        fontSize: "32",

                    }}
                    height={130}
                    width="100%">

                    Nouvelle mission
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
                            bg="purple.600"
                            alignSelf="center"
                            size="2xl"
                            source={{
                                uri: "./assets/avatarfemal.jpg",
                            }}
                        >

                        </Avatar>
                        <Text>
                            Alice DUPONT
                        </Text>

                    </VStack>

                    <VStack>
                        <Image
                            source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg",
                            }}
                            alt="Alternate Text"
                            size="2xl"
                        />
                        <Avatar
                            bg="black"
                        >
                            10 kg
                        </Avatar>
                    </VStack>

                    <VStack>
                        <Button onPress={() => setShowModal(true)}>Dimensions</Button>
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
                            colorScheme="indigo"
                            mx={{
                                base: "auto",
                                md: 0,
                            }}
                            size="lg"
                        >
                            <Button>Save</Button>
                            <Button>Cancel</Button>
                        </Button.Group>
                    </VStack>



                </Stack>
            </ScrollView>


        </NativeBaseProvider>
    );
}






// import { React, useState } from "react";

// import {
//     NativeBaseProvider,
//     Center,
//     HStack,
//     Badge,
//     Box,
//     Button,
//     Stack,
//     Icon,
//     Text,
//     Avatar,
//     Image,
//     Modal,
//     VStack,
//     Radio,
// } from 'native-base';



// export default function NewMission(props) {
//     const [showModal, setShowModal] = useState(false);
//     return (
//         <NativeBaseProvider>

//             <Center
//                 bg="indigo.800"
//                 _text={{
//                     color: "#9b59b6",
//                     fontWeight: "600",
//                     fontSize: "32",

//                 }}
//                 height={160}
//                 width="100%">

//                 Nouvelle mission
//             </Center>



//             <Stack flex={1}
//                 direction={{
//                     base: "column",
//                     md: "row",
//                     justifyContent: 'center',

//                 }}
//                 space={8}
//                 px="10"
//                 py="10"
//                 width="100%"
//                 height="80%"
//                 flexDir="column">


//                 <Center>
//                     <Avatar
//                         bg="pink.600"
//                         alignSelf="center"
//                         size="xl"
//                         source={{
//                             uri: "https://meragor.com/fr/avatar/photo-de-visage-de-filles-sur-telechargement-avatar",
//                         }}
//                     >
//                     </Avatar>
//                     <Text>Alice DUPONT</Text>
//                     <Image
//                         source={{
//                             uri: "https://wallpaperaccess.com/full/317501.jpg",
//                         }}
//                         alt="Alternate Text"
//                         size="2xl"
//                     />
//                     <Avatar
//                         bg="indigo.800"
//                         alignSelf="center"
//                         size="lg"
//                     >
//                         2 kg
//                     </Avatar>
//                 </Center>

//             </Stack>

//             <Center flex={1} px="3">
//                 <Button onPress={() => setShowModal(true)}>Button</Button>
//                 <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
//                     <Modal.Content maxWidth="350">
//                         <Modal.CloseButton />
//                         <Modal.Header>Order</Modal.Header>
//                         <Modal.Body>
//                             <VStack space={3}>
//                                 <HStack alignItems="center" justifyContent="space-between">
//                                     <Text fontWeight="medium">Largeur</Text>
//                                     <Text color="blueGray.400">10 cm</Text>
//                                 </HStack>
//                                 <HStack alignItems="center" justifyContent="space-between">
//                                     <Text fontWeight="medium">Longueur</Text>
//                                     <Text color="blueGray.400">20 cm</Text>
//                                 </HStack>
//                                 <HStack alignItems="center" justifyContent="space-between">
//                                     <Text fontWeight="medium">Hauteur</Text>
//                                     <Text color="green.500">5 cm</Text>
//                                 </HStack>
//                             </VStack>
//                         </Modal.Body>
//                         <Modal.Footer>
//                             <Button
//                                 flex="1"
//                                 onPress={() => {
//                                     setShowModal(false)
//                                 }}
//                             >
//                                 Quitter
//                             </Button>
//                         </Modal.Footer>
//                     </Modal.Content>
//                 </Modal>
//             </Center>

//             <Button.Group
//                 colorScheme="purple"
//                 mx={{
//                     base: "auto",
//                     md: 0,
//                 }}
//                 size="lg"
//             >
//                 <Button>Refuser</Button>
//                 <Button>Accepter</Button>
//             </Button.Group>



//         </NativeBaseProvider>
//     );
// }

