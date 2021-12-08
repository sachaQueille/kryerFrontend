import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

import { FontAwesome } from '@expo/vector-icons';

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
    Avatar,
} from 'native-base';


export const MissionList = (props) => {
    const [dataNewMission, setDataNewMission] = useState([]);


    useEffect(() => {

        async function loadMission() {
            const rawResponse = await fetch('http://192.168.1.33:3000/getMission');
            const response = await rawResponse.json();
            setDataNewMission(response);
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
                                space={3} justifyContent="space-between">
                                <Avatar
                                    size="48px"
                                    source={{
                                        uri: item.avatarUrl,
                                    }}
                                />
                                <VStack>
                                    <Text
                                        _dark={{
                                            color: "warmGray.50",
                                        }}
                                        color="coolGray.800"
                                        bold
                                    >
                                        {item.firstName} {item.lastName}
                                    </Text>
                                    <Text
                                        color="coolGray.600"
                                        _dark={{
                                            color: "warmGray.200",
                                        }}
                                    >
                                        {item.departure_journey}  <FontAwesome name="arrow-right"/>  {item.arrival_journey}
                                    </Text>
                                </VStack>
                                <Spacer />
                                <Text
                                    fontSize="xs"
                                    fontWeight="bold"
                                    _dark={{
                                        color: "warmGray.50",
                                    }}
                                    color="coolGray.800"
                                    alignSelf="flex-start"
                                >
                                    {item.transport_capacity_total} kg
                                </Text>
                                <FontAwesome name="cube" size={32} type="Ionicons" color="indigo" />
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

            <Center flex={1} px="3">
                <MissionList {...props} />
            </Center>


        </NativeBaseProvider>
    );
}


