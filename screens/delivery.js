import React, { useState, useEffect } from "react";
import {
    NativeBaseProvider,
    Text,
    Button,
    VStack,
    ScrollView,
    Divider,
    FlatList
   
  } from "native-base";

function MyDelivery(props) {
    const[dataDelivery, setDataDelivery] = useState('');
    useEffect(() => {

        async function loadMission() {
            const rawResponse = await fetch('http://172.17.1.16:3000/getDelivery');
            const response = await rawResponse.json();          
            setDataDelivery(response);
        }
        loadMission()
    }, []);

    console.log(dataDelivery);
    const data=dataDelivery;

    var deliveryList =
            <Box
                w={{
                    base: "100%",
                    md: "25%",
                }}
            >
                <Heading fontSize="xl" p="4" pb="3" style={{ textAlign: 'center', marginBottom: 20 }}>
                    Liste de mes colis
                </Heading>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
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
                            <HStack space={3} justifyContent="space-between">
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
                                        onPress={() => boxClick(item)}>
                                        {item.departure} / {item.arrival}
                                    </Text>
                                    <Text
                                        color="coolGray.600"
                                        _dark={{
                                            color: "warmGray.200",
                                        }}
                                    >
                                        {item.date}
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
                                    {item.price} €
                                </Text>
                            </HStack>
                        </Box>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </Box>

    return (
        <NativeBaseProvider>                                               
                        <VStack space="4" divider={<Divider />}>
                        <FlatList
                            data={data}
                            renderItem={({item}) => 
                            
                            <Button variant="outline"
                            mx="12"
                            size="lg"
                            marginBottom="10"
                            onPress={() => props.navigation.navigate("DeliveryStatus")}
                            >
                               <Text>
                                   {/* {item.departure_journey} / {item.arrival_journey} le {item.date_delivery} */}
                                   {item.result}
                               </Text> 
                            </Button> }
                            keyExtractor={(item, index) => index}
                        />
                        </VStack>
        </NativeBaseProvider> 
    );
}

export default MyDelivery;
