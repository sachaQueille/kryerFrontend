import React from 'react';
import { View } from 'react-native';
import { Button, NativeBaseProvider} from 'native-base';


export default function Home(props) {
    return (
        <NativeBaseProvider>
             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Button
                 
                    onPress={() => props.navigation.navigate('PurposeJourney')}
                >Proposer une mission</Button>
            </View>

            <View>
                <Button
                   
                    onPress={() => props.navigation.navigate('SendDelivery')}
                >Envoyer colis</Button>
            </View>
            </View>
        </NativeBaseProvider>
       
    );
}
