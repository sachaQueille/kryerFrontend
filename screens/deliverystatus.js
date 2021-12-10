import React, { useState } from "react";
import { ScrollView } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
// import { View, Text } from 'react-native';

import {
    NativeBaseProvider,
    Center,
    Box,
    Button,
    VStack,
    Heading,
    Progress,
    Checkbox
} from 'native-base';

function DeliveryStatus() {
    const [pass1, setPass1] = useState(false);
    const [pass2, setPass2] = useState(false);
    const [pass3, setPass3] = useState(false);

    var inProgress = 0;

    if (pass1) { inProgress= 33 }
    if (pass1 && pass2) { inProgress = inProgress = 66 }
    if(pass1 && pass2 && pass3) { inProgress = 100 }

    return (
        <NativeBaseProvider>
            <ScrollView>
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
                Suivre mon colis
            </Center>

            <Center marginTop="60">
                <Box w="90%">
                    <VStack space="md">
                        <Heading textAlign="center" mb="10" size="md">
                            Etat de la livraison
                        </Heading>
                        <VStack mx="4" space="md">
                        <Progress size="2xl" colorScheme="purple" value={inProgress} />
                            
                        </VStack>
                    </VStack>
                </Box>
            </Center>

            <Center marginTop="150">
                <VStack space={3}>
                    <Checkbox
                        colorScheme="purple"
                        size="lg"
                        onChange={() => setPass1(!pass1)}
                    >
                        Colis pris en charge
                    </Checkbox>
                    <Checkbox
                        colorScheme="purple"
                        size="lg"
                        onChange={() => setPass2(!pass2)}
                    >
                        Colis en transit
                    </Checkbox>
                    <Checkbox
                        colorScheme="purple"
                        size="lg"
                        onChange={() => setPass3(!pass3)}
                    >
                        Colis livré
                    </Checkbox>
                </VStack>
            </Center>

            <Center marginTop="150">
                <VStack space={4} alignItems="center">
                    <Box>
                        <Button size="lg" backgroundColor="error.800" >
                            Annuler la demande
                        </Button>
                    </Box>
                </VStack>
            </Center>
            </ScrollView>
        </NativeBaseProvider>
    )
}

export default DeliveryStatus;