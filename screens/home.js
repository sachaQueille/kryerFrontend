import React from 'react';
import { View, Button } from 'react-native';

export default function Home(props) {
    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View >
                <Button
                    title="Proposer une mission"
                    onPress={() => props.navigation.navigate('PurposeJourney')}
                />
            </View>

            <View>
                <Button
                    title="Envoyer colis"
                    onPress={() => props.navigation.navigate('SendDelivery')}
                />
            </View>
            </View>
    );
}
