import React from "react";
// import { View, Text } from 'react-native';

import { NativeBaseProvider, Center } from 'native-base';


function NewMission(props) {
    return (
        <NativeBaseProvider>
            <Center
                bg="indigo.800"
                _text={{
                    color: "#9b59b6",
                    fontWeight: "600",
                    fontSize: "32",

                }}
                height={160}
                width="100%">

                Nouvelle mission
            </Center>
        </NativeBaseProvider>
    );
}

export default NewMission;
