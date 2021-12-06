import React from "react";
import { View, Text } from 'react-native';

function CurrentMission(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <Text>
                Mission en cours
            </Text>
        </View>
    );
}

export default CurrentMission;
