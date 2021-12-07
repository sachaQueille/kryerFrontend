import React from "react";
import { Box, Heading,NativeBaseProvider, Progress, Center, Avatar,
FormControl, Select,CheckIcon,VStack, Divider, Image, Flex } from 'native-base';

//


export default function CurrentMission() {
    return (
        <NativeBaseProvider>
            <Center>
            <Box w="90%">
                <Center mb="10">
                    <Heading size="md">Capacite de transport restante:</Heading>
                </Center>
                <Progress colorScheme="primary" bg="cyan.200" mb="4" value={75} mx="4" />
                </Box>  
                <Avatar size={32}>45€</Avatar>
            </Center>

            <FormControl isRequired isInvalid>
                <FormControl.Label>Clients</FormControl.Label>
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

            <Box border="1" borderRadius="md">
                <VStack space="4" divider={<Divider />}> 
                <Flex direction="row">
                    <Box px="4" pt="4">
                            <Image source={require('../assets/splash.png')} alt="cl" size={20}>                        
                            </Image>

                            <Box>
                                Hello
                            </Box>
                    </Box>

                    <Box px="4" pt="4">
                    Dimensions
                    </Box>
                </Flex>                   
                    

                    <Box px="4">
                    coordo
                    </Box>

                    <Box px="4" pb="4">
                    coordonnees du receveur
                    </Box>
                </VStack>
            </Box>
                  
                        
        </NativeBaseProvider>        
    );
}


