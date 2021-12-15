import React from "react";
import { connect } from "react-redux";
import {
  Box,
  Text,
  Center,
  HStack,
  NativeBaseProvider,
  View,
  Avatar,
  VStack,
  Spacer,
  Button,
} from "native-base";

function Kryer(props) {
  const acceptClick = () => {
    if (props.user) {
      props.navigation.navigate("ReceipientCoordinate", {
        id: props.kryer.id,
        price: props.kryer.price,
      });
    } else {
      props.navigation.navigate("Profil");
    }
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box
          style={{ width: "80%", marginBottom: 10 }}
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
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
              <View style={{ alignItems: "center", width: 120 }}>
                <Avatar
                  size="48px"
                  source={{
                    uri: props.kryer.infoKryer.avatar,
                  }}
                  bg="transparent"
                />
                <Text>
                  {props.kryer.infoKryer.firstName}{" "}
                  {props.kryer.infoKryer.lastName}
                </Text>
              </View>
              <VStack justifyContent="center">
                <Text
                  style={{ textAlign: "center" }}
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {props.kryer.departure} / {props.kryer.arrival}
                </Text>
                <Text
                  style={{ textAlign: "center" }}
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {props.kryer.date}
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
                {props.kryer.note}
              </Text>
            </HStack>
          </Box>
        </Box>

        <Box
          style={{
            width: "80%",
            height: "20%",
            justifyContent: "center",
            marginBottom: 4,
            paddingLeft: 10,
          }}
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Text>Depart :</Text>
          <Text>Lieu : {props.kryer.place_receipt}</Text>
          <Text>Date : {props.kryer.date_receipt}</Text>
        </Box>
        <Box
          style={{
            width: "80%",
            height: "20%",
            justifyContent: "center",
            marginBottom: 4,
            paddingLeft: 10,
          }}
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Text>Arrivée :</Text>
          <Text>Lieu : {props.kryer.place_delivery}</Text>
          <Text>Date : {props.kryer.date_delivery}</Text>
        </Box>

        <Box
          style={{
            width: "80%",
            height: "10%",
            justifyContent: "center",
            marginBottom: 4,
            paddingLeft: 10,
          }}
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Text>Prix : {props.kryer.price} €</Text>
        </Box>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Button
            style={{ marginRight: 50 }}
            mx="12"
            size="lg"
            onPress={() => props.navigation.navigate("KryerList")}
          >
            Retour
          </Button>
          <Button
            style={{ backgroundColor: "indigo" }}
            mx="12"
            size="lg"
            onPress={() => acceptClick()}
          >
            Choisir ce Kryer
          </Button>
        </View>
      </Center>
    </NativeBaseProvider>
  );
}

function mapStateToProps(state) {
  return { kryer: state.kryerReducer, user: state.userReducer };
}

export default connect(mapStateToProps, null)(Kryer);
