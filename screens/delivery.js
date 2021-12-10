import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import {
    NativeBaseProvider,
    Text,
    Spacer,
    VStack,
    HStack,
    Center,
    FlatList,
    Box,
    Heading,
    Avatar,
    List,
    Divider,
    Icon
   
  } from "native-base";

  import { Ionicons, MaterialCommunityIcons, MaterialIcons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
  import variables from "../vglobal/variable";
  const logo = require("../assets/avatarfemal.jpg");

function MyDelivery(props) {
    const[dataDelivery, setDataDelivery] = useState('');
    useEffect(() => {

        async function loadDelivery() {
            const rawResponse = await fetch(`http://192.168.1.109:3000/getDelivery`);
            const response = await rawResponse.json();          
            setDataDelivery(response.deliveries);
        }
        loadDelivery()
    }, []);

    const data=dataDelivery;
    console.log(data);
    console.log(data.length);

    const handleDeliveryClick=(item)=>{
        props.navigation.navigate('DeliveryStatus',{delivery:item});
    }

    var deliveryList = "";
    if (data.length === 0) {
        deliveryList = <Text style={{ textAlign: 'center' }}>"Vous n'avez aucun colis pour l'instant :)"</Text>
    } else {

    deliveryList =
    <Box width="80%" height="50%" >
                    <List mt={2} fontSize={24} spacing={4} my={2} divider={<Divider />} borderRadius="lg">
                        <List.Item>
                            <Icon
                                as={<MaterialCommunityIcons name="cube-send" />}
                                size={8}
                                mr="5"
                                color="indigo.800"
                            />
                            <Text> Paris / Lille - 20kg - 30€ </Text>
                            <Icon
                                as={<Ionicons name="chevron-forward" />}
                                size={6}
                                ml="5"
                                color="indigo.800"

                                onPress={() => handleDeliveryClick("item")}
                            />
                        </List.Item>

                        <List.Item 
                        
                        >
                            <Icon
                                as={<MaterialCommunityIcons name="cube-send" />}
                                size={8}
                                mr="5"
                                color="indigo.800"
                            />
                            <Text> Paris / Lille - 20kg - 30€ </Text>
                            <Icon
                                as={<FontAwesome5 name="ellipsis-h" />}
                                size={6}
                                ml="5"
                                color="indigo.800"

                                onPress={() => handleDeliveryClick("item")}
                            />
                        </List.Item>
                    </List>
                    
                </Box>

            {/* <Box
                w={{
                    base: "100%",
                    md: "25%",
                }}
            >
                <Heading fontSize="xl" p="4" pb="3" style={{ textAlign: 'center', marginBottom: 20 }}>
                    Suivez vos colis
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
                                        uri: item.url_image,
                                    }}
                                />
                                <VStack>
                                    
                                    <Text
                                        _dark={{
                                            color: "warmGray.50",
                                        }}
                                        color="coolGray.800"
                                        bold
                                        onPress={() => handleDeliveryClick(item)}>
                                        {item.weigth} 
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
            </Box> */}

        }

    return (
        <NativeBaseProvider style={{ flex: 1 }}>
            <Center  paddingTop="48">
                {deliveryList}
                
            </Center>
        </NativeBaseProvider>
    );
}


function mapStateToProps(state){
    return {user: state.userReducer}
}

export default connect(
    mapStateToProps,
    null
)(MyDelivery);