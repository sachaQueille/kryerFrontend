import React from "react";
import { Box, Heading,NativeBaseProvider, Progress, Center, Avatar,
FormControl, Select,CheckIcon, Image, Button, Text} from 'native-base';

const logo = require("../assets/avatarfemal.jpg");

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
                        bg: "cyan.200",
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
            
            <Box style={{   flexDirection:'row', 
                            paddingVertical: 0, 
                            justifyContent:'space-between',
                            padding: 10,
                            margin:10}}
            >

                    <Box p="3">
                        <Image
                        source={logo}
                        alt="image"
                        />
                    </Box>
                    
                    <Box p="3">
                        <Text>Poids</Text>
                        <Text>Hauteur</Text>
                        <Text>Longueur</Text>
                        <Text>Largeur</Text>
                    </Box>

                    <Box p="3">
                        <Text>Coordonnées</Text>
                        <Text>Nom</Text>
                        <Text>Telephone</Text>
                    </Box>                
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


