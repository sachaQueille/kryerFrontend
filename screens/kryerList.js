import React from "react"
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
} from "native-base";

import {connect} from 'react-redux';



function KryerList(props){

    console.log(props.kryerList);

    //valeur de l'affichage
    var kryerList = "";
    if(props.kryerList.length === 0){
        kryerList = <Text style={{textAlign:'center'}}>"Aucun Kryer ne correspond a votre recherche , essaye avec d'autres critères :)"</Text>
    }

    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                {kryerList}
            </Center>
        </NativeBaseProvider>
    )

}

function mapStateToProps(state){
    return {kryerList : state.kryerReducer}
}

export default connect(
    mapStateToProps,
    null
)(KryerList);