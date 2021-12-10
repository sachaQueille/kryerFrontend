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

function MissionsScreen2(props){

    const [expeditor , setExpeditor] = useState([])

    async function loadExpeditor(e){

        if(expeditor.length != props.deliveries.length){
            var Expeditor = await fetch(`http://172.17.1.42:3000/getUserById?id=${e}`);
            Expeditor = await Expeditor.json();
            
            Expeditor =  Expeditor.user;

            setExpeditor([...expeditor,Expeditor]);
        }
       
    };


    function deliveryClick(e){
        props.navigation.navigate("MissionsScreen3", e)
    }

    

    var deliveries = props.deliveries.map(function(e,i){

        
        loadExpeditor(e.expeditor_id);

        
        
       if(expeditor.length != 0){

        return (
            <Box
            key={i}
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
                        uri: expeditor[i].avatar,
                    }}
                />
                <VStack>
                    <Text key={`username${i}`}
                        _dark={{
                            color: "warmGray.50",
                        }}
                        color="coolGray.800"
                        bold
                        onPress={()=>deliveryClick({infoDelivery:e,infoExpeditor:expeditor[i]})}
                        >
                        {expeditor[i].firstName} {expeditor[i].lastName}
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
        )}
    })

    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                {deliveries}
            </Center>
            
        </NativeBaseProvider>
    )

}

function mapStateToProps(state){
    return { deliveries: state.deliveriesReducer}
  }
  

//   function mapDispatchToProps(dispatch) {
//     return {
//       addDeliveries: function(e) {
//             dispatch( {type: 'addDeliveries', deliveries:e} )
//         }
//     }
//    };

  export default connect(
    mapStateToProps,
    null
  )(MissionsScreen2);