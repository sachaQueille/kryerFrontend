import React from "react";
import { View, Text } from "react-native";
import { Button, NativeBaseProvider, VStack, } from "native-base";

export default function Home(props) {
    return (
        <NativeBaseProvider>
            <VStack
                mx="auto"
                marginTop="20%"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Text style={{ fontSize: 40, fontWeight: "bold", color: "indigo"}}>KRYER</Text>
            </VStack>

            <VStack
                mx="auto"
                marginTop="10%"
                justifyContent="center"
                alignItems="center"
            >

                <Button
                    style={{ backgroundColor: "indigo" }}
                    onPress={() => props.navigation.navigate("NewMission")}
                    marginBottom={10}
                    marginTop={20}
                    mx="12"
                    size="lg"
                >
                    Nouvelle mission
                </Button>

                <Button
                    style={{ backgroundColor: "indigo" }}
                    onPress={() => props.navigation.navigate("CurrentMission")}
                    marginBottom={10}
                    mx="12"
                    size="lg"
                >
                    Mission en cours
                </Button>
                <Button
                    style={{ backgroundColor: "indigo" }}
                    onPress={() => props.navigation.navigate("FinishedMission")}
                    mx="12"
                    size="lg"
                >
                    Mission accomplie
                </Button>
            </VStack>
        </NativeBaseProvider>
    );
}



// import React from "react";
// import { Box, Heading,NativeBaseProvider, Progress, Center, Avatar,
// FormControl, Select,CheckIcon,VStack, Divider, Image, Flex,Badge, Button, Text } from 'native-base';

// function Journey(props) {
//     return (
        
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <View >
//                 <Button
//                     title="Nouvelle mission"
//                     onPress={() => props.navigation.navigate('NewMission')}
//                 />
//             </View>

//             <View>
//                 <Button
//                     title="Mission en cours"
//                     onPress={() => props.navigation.navigate('CurrentMission')}
//                 />
//             </View>

//             <View>
//                 <Button
//                     title="Mission accomplie"
//                     onPress={() => props.navigation.navigate('FinishedMissions')}
//                 />
//             </View>
//         </View>
//     );
// }

// export default Journey;
