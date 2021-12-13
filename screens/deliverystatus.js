import React, { useState, useEffect } from "react";

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

function DeliveryStatus(props) {

    console.log(props.route.params)
    const [supportedDelivery, setSupportedDelivery] = useState(false);
    const [inTransitDelivery, setIntransitDelivery] = useState(false);
    const [delivered, setDelivered] = useState(false);
    const [inProgress, setInProgress] = useState(0);
    const [disableButton, setDisableButton] = useState(true)


    useEffect(() => {
        if (supportedDelivery) {
            setInProgress(33);            
        }
        if (inTransitDelivery) {
            setInProgress(66);
            setDisableButton(false);
        }
        if (delivered) {
            setInProgress(100); 
            setDisableButton(false);
        }

    }, []);

    console.log("supportedDelivery", supportedDelivery, inProgress)
    console.log("inTransitDelivery", inTransitDelivery, inProgress)
    console.log("delivered", delivered, inProgress)
    console.log("disableButton", disableButton);

    console.log(props.route.params);
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
                        isChecked={supportedDelivery}
                    >
                        Colis pris en charge
                    </Checkbox>
                    <Checkbox
                        colorScheme="purple"
                        size="lg"
                        isChecked={inTransitDelivery}
                    >
                        Colis en transit
                    </Checkbox>
                    <Checkbox
                        colorScheme="purple"
                        size="lg"
                        isChecked={delivered}
                    >
                        Colis livré
                    </Checkbox>
                </VStack>
            </Center>

            <Center marginTop="150">
                <VStack space={4} alignItems="center">
                    <Box>
                        {disableButton ? <Button size="lg"
                backgroundColor="error.800"
                onPress={() => console.log("disableButton", disableButton)
                }>
                Annuler la demande
            </Button> : null}
                    </Box>
                </VStack>
            </Center>
        </NativeBaseProvider>
    )
}

export default DeliveryStatus;