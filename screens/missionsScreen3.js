import React, { useState , useEffect} from "react";
import {
  Box,
  NativeBaseProvider,
  Center,
  Avatar,
  Image,
  Button,
  Text,
  HStack,
  Spacer,
  VStack,
  Modal,
  Checkbox
} from "native-base";
import { connect } from "react-redux";

function MissionsScreen3(props) {

  function formatDate(date) {
    return (
      ("0" + date.getDate()).slice(-2) +
      "/" +
      ("0" + parseInt(date.getMonth() + 1)).slice(-2) +
      "/" +
      date.getFullYear()+"  "+ ("0"+date.getHours()).slice(-2)+"H"+("0"+date.getMinutes()).slice(-2)
    );
  }


  var info = props.route.params;

  var info = props.route.params;





  const [showModal, setShowModal] = useState(false);
  const [err, setErr] = useState(false);
  const [cancelIsClick, setCancelIsClick] = useState(false);
  const [isChecked, setIsChecked] = useState(false)

  async function acceptClick() {
    setCancelIsClick(false);

    if (info.isValidate == "accept") {
      props.navigation.navigate("TerminateMission", info);
    } else {
      var responce = await fetch(`${global.ipa}changeStatusValidate`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `idMission=${props.missionId}&weigth=${info.weigth}&idDelivery=${info._id}`,
      });

      responce = await responce.json();

      if (responce.err) {
        setErr(true);
        setShowModal(true);
      }else{
        props.navigation.navigate("HomeScreen");
      
        var addMessage = await fetch(`${global.ipa}addMessageAccept`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `expeditor=${props.user._id}&recipient=${info.expeditor_id}&date=${formatDate(new Date())}`,
        });
      }
    }
  }

  async function cancelClick() {
    setCancelIsClick(true);

    var responce = await fetch(`${global.ipa}changeStatusCancel`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `idDelivery=${info._id}&idMission=${props.missionId}&weigth=${info.weigth}`,
    });

    if (responce) {
      props.navigation.navigate("HomeScreen");
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
          <Box>
            <HStack
              space={3}
              justifyContent="space-between"
              style={{ marginBottom: "5%" }}
            >
              <Avatar
                size="48px"
                source={{
                  uri: info.infoExpeditor.avatar,
                }}
                bg="transparent"
              />
              <VStack>
                <Text fontWeight="bold">
                  {info.infoExpeditor.firstName} {info.infoExpeditor.lastName}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" alignSelf="flex-start">
                {info.infoExpeditor.note}
              </Text>
            </HStack>
          </Box>

          <Box
            style={{
              flexDirection: "row",
              paddingVertical: 0,
              justifyContent: "space-between",
              padding: 10,
              margin: 5,
            }}
          >
            {info.infoExpeditor.note}

            <Box p="3">
              <Image source={{uri:info.url_image}} alt="box" size="lg"/>
            </Box>
            <Box p="3">
              <Text>Information Colis</Text>
              <Text>Poids : {info.weigth}kg</Text>
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
              <Text style={{fontSize:18,marginTop:"5%"}}>Signale ton depart à l'expéditeur :</Text>
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
        {info.delivery_status == "delivered" ? (
          <Button
            variant="outline"
            colorScheme="indigo"
            style={{ marginRight: 50 }}
            onPress={() => props.navigation.navigate("JourneyScreen")}
          >
            retour aux missions
          </Button>
        ) : (
          <Center marginTop="5%">
            <Button.Group
              display="flex"
              flexDirection="row"
              size="lg"
              marginTop="4"
              marginBottom="4"
              mx="12"
            >
              <Button
                style={{ backgroundColor: "#e11d48", width: "50%" }}
                onPress={() => setShowModal(true)}
              >
                {info.isValidate == "accept" ? "Annuler" : "Refuser"}
              </Button>

              <Button
                style={{ backgroundColor: "#059669", width: "50%" }}
                onPress={() => acceptClick()}
              >
                {info.isValidate == "accept" ? "Terminer" : "Accepter"}
              </Button>
            </Button.Group>
          </Center>
        )}
      </Center>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        {err && cancelIsClick == false ? (
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />

            <Modal.Body>
              <Text>
                Tu n'as maleureusement pas assez de place dans tes bagages pour
                accepter cette mission
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="outline"
                colorScheme="indigo"
                onPress={() => {
                  props.navigation.navigate("JourneyScreen");
                }}
              >
                retour sur mes missions
              </Button>
            </Modal.Footer>
          </Modal.Content>
        ) : (
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />

            <Modal.Body>
              <Text>
                tu es sur de vouloir{" "}
                {info.isValidate == "accept" ? "annuler" : "refuser"} cette
                demande ?
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="outline"
                  colorScheme="indigo"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  non
                </Button>
                <Button
                  onPress={() => {
                    cancelClick();
                  }}
                >
                  oui
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        )}
      </Modal>
    </NativeBaseProvider>
  );
}

function mapStateToProps(state) {
  return { missionId: state.missionIdReducer, user: state.userReducer };
}

export default connect(mapStateToProps, null)(MissionsScreen3);
