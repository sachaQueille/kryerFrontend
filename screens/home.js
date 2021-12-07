import React from 'react';
import { View , StyleSheet} from 'react-native';
import { Button, NativeBaseProvider} from 'native-base';


export default function Home(props) {
    return (
        <NativeBaseProvider>
             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Button style={styles.btn}
                 
                    onPress={() => props.navigation.navigate('PurposeJourney')}
                >Proposer une mission</Button>
            </View>

            <View>
                <Button style={styles.btn}
                   
                    onPress={() => props.navigation.navigate('SendDelivery')}
                >Envoyer colis</Button>
            </View>
            </View>
        </NativeBaseProvider>
       
    );
}

const styles = new StyleSheet.create({
    btn:{
        backgroundColor:'indigo',
        width:200,
        margin:10
    }
})