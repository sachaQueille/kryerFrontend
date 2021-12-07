import React from "react";
import { VStack, Box, Divider, extendTheme, NativeBaseProvider, Button, Center } from 'native-base';

//


// Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
    brand: {
      900: '#8287af',
      800: '#7c83db',
      700: '#b3bef6',
    },
  };

const theme = extendTheme({ colors: newColorTheme });

export default function CurrentMission({navigation}) {
    return (
        <NativeBaseProvider theme={theme}>
            <Center>
            <Box border="1" borderRadius="md">
                <VStack space="4" divider={<Divider />}>
                    <Box px="4" pt="4" onPress={() =>
                    navigation.navigate("CurrentMissionClient")
                    }>
                    Paris / Martinique le 26/12/2021
                    </Box>
                    <Box px="4">
                    Martinque / Paris le 06/01/2021
                    </Box>
                    <Button variant="outline">
                    Paris / Martinique le 26/12/2021
                    </Button>
                    <Button variant="outline">
                    Martinque / Paris le 06/01/2021
                    </Button>
                </VStack>
            </Box>
            </Center>
            
        </NativeBaseProvider>        
    );
}


