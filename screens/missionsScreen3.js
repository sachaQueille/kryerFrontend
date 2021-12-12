import React from "react";
import { Box, Heading,NativeBaseProvider, Center, Avatar, 
 Image, Button, Text, HStack, Spacer, VStack} from 'native-base';
import { connect } from "react-redux";

export default function MissionsScreen3(props){


    var info = props.route.params;

    const logo = require("../assets/download.jpeg");

    return ( 
    <NativeBaseProvider>
    <Center flex={1} px="3" >
        <Center>

            
            <HStack space={3} justifyContent="space-between" onPress={()=>deliveryClick({infoDelivery:e,infoExpeditor:expeditor})} style={{marginLeft:'10%'}}>
                <Avatar 
                    size="48px"
                    source={{
                        uri: info.infoExpeditor.avatar,
                    }}
                    bg='transparent'
                />
                <VStack>
                    <Text 
                        _dark={{
                            color: "warmGray.50",
                        }}
                        color="coolGray.800"
                        bold
                        >
                        {info.infoExpeditor.firstName} {info.infoExpeditor.lastName}
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
                    {info.infoExpeditor.note} 
                </Text>
            </HStack>
            
            
            <Box style={{   flexDirection:'row', 
                            paddingVertical: 0, 
                            justifyContent:'space-between',
                            padding: 10,
                            margin:5}}
            >

                    <Box p="3">
                        <Image
                        source={logo}
                        alt="image"
                        width="110" height="110" />
                    </Box>
           
                    <Box p="3">
                        <Text>Information Colis</Text>
                        <Text>Poids : {info.infoDelivery.weigth}</Text>
                        <Text>Hauteur : {info.infoDelivery.measures.heigth} </Text>
                        <Text>Longueur : {info.infoDelivery.measures.length}</Text>
                        <Text>Largeur : {info.infoDelivery.measures.width} </Text>
                    </Box>
            </Box> 
                    <Box p="3">
                        <Text>Coordonnées du receveur</Text>
                        <Text>Nom : {info.infoDelivery.coordinates_recipient.lastName}</Text>
                        <Text>Prenom : {info.infoDelivery.coordinates_recipient.firstName}</Text>
                        <Text>Email : {info.infoDelivery.coordinates_recipient.email}</Text>
                        <Text>Telephone : {info.infoDelivery.coordinates_recipient.phone}</Text>
                    </Box>                
           

        </Center>

        <Center>
                <Button.Group
                display="flex"
                flexDirection="row"
                size="lg"
                marginTop="4"
                marginBottom="4"
                mx="12"
                >
                    <Button style={{width:'50%'}}>
                        refuser
                    </Button> 

                    <Button 
                    style={{backgroundColor:"indigo",width:'50%'}}
                    onPress={() => props.navigation.navigate("TerminateMission")}
                    >
                        accepter 
                    </Button>   
                </Button.Group> 
        </Center>                     
    </Center>
    
</NativeBaseProvider>)
   
}

