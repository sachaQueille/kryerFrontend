import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
    NativeBaseProvider,
    Text,
    Center,
    Box,
    Heading,
    Icon,
    Pressable,
} from "native-base";
import { Image, ScrollView} from "react-native";
import { useIsFocused } from '@react-navigation/native';

//import styles from "../vglobal/styles";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

function MyDelivery(props) {
    const [dataDelivery, setDataDelivery] = useState("");

    const isFocused = useIsFocused(false);

   
      
       
  

  
    useEffect(() => {   
        if(isFocused){    

            async function loadDelivery() {
                        var response = await fetch(`${global.ipa}loadMyDeliveries`, {
                            method: "POST",
                            headers: { "Content-Type": "application/x-www-form-urlencoded" },
                            body: `userId=${props.user._id}`,
                        });

                        response = await response.json();

                        console.log("response.deliveries", response.deliveries);
                        setDataDelivery(response.deliveries);
                    }

          loadDelivery();
        }
      }, [isFocused]);

    const data = dataDelivery;

    console.log("data", data);

    const handleDeliveryClick = (sendata) => {
        props.navigation.navigate("DeliveryStatus", {
            deliveryStatus: {
                price: sendata.price,
                verifcode: sendata.verifCode,
                delivery_status: sendata.delivery_status
            },
        });
    };

    var iconName = "";
    const selectIcon = (status) => {
        if (status == "notYet") {
            iconName = "schedule-send";
            return iconName;
        } else if (status == "accept") {
            iconName = "send";
            return iconName;
        } else if (status == "cancel") {
            iconName = "cancel-schedule-send";
            return iconName;
        }
    };

    var deliveryList = "";
    if (data.length == 0) {
        deliveryList = (
            <Text style={{ textAlign: "center" }}>
                Vous n'avez pas encore envoyé un colis!
            </Text>
        );
    } else {
        deliveryList = (
            <Box>
                {data.map((item) => (
                    <Pressable
                        onPress={() => handleDeliveryClick(item)}
                        key={item._id}
                        marginBottom="5"
                        p={2}
                        borderWidth={1}
                        borderRadius="md"
                        bgColor="cyan.200"
                        borderColor="cyan.200"
                        borderRadius="15"
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 5,
                        }}
                    >
                        <Icon
                            as={<MaterialCommunityIcons name="cube-send" />}
                            size={8}
                            mr="5"
                            color="indigo.800"
                        />
                        <Text>
                            {" "}
                            {item.departure_journey} / {item.arrival_journey} - {item.weight}
                            kg - {item.price}€{" "}
                        </Text>
                        <Icon
                            as={<MaterialIcons name={selectIcon(item.validateStatus)} />}
                            size={6}
                            ml="5"
                            color="indigo.800"
                        />
                    </Pressable>
                ))}
            </Box>
        );
    }

    return (
        <NativeBaseProvider style={{backgroundColor:"white"}}>
            <Image source={require("../assets/send.png")} style={{flex:1, justifyContent:'center', alignItems:'center',position:"absolute", marginTop:"60%",opacity:0.8}} width="50%" height="30%"/>
           
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
                Suivre mes colis
            </Center>
            
            <ScrollView>
            <Center flex={1} px="3" marginTop="10%">
                {deliveryList}
            </Center>
            </ScrollView>
        </NativeBaseProvider>
    );
}

function mapStateToProps(state) {
    return { user: state.userReducer };
}

export default connect(mapStateToProps, null)(MyDelivery);