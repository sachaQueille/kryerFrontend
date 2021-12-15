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
    Button,

} from "native-base";
import { View, ScrollView, TouchableOpacity } from "react-native";
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
        kryerList = <Text marginTop="80%" style={{ textAlign: 'center' }}>Aucun Kryer ne correspond a votre recherche , essayez avec d'autres critères :)</Text>
    } else {
        kryerList = props.kryerList.map(function (item, i) {
            return (
                <Box

                    w={{
                        base: "100%",
                        md: "25%",
                    }}
                >

                    <TouchableOpacity onPress={() => boxClick(item)} key={i} >
                        <Box
                        marginTop="10%"
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
                                <View style={{ alignItems: "center", width: 120 }} justifyContent="center">
                                    <Avatar
                                        size="48px"
                                        source={{
                                            uri: item.infoKryer.avatar,
                                        }}
                                        bg='transparent'
                                    />
                                    <Text>{item.infoKryer.firstName} {item.infoKryer.lastName}</Text>
                                </View>
                                <VStack justifyContent="center">
                                    <Text
                                        style={{ fontSize: 16, textAlign: "center" }}
                                        _dark={{
                                            color: "warmGray.50",
                                        }}
                                        color="coolGray.800"
                                        bold
                                    >
                                        {item.departure} / {item.arrival}
                                    </Text>
                                    <Text
                                        style={{ textAlign: "center" }}
                                        color="coolGray.600"
                                        _dark={{
                                            color: "warmGray.200",
                                        }}
                                    >
                                        {item.date}
                                    </Text>
                                </VStack>
                                <Spacer />
                                <View justifyContent="center">
                                    <Text

                                        fontSize="lg"
                                        _dark={{
                                            color: "warmGray.50",
                                        }}
                                        color="coolGray.800"
                                        alignSelf="flex-start"
                                    >
                                        {item.price} €
                                    </Text>
                                </View>
                            </HStack>
                        </Box>
                    </TouchableOpacity>
                    <Center margin={5}>
                        <Button variant="outline" colorScheme='indigo' style={{ marginRight: 50 }} onPress={() => props.navigation.navigate('SendDelivery')}>retour</Button>
                    </Center>
                </Box>

            )
        })
    }

    return (
        <NativeBaseProvider>
            <Center
        style={{ backgroundColor: "indigo" }}
        _text={{
          color: "#ffffff",
          fontWeight: "600",
          fontSize: "32",
          marginTop: "10%",
        }}
        height={120}
        width="100%"
      >
        Disponibilité du Kryer
      </Center>
            <ScrollView>
                <Center flex={1} px="3">                    
                    {kryerList}
                </Center>
            </ScrollView>
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