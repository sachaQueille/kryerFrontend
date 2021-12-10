import React from "react";
import { Box, Heading,NativeBaseProvider, Center, Avatar, 
 Image, Button, Text, HStack, Spacer, VStack} from 'native-base';
import { connect } from "react-redux";

function MissionsScreen3(props){


    var info = props.route.params;
    
    
    const logo = require("../assets/download.jpeg");

    async function acceptClick(){
        
        if(info.delivery_status == "accept"){
            props.navigation.navigate("TerminateMission")
        }

        var  responce = await fetch("http://172.17.1.42:3000/changeStatusMission", {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `idMission=${props.missionId}&weigth=${info.weigth}&idDelivery=${info._id}`
            });

        responce = await responce.json();
        if(responce == true){
            props.navigation.navigate('JourneyScreen')
        }
    }

    return ( 
    <NativeBaseProvider>
    <Center flex={1} px="3" >
        <Center>

            
            <HStack space={3} justifyContent="space-between"  style={{marginLeft:'10%'}}>
                <Avatar 
                    size="48px"
                    source={{
                        uri: info.infoExpeditor.avatar,
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
                        >
                        {info.infoExpeditor.firstName} {info.infoExpeditor.lastName}
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
                    {info.infoExpeditor.note} 
                </Text>
            </HStack>
            
            
            <Box style={{   flexDirection:'row', 
                            paddingVertical: 0, 
                            justifyContent:'space-between',
                            padding: 10,
                            margin:5}}
            >

                    <Box p="3">
                        <Image
                        source={logo}
                        alt="image"
                        width="110" height="110" />
                    </Box>
           
                    <Box p="3">
                        <Text>Information Colis</Text>
                        <Text>Poids : {info.weigth}</Text>
                        <Text>Hauteur : {info.measures.heigth} </Text>
                        <Text>Longueur : {info.measures.length}</Text>
                        <Text>Largeur : {info.measures.width} </Text>
                    </Box>
            </Box> 
                    <Box p="3">
                        <Text>Coordonnées du receveur</Text>
                        <Text>Nom : {info.coordinates_recipient.lastName}</Text>
                        <Text>Prenom : {info.coordinates_recipient.firstName}</Text>
                        <Text>Email : {info.coordinates_recipient.email}</Text>
                        <Text>Telephone : {info.coordinates_recipient.phone}</Text>
                    </Box>                
           

        </Center>
        {(info.delivery_status == "terminate") ? null : 
        <Center>
            
                <Button.Group
                display="flex"
                flexDirection="row"
                size="lg"
                marginTop="4"
                marginBottom="4"
                mx="12"
                >
                    <Button style={{width:'50%'}}>
                    { (info.delivery_status == "accept") ? "Annuler" : "Refuser"} 
                    </Button> 

                    <Button 
                    style={{backgroundColor:"indigo",width:'50%'}}
                    onPress={() => acceptClick()}
                    >
                      { (info.delivery_status == "accept") ? "Terminer" : "accepter"} 
                    </Button>   
                </Button.Group> 
        </Center>   }                  
    </Center>
    
</NativeBaseProvider>)
   
}

function mapStateToProps(state){
    return { missionId: state.missionIdReducer}
  }
  


  export default connect(
    mapStateToProps,
    null
  )(MissionsScreen3);