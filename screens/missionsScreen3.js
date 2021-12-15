import React, { useState , useEffect} from "react";
import {
  Box, Heading, NativeBaseProvider, Center, Avatar,
  Image, Button, Text, HStack, Spacer, VStack, Modal, Checkbox
} from 'native-base';
import { connect } from "react-redux";

function MissionsScreen3(props) {
  var info = props.route.params;

  const logo = require("../assets/download.jpeg");

  var info = props.route.params;





  const [showModal, setShowModal] = useState(false);
  const [err, setErr] = useState(false)
  const [cancelIsClick, setCancelIsClick] = useState(false);
  const [isChecked, setIsChecked] = useState(false)

  async function acceptClick() {

    setCancelIsClick(false);

    if (info.isValidate == "accept") {
      props.navigation.navigate("TerminateMission", info)
    } else {
      var responce = await fetch(`${global.ipa}changeStatusValidate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `idMission=${props.missionId}&weigth=${info.weigth}&idDelivery=${info._id}`
      });

      responce = await responce.json();


      if (responce.err) {
        setErr(true);
        setShowModal(true);
      }
    }

    var addMessage = await fetch(`${global.ipa}addMessageAccept`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `expeditor=${info.expeditor_id}&recipient=${props.user._id}&date="13/12/2021"`,
    });

    responce = await addMessage.json();

    console.log("responce", responce);

    if (responce) {
      props.navigation.navigate("HomeScreen");
    }

  }

  async function cancelClick() {

    setCancelIsClick(true);

    var responce = await fetch(`${global.ipa}changeStatusCancel`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `idDelivery=${info._id}&idMission=${props.missionId}&weigth=${info.weigth}`
    });

        if(responce){
          props.navigation.navigate("HomeScreen")
        }

  }

  useEffect(()=>{
    async function changeStatusTransit(){
        if(isChecked){
        var responce = await fetch(`${global.ipa}changeStatusTransit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `idDelivery=${info._id}`
        });
      }
    }
    changeStatusTransit()
   

  },[isChecked])

  useEffect(()=>{
    if(info.delivery_status == "inTransitDelivery"){
    setIsChecked(true);
  }
  },[])
  

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Center>
          <Box >
            <HStack space={3} justifyContent="space-between" style={{ marginBottom: '5%' }}>
              <Avatar
                size="48px"
                source={{
                  uri: info.infoExpeditor.avatar,
                }}
                bg='transparent'
              />
              <VStack>
                <Text
                  fontWeight="bold"
                >
                  {info.infoExpeditor.firstName} {info.infoExpeditor.lastName}
                </Text>

              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                alignSelf="flex-start"
              >
                {info.infoExpeditor.note}
              </Text>
            </HStack>
          </Box>


          <Box style={{
            flexDirection: 'row',
            paddingVertical: 0,
            justifyContent: 'space-between',
            padding: 10,
            margin: 5
          }}
          >
            {info.infoExpeditor.note}

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

          {(info.isValidate == "accept") ?
          <Box>
              <Text style={{fontSize:18,marginTop:"5%"}}>Signale ton depart a l'expediteur :</Text>
              <Checkbox
                            marginTop="5"
                            colorScheme="purple"
                            size="sm"
                            isChecked={isChecked}
                            onPress={()=>setIsChecked(true)}
                        >
                            Colis en transit
              </Checkbox>
          </Box> : null}



        </Center>
        {(info.delivery_status == "delivered") ?
          <Button variant="outline" colorScheme='indigo' style={{ marginRight: 50 }} onPress={() => props.navigation.navigate('JourneyScreen')}>retour aux missions</Button>
          :
          <Center marginTop="5%">

            <Button.Group
              display="flex"
              flexDirection="row"
              size="lg"
              marginTop="4"
              marginBottom="4"
              mx="12"
            >
              <Button style={{ width: '50%' }}
                onPress={() => setShowModal(true)}>
                {(info.isValidate == "accept") ? "Annuler" : "Refuser"}
              </Button>

              <Button
                style={{ backgroundColor: "indigo", width: '50%' }}
                onPress={() => acceptClick()}
              >
                {(info.isValidate == "accept") ? "Terminer" : "accepter"}
              </Button>
            </Button.Group>
          </Center>}
      </Center>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        {(err && cancelIsClick == false) ?
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />

            <Modal.Body>
              <Text>Tu n'as maleureusement pas assez de place dans tes bagages pour accepter cette mission</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="outline"
                colorScheme="indigo"
                onPress={() => {
                  props.navigation.navigate("JourneyScreen")
                }}
              >
                retour sur mes missions
              </Button>

            </Modal.Footer>
          </Modal.Content>
          :
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />

            <Modal.Body>
              <Text>tu es sur de vouloir {info.isValidate == "accept" ? "annuler" : "refuser"} cette demande ?</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="outline"
                  colorScheme="indigo"
                  onPress={() => {
                    setShowModal(false)
                  }}
                >
                  non
                </Button>
                <Button
                  onPress={() => {
                    cancelClick()
                  }}
                >
                  oui
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>


        }

      </Modal>

    </NativeBaseProvider>
  )
}



function mapStateToProps(state) {
  return { missionId: state.missionIdReducer, user: state.userReducer };
}

export default connect(mapStateToProps, null)(MissionsScreen3);
