import React,{useState, useEffect} from "react";
import { VStack, Box, Divider, extendTheme, NativeBaseProvider, 
    Button, Center, ScrollView, StatusBar,FlatList,Text, View } from 'native-base';


//


// Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
    brand: {
      900: '#8287af',
      800: '#7c83db',
      700: '#b3bef6',
    },
  };

const theme = extendTheme({ colors: newColorTheme, px:"20px" });

export default function CurrentMission(props) {
    const [dataCurrentMission, setDataCurrentMission] = useState([]);

    useEffect(() => {

        async function loadMission() {
            const rawResponse = await fetch('http://172.17.1.42:3000/getMission');
            const response = await rawResponse.json();          
            setDataCurrentMission(response);
        }
        loadMission()
    }, []);

    const data = dataCurrentMission;
   
    return (
        <NativeBaseProvider >
        <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
        
           
                                       
                        
                      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <FlatList 
                                data={data}
                                
                                renderItem={({item}) => 
                                
                                <Button variant="outline"
                                mx="12"
                                size="lg"
                                marginBottom="5"
                                onPress={() => props.navigation.navigate("CurrentMissionClient")}
                                >
                                <Text>
                                    {item.departure_journey} / {item.arrival_journey} le {item.date_delivery}
                                </Text> 
                                </Button> }
                                keyExtractor={(item) => item._id}
                            />
                       
                        </View>
                        
                                    
           
        </NativeBaseProvider>        
    );
}


