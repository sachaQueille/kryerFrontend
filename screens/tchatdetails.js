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
    Input
} from "native-base";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

function TchatDetails(props) {

    //format date
function formatDate(date) {
    return (
      ("0" + date.getDate()).slice(-2) +
      "/" +
      ("0" + parseInt(date.getMonth() + 1)).slice(-2) +
      "/" +
      date.getFullYear()+"  "+ ("0"+date.getHours()).slice(-2)+" H "+("0"+date.getMinutes()).slice(-2)
    );
  }

    const[valueLoadMessage, setValueLoadMessage]=useState(false);
    //on va chercher tous les messages en lien avec cet utilisateur


    const [currentMessage, setCurrentMessage] = useState("");
    const [dataMessages, setDataMessages] = useState([]);

    //fonction load message
    async function loadMessages() {
        var response = await fetch(`${global.ipa}loadMessages`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `token=${props.user.token}&idRecipient=${props.route.params.idRecipient}`
        });
        response = await response.json();
        setDataMessages(response.messages);
        //console.log("response", response.messages);            

    }

    useEffect(() => {
        loadMessages();
    }, []);


  async function onClickSaveMessage(){
    var response = await fetch(`${global.ipa}sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `expeditor=${props.user._id}&recipient=${props.route.params.idRecipient}&date=${formatDate(new Date())}&message=${currentMessage}`,
      });
  
      response = await response.json();     
      
      if(response.result){
        loadMessages();
        setValueLoadMessage(!valueLoadMessage);        
      }
  }

  //cette fonction permet d'aligner les messages du user à droite et celui du destinataire à gauche
  var propertyJusifyContent = "";
  function flexMessageProperty(userId){
      console.log(userId);
      if(userId === props.user._id){
          propertyJusifyContent = "flex-end"; 
      } else {
        propertyJusifyContent = "flex-start";
      }
      return propertyJusifyContent;
  }

  //console.log("taille messages",dataMessages);

    return (
        <NativeBaseProvider >
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
                {props.route.params.name_dest}
            </Center>
            <FlatList
                data={dataMessages}
                renderItem={({ item }) => {
                    console.log("item", item); return (
                        <Box
                            borderBottomWidth="1"
                            _dark={{
                                borderColor: "gray.600",
                            }}
                            borderColor="coolGray.200"
                            pl="4"
                            pr="5"
                            py="2"
                            style={{ flex: 1, flexDirection: 'row', justifyContent: flexMessageProperty(item.recipient_id) }}
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
                                        {item.message}
                                    </Text>

                                    <Text
                                        style={{ textAlign: 'left' }}
                                        fontSize="xs"
                                        _dark={{
                                            color: "warmGray.50",
                                        }}
                                        color="coolGray.800"
                                        alignSelf="flex-start"
                                    >
                                        {item.date}
                                    </Text>
                                </VStack>
                                <Spacer />

                            </HStack>
                        </Box>

                    )
                }}
                keyExtractor={(item) => item._id}
            />

            <VStack style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>

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
                                onClickSaveMessage();
                                setCurrentMessage('');
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
