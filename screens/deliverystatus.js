import React from "react";
import { View, Button, Text } from 'react-native';

function DeliveryStatus(props) {
    console.log(props.route.params);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            
            <Text>
            Delivery Status
            </Text>
        </View>
    );
}

export default DeliveryStatus;
