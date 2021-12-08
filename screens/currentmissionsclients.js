import React from "react";
import { Box, Heading,NativeBaseProvider, Progress, Center, Avatar,
FormControl, Select,CheckIcon,VStack, Divider, Image, Flex,Badge, Button, Text } from 'native-base';

//


export default function CurrentMissionClient(props) {
    
    return (
        <NativeBaseProvider marginTop="4">
            <Center style={{flex:1}}>
                <Box w="90%">
                    <Center mb="10">
                        <Heading size="md">Capacite de transport restante:</Heading>
                    </Center>
                    <Progress colorScheme="primary" bg="cyan.200" mb="4" value={75} mx="4" />
                </Box>  
                <Avatar size={32}>45€</Avatar>

                <FormControl marginTop="4" style={{width:'50%'}} isRequired isInvalid>
                    <FormControl.Label>Selectionner un client</FormControl.Label>
                    <Select
                    minWidth="200"
                    accessibilityLabel="Appliquer le filtre"
                    placeholder="Appliquer le filtre"
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
            </Center>

            <Center>
            
            <Box>
                <Image
                source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                }}
                alt="image"
                />
                <Text>Poids</Text>
                <Text>Hauteur</Text>
                <Text>Longueur</Text>
                <Text>Largeur</Text>
            </Box>
            <Box border="1" borderRadius="md">
                <VStack space="4" divider={<Divider />}> 
                    <Badge>
                        Coordonnées receveur
                    </Badge>
                </VStack>
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
                        Annuler
                    </Button> 

                    <Button 
                    style={{backgroundColor:"indigo",width:'50%'}}
                    onPress={() => props.navigation.navigate("TerminateMission")}
                    >
                        Terminer
                    </Button>   
                </Button.Group> 
            </Center>                     
        </NativeBaseProvider>        
    );
}


