import React , {useEffect, useState} from "react"
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

import { connect } from 'react-redux';
import { TouchableOpacity } from "react-native";

function MissionsScreen2(props){




    function deliveryClick(e){
        props.navigation.navigate("MissionsScreen3", e)
    }

   

    var deliveries = (props.deliveries.length != 0) ? props.deliveries.map(function(e,i){
        
        

        return (
            <TouchableOpacity onPress={()=>deliveryClick(e)} key={i}>
                <Box
                    
                    borderBottomWidth="1"
                    _dark={{
                        borderColor: "gray.600",
                    }}
                    borderColor="coolGray.200"
                    pl="4"
                    pr="5"
                    py="2"
                >
                    <HStack space={3} justifyContent="space-between" >
                        <Avatar key={`avatar${i}`}
                            size="48px"
                            source={{
                                uri: e.infoExpeditor.avatar,
                            }}
                            bg='transparent'
                        />
                        <VStack>
                            <Text 
                            key={`username${i}`}
                                _dark={{
                                    color: "warmGray.50",
                                }}
                                color="coolGray.800"
                                bold
                                
                                >
                                {e.infoExpeditor.firstName} {e.infoExpeditor.lastName}
                            </Text>
                            
                        </VStack>
                        <Spacer />
                        <Text key={`weigth${i}`}
                            fontSize="xs"
                            _dark={{
                                color: "warmGray.50",
                            }}
                            color="coolGray.800"
                            alignSelf="flex-start"
                        >
                            {e.weigth} kg
                        </Text>
                    </HStack>
                </Box> 
            </TouchableOpacity>
           
        )
    }) : <Text>tu n'as aucune demande pour cette mission </Text>

    var statusScreen = <Text marginTop="15%" style={{fontSize:25,color:'#ffffff'}}> Missions Accomplies</Text>
    if (props.route.params.status== "newMission"){
      statusScreen =  <Text
      marginTop="15%"
       style={{fontSize:25,color:'#ffffff'}}> Nouvelles Missions</Text>
    }else if (props.route.params.status == "currentMission"){
      statusScreen = <Text 
      marginTop="15%"
      style={{fontSize:25,color:'#ffffff'}}> Missions  en cours</Text>
    }


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
                {statusScreen}
        </Center>
            <Center flex={1} px="3" marginTop="10">
                {deliveries}
            </Center>
            
        </NativeBaseProvider>
    )

}

function mapStateToProps(state){
    return { deliveries: state.deliveriesReducer}
  }
  



  export default connect(
    mapStateToProps,
    null
  )(MissionsScreen2);