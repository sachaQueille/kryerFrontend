import React from "react";

import { FontAwesome, Ionicons } from '@expo/vector-icons';
// import { View, Text } from 'react-native';

import { NativeBaseProvider, Center, HStack, Badge, Box, Button, Stack, Icon, Text, Avatar } from 'native-base';
import { ScrollView } from "react-native-gesture-handler";


export default function NewMission(props) {
    return (
        <NativeBaseProvider>
<<<<<<< HEAD

            <Center
                bg="indigo.800"
                _text={{
                    color: "#9b59b6",
                    fontWeight: "600",
                    fontSize: 32,

                }}
                height={160}
                width="100%">

                <Text>Nouvelle mission</Text>
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
                height="80%"
                flexDir="column">
                <Button
                    leftIcon={<Avatar
                        bg="purple.600"
                        alignSelf="center"
                        size="xl"
                        source={{
                            uri: "./assets/avatarfemal.jpg",
                        }}
                    />}
                    rightIcon={<FontAwesome name="cube" size={32} type="Ionicons" color="white" >13 kg </FontAwesome>}
                    colorScheme="purple"
                   onPress={() => props.navigation.navigate('NewMissionOne')} 
                >
                    Alice DUPONT
                    <Text> Paris/Martinique</Text>

                </Button>

                <Button
                    leftIcon={<Avatar
                        bg="purple.600"
                        alignSelf="center"
                        size="xl"
                        source={{
                            uri: "./assets/avatarfemal.jpg",
                        }}
                    />}
                    rightIcon={<FontAwesome name="cube" size={32} type="Ionicons" color="white" >13 kg </FontAwesome>}
                    colorScheme="purple"
                    onPress={() => props.navigation.navigate('NewMissionOne')}
                >
                    Jean LEPETIT
                    <Text> Paris/Martinique</Text>

                </Button>

                <Button
                    leftIcon={<Avatar
                        bg="purple.600"
                        alignSelf="center"
                        size="xl"
                        source={{
                            uri: "./assets/avatarfemal.jpg",
                        }}
                    />}
                    rightIcon={<FontAwesome name="cube" size={32} type="Ionicons" color="white" >13 kg </FontAwesome>}
                    colorScheme="purple"
                    onPress={() => props.navigation.navigate('NewMissionOne')}
                >
                    Jack SPAROW
                    <Text> Martinique/Paris</Text>

                </Button>
            </Stack>

=======
            <ScrollView>
                <Center
                    bg="indigo.800"
                    _text={{
                        color: "#9b59b6",
                        fontWeight: "600",
                        fontSize: "32",

                    }}
                    height={160}
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
                    height="80%"
                    flexDir="column">
                    <Button
                        leftIcon={<Avatar
                            bg="purple.600"
                            alignSelf="center"
                            size="xl"
                            source={{
                                uri: "./assets/avatarfemal.jpg",
                            }}
                        />}
                        rightIcon={<FontAwesome name="cube" size={32} type="Ionicons" color="white" >13 kg </FontAwesome>}
                        colorScheme="purple"
                        onPress={() => props.navigation.navigate('NewMissionOne')}
                    >
                        Alice DUPONT
                        <Text> Paris/Martinique</Text>

                    </Button>

                    <Button
                        leftIcon={<Avatar
                            bg="purple.600"
                            alignSelf="center"
                            size="xl"
                            source={{
                                uri: "./assets/avatarfemal.jpg",
                            }}
                        />}
                        rightIcon={<FontAwesome name="cube" size={32} type="Ionicons" color="white" >13 kg </FontAwesome>}
                        colorScheme="purple"
                        onPress={() => props.navigation.navigate('NewMissionOne')}
                    >
                        Jean LEPETIT
                        <Text> Paris/Martinique</Text>

                    </Button>

                    <Button
                        leftIcon={<Avatar
                            bg="purple.600"
                            alignSelf="center"
                            size="xl"
                            source={{
                                uri: "./assets/avatarfemal.jpg",
                            }}
                        />}
                        rightIcon={<FontAwesome name="cube" size={32} type="Ionicons" color="white" >13 kg </FontAwesome>}
                        colorScheme="purple"
                        onPress={() => props.navigation.navigate('NewMissionOne')}
                    >
                        Jack SPAROW
                        <Text> Martinique/Paris</Text>

                    </Button>
                </Stack>
            </ScrollView>
>>>>>>> fa4624dec7dd02ccf4f5601cb2971045e92d9eac


        </NativeBaseProvider>
    );
}


