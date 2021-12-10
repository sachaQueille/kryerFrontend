import React, { useState, useEffect } from "react";
import {
    VStack, Box, Divider, extendTheme, NativeBaseProvider,
    Button, Center, ScrollView, StatusBar, FlatList, Text
} from 'native-base';
import { connect } from 'react-redux';


// Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
    brand: {
        900: '#8287af',
        800: '#7c83db',
        700: '#b3bef6',
    },
};

const theme = extendTheme({ colors: newColorTheme, px: "20px" });

function NewMission(props) {
    const [dataNewMission, setDataNewMission] = useState([]);

    useEffect(() => {

        async function loadMission() {
            const rawResponse = await fetch('http://192.168.1.33:3000/getMission');
            const response = await rawResponse.json();
            setDataNewMission(response.missions);

            // console.log("response", response.missions)
        }
        loadMission()
    }, []);

    const data = dataNewMission;
    /* console.log(data); */
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
                Nouvelles missions
            </Center>

            <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

            <VStack
                marginTop="10%"
                space="4" divider={<Divider />}>
                <FlatList
                    data={data}

                    renderItem={({ item }) =>

                        <Button variant="outline"
                            mx="12"
                            size="lg"
                            marginBottom="5"
                            onPress={() => { props.navigation.navigate("NewMissionDetails"); props.saveidmission(item._id) }}

                        >
                            <Text>
                                {item.departure_journey} / {item.arrival_journey} le {item.date_journey}
                            </Text>
                        </Button>}
                    keyExtractor={(item) => item._id}
                />
            </VStack>

        </NativeBaseProvider>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        saveidmission: function (idmission) {
            dispatch({ type: 'saveidmission', idmission: idmission })
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(NewMission);





