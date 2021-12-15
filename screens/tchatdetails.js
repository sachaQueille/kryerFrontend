import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Box,
  FlatList,
  Icon,
  Center,
  HStack,
  VStack,
  Text,
  Spacer,
  Button,
  NativeBaseProvider,
  Input,
} from "native-base";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

function TchatDetails(props) {
  console.log(props.route.params);

  //on va chercher tous les messages en lien avec cet utilisateur

  const [currentMessage, setCurrentMessage] = useState("");
  const [dataMessages, setDataMessages] = useState();

  useEffect(() => {
    async function loadMessages() {
      var response = await fetch("http://192.168.1.109:3000/loadMessages", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `token=${props.user.token}&idRecipient=${props.route.params.idRecipient}`,
      });

      response = await response.json();
      setDataMessages(response.messages);
      console.log("response", response.messages);
    }
    loadMessages();
  }, []);

  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      id2: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      id2: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      id2: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      id2: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best All the best",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      id2: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ];

  var propertyJusifyContent = "";
  function flexMessageProperty(userId) {
    if (userId === "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba") {
      propertyJusifyContent = "flex-end";
    } else {
      propertyJusifyContent = "flex-start";
    }
    return propertyJusifyContent;
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
        Name
      </Center>
      <Box
        w={{
          base: "100%",
          md: "25%",
        }}
      >
        <FlatList
          data={data}
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
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: flexMessageProperty(item.id2),
              }}
            >
              <HStack space={3} justifyContent="space-between">
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.recentText}
                  </Text>

                  <Text
                    style={{ textAlign: "left" }}
                    fontSize="xs"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    alignSelf="flex-start"
                  >
                    {item.timeStamp}
                  </Text>
                </VStack>
                <Spacer />
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id_dest}
        />
      </Box>

      <VStack style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Input
          onChangeText={(e) => setCurrentMessage(e)}
          value={currentMessage}
          w={{
            base: "100%",
            md: "25%",
          }}
          InputRightElement={
            <Button
              onPress={() => {
                /* socket.emit("sendMessage", {msg: currentMessage, pseudo: props.pseudo}) */
                setCurrentMessage("");
              }}
              style={{ backgroundColor: "transparent" }}
            >
              <Icon
                as={<MaterialCommunityIcons name="send" />}
                size={7}
                mr="2"
                color="muted.400"
              />
            </Button>
          }
          placeholder="Ecrire un message"
        />
      </VStack>
    </NativeBaseProvider>
  );
}

function mapStateToProps(state) {
  return { user: state.userReducer };
}

export default connect(mapStateToProps, null)(TchatDetails);
