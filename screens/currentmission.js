import React from "react";
import { VStack, Box, Divider, extendTheme, NativeBaseProvider, Button, Center, ScrollView } from 'native-base';

//


// Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
    brand: {
      900: '#8287af',
      800: '#7c83db',
      700: '#b3bef6',
    },
  };

const theme = extendTheme({ colors: newColorTheme, px:"20px" });

export default function CurrentMission(props) {
    return (
        <NativeBaseProvider theme={theme} style={{flex:1}}>
            <ScrollView _contentContainerStyle={{
                px: "20px",
                mb: "4",
                minW: "72",
                flex: 1,
            }}>
                <Center style={{flex:1}}>
                    <Box border="1" borderRadius="md">
                        
                        <VStack space="4" divider={<Divider />}>
                            <Button variant="outline"
                            onPress={() => props.navigation.navigate("CurrentMissionClient")}
                            >
                            Paris / Martinique le 26/12/2021
                            </Button>

                            <Button variant="outline"
                            onPress={() => props.navigation.navigate("CurrentMissionClient")}
                            >
                            Paris / Martinique le 26/12/2021
                            </Button>
                            <Button variant="outline"
                            onPress={() => props.navigation.navigate("CurrentMissionClient")}
                            >
                            Martinque / Paris le 06/01/2021
                            </Button>
                            <Button variant="outline"
                            onPress={() => props.navigation.navigate("CurrentMissionClient")}
                            >
                            Martinque / Paris le 06/01/2021
                            </Button>
                            <Button variant="outline"
                            onPress={() => props.navigation.navigate("CurrentMissionClient")}
                            >
                            Martinque / Paris le 06/01/2021
                            </Button>
                        </VStack>
                                    
                    </Box>
                </Center>
            </ScrollView> 
        </NativeBaseProvider>        
    );
}


