import React from "react";
import { View, Button } from 'react-native';

function Journey(props) {
    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View >
                <Button
                    title="Nouvelle mission"
                    onPress={() => props.navigation.navigate('NewMission')}
                />
            </View>

            <View>
                <Button
                    title="Mission en cours"
                    onPress={() => props.navigation.navigate('CurrentMission')}
                />
            </View>

            <View>
                <Button
                    title="Mission accomplie"
                    onPress={() => props.navigation.navigate('FinishedMissions')}
                />
            </View>
        </View>
    );
}

export default Journey;
