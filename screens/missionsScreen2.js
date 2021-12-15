import React, { useEffect, useState } from "react"
import {
    Box,
    Avatar,
    HStack,
    VStack,
    Text,
    Spacer,
    Center,
    NativeBaseProvider,

} from "native-base";

import { FontAwesome } from "@expo/vector-icons";

import { connect } from 'react-redux';
import { TouchableOpacity } from "react-native";

function MissionsScreen2(props) {

    function deliveryClick(e) {
        props.navigation.navigate("MissionsScreen3", e)
    }

    var deliveries = (props.deliveries.length != 0) ? props.deliveries.map(function (e, i) {



        return (
            <TouchableOpacity onPress={() => deliveryClick(e)} key={i}>

                <Box>
                    <HStack borderBottomWidth="1" width="300" height="20" space="3" justifyContent="space-between" >
                        <Avatar margin="4" key={`avatar${i}`}
                            size="48px"
                            source={{
                                uri: e.infoExpeditor.avatar,
                            }}
                            bg='transparent'
                        />
                        <VStack>
                            <Text margin="4"
                                key={`username${i}`}
                                fontWeight="bold"

                            >
                                {e.infoExpeditor.firstName} {e.infoExpeditor.lastName}
                            </Text>
                        </VStack>
                        
                        <Spacer />

                        <Center>
                            <Text
                                fontSize="xs"
                                fontWeight="bold"
                                alignSelf="flex-start"
                            >
                                {e.weigth} kg
                            </Text>
                            <FontAwesome
                                name="cube"
                                size={32}
                                type="Ionicons"
                                color="indigo"
                            />
                        </Center>
                    </HStack>
                </Box>
            </TouchableOpacity>
        )
    }) : <Text>Vous n'avez aucune demande pour cette mission </Text>

    var statusScreen = "Missions Accomplies"
    if (props.route.params.status == "newMission") {
        statusScreen = "Nouvelles Missions"
    } else if (props.route.params.status == "currentMission") {
        statusScreen = "Missions en cours"
    }


    return (
        <NativeBaseProvider>
            <Center
                style={{ backgroundColor: "indigo" }}
                _text={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: "32",
                    marginTop: "10%",

                }}
                height={120}
                width="100%">
                {statusScreen}
            </Center>

            <Center flex={1} px="3" marginTop="10">
                {deliveries}
            </Center>
        </NativeBaseProvider>
    )
}

function mapStateToProps(state) {
    return { deliveries: state.deliveriesReducer }
}

export default connect(
    mapStateToProps,
    null
)(MissionsScreen2);