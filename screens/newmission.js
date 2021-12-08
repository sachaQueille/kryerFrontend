import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

import { FontAwesome, Ionicons } from '@expo/vector-icons';
// import { View, Text } from 'react-native';

import {
    NativeBaseProvider,
    Center,
    HStack,
    Box,
    Text,
    FlatList,
    Heading,
    VStack,
    Spacer,
} from 'native-base';


export const MissionList = (props) => {
    const [dataNewMission, setDataNewMission] = useState([]);
    // const [dataUser, setDataUser] = useState([]);
    // const [dataDelivery, setDataDelivery] = useState([]);


    useEffect(() => {

        async function loadMission() {
            const rawResponse = await fetch('http://1chassion');
            const response = await rawResponse.json();
          
            setDataNewMission(response);

           

            //     const rawUserResponse = await fetch('http://192.168.1.33:3000/user');
            //     const userRespclearronse = await rawUserResponse.json();
            //     console.log("userResponse : ", userResponse);
            //     setDataUser();

            //     const rawDeliveryResponse = await fetch('http://192.168.1.33:3000/delivery');
            //     const deliveryResponse = await rawDeliveryResponse.json();
            //     console.log("deliveryResponse : ", deliveryResponse);
            //     setDataDelivery();
        }
        loadMission()
    }, []);

    const data = dataNewMission

    return (
        <Box
            w={{
                base: "100%",
                md: "25%",
            }}
        >
            <Heading fontSize="xl" p="4" pb="3" />

            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('NewMissionOne')}
                    >
                        <Box
                            borderBottomWidth="1"
                            _dark={{
                                borderColor: "gray.600",
                            }}
                            borderColor="coolGray.200"
                            pl="4"
                            pr="5"
                            py="2"
                        >
                            <HStack
                                space={3} justifyContent="space-evenly">
                                {/* <Avatar
                                    size="48px"
                                    source={{
                                        uri: item.avatarUrl,
                                    }}
                                /> */}
                                <VStack>
                                    <Text
                                        _dark={{
                                            color: "warmGray.50",
                                        }}
                                        color="coolGray.800"
                                        bold
                                    >
                                        {item.departure_journey} / {item.arrival_journey}
                                    </Text>
                                    <Text
                                        color="coolGray.600"
                                        _dark={{
                                            color: "warmGray.200",
                                        }}
                                    >
                                        {item.date_journey}
                                    </Text>
                                </VStack>
                                <Spacer />
                                <Text
                                    fontSize="xs"
                                    _dark={{
                                        color: "warmGray.50",
                                    }}
                                    color="coolGray.800"
                                    alignSelf="flex-start"
                                >
                                    {item.transport_capacity_total}
                                </Text>
                                <FontAwesome name="cube" size={32} type="Ionicons" color="purple" />
                            </HStack>
                        </Box>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
        </Box>
    )
}

export default function NewMission(props) {

    return (
        <NativeBaseProvider>
                            
                <Center
                    bg="#3730a3"
                    _text={{
                        color: "#9b59b6",
                        fontWeight: "600",
                        fontSize: "32",
                    }}
                    height={120}
                    width="100%">
                    Nouvelle mission
                </Center>

                <Center flex={1} px="3">
                    <MissionList {...props} />
                </Center>
                                
            
        </NativeBaseProvider>
    );
}


