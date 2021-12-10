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
    Button
} from "native-base";

import { connect } from 'react-redux';



function KryerList(props) {

  
    console.log(props.kryerList)

    const boxClick = (e) => {

        props.kryer(e)
        props.navigation.navigate('Kryer');
    }


    //valeur de l'affichage
    var kryerList = "";
    if (props.kryerList.length === 0) {
        kryerList = <Text style={{ textAlign: 'center' }}>"Aucun Kryer ne correspond a votre recherche , essaye avec d'autres critères :)"</Text>
    } else {
        kryerList =
            <Box
                w={{
                    base: "100%",
                    md: "25%",
                }}
            >
                <Heading fontSize="xl" p="4" pb="3" style={{ textAlign: 'center', marginBottom: 20 }}>
                    Kryer disponible
                </Heading>
                <FlatList
                    data={props.kryerList}
                    renderItem={({ item }) => (
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
                            <HStack space={3} justifyContent="space-between">
                                <Avatar
                                    size="48px"
                                    source={{
                                        uri: item.infoKryer.avatar,
                                    }}
                                    bg='transparent'
                                />
                                <VStack>
                                    <Text
                                        _dark={{
                                            color: "warmGray.50",
                                        }}
                                        color="coolGray.800"
                                        bold
                                        onPress={() => boxClick(item)}>
                                        {item.departure} / {item.arrival}
                                    </Text>
                                    <Text
                                        color="coolGray.600"
                                        _dark={{
                                            color: "warmGray.200",
                                        }}
                                    >
                                        {item.date}
                                    </Text>
                                </VStack>
                                <Spacer />
                                <Text
                                    fontSize="xs"
                                    _dark={{
                                        color: "warmGray.50",
                                    }}
                                    color="coolGray.800"
                                    alignSelf="flex-start"
                                >
                                    {item.price} €
                                </Text>
                            </HStack>
                        </Box>
                    )}
                    keyExtractor={(item) => item.id}
                />
                <Center margin={5}>
                <Button variant="outline" colorScheme='indigo' style={{marginRight:50}} onPress={()=>props.navigation.navigate('SendDelivery')}>retour</Button>
                </Center>
            </Box>

    }

    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                {kryerList}
            </Center>
        </NativeBaseProvider>
    )

}

function mapStateToProps(state) {
    return { kryerList: state.kryerListReducer }
}


function mapDispatchToProps(dispatch) {
    return {
        kryer: function (e) {
            dispatch({ type: 'kryer', kryer: e })
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KryerList);