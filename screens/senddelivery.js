import React , {useState} from 'react';
import { NativeBaseProvider, Input, Stack, Center, Button, FormControl, Icon,Modal, Text} from 'native-base';
import { Ionicons ,MaterialCommunityIcons, MaterialIcons, AntDesign} from "@expo/vector-icons"
import DatePicker from 'react-native-datepicker';
import {StyleSheet} from 'react-native';

function SendDelivery(){

    //format date
    function formatDate (date){
        return ('0'+date.getDate()).slice(-2)+'/'+ ('0'+parseInt(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear();
    };

    const [date, setDate] = useState(formatDate(new Date()));
    const [showModal, setShowModal] = useState(false);
    const [dateIsChoose, setDateIsChoose] = useState(false);
    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");
    const [weight, setWeight] = useState("");
    const [measure, setMeasure] = useState("");

   //pour afficher la date selectionnée
   var messageDate = dateIsChoose ? `recherche a partir du ${date}` : "";

    // function de recherchhe
    async function searchClick(){
<<<<<<< HEAD
        var responce = await fetch("http://172.17.1.16:3000/searchKryer", {
=======
        var responce = await fetch("http://192.168.1.33:3000/searchKryer", {
>>>>>>> 1d4ab3130635147724ea6de640833c0b7e75b965
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `departure=${departure}&arrival=${arrival}&date=${date}`
            });

            responce = await responce.json();
            console.log(responce)
    }
    
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
            <Stack space={4} w="100%" alignItems="center" marginBottom="10%">
                 <FormControl.Label>Trouve un Kryer</FormControl.Label>
                <Input
                    w={{
                    base: "75%",
                    md: "25%",
                    }}
                    InputLeftElement={
                    <Icon
                        as={<Ionicons name="location" />}
                        size={5}
                        ml="2"
                        color="indigo.800"
                    />
                    }
                    placeholder="Depart"
                    onChangeText={(e) => setDeparture(e)}
                    value={departure}/>
                <Input
                    w={{
                    base: "75%",
                    md: "25%",
                    }}
                    InputLeftElement={
                    <Icon
                        as={<Ionicons name="location-outline" />}
                        size={5}
                        ml="2"
                        color="indigo.800"
                    />
                    }
                    placeholder="Arrivée"
                    onChangeText={(e) => setArrival(e)}
                    value={arrival}/>
                 
                {/* button pour la modale pour choisir la date + l'affichage du choix de la date */}
                 <Button onPress={() => {setShowModal(true);setDateIsChoose(true)}} style={{backgroundColor:"indigo.800"}}>Choisi une date</Button>
                 <Text>{messageDate}</Text>
            
                {/* modale avec la mecanique propre a la date a l'interieur */}
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Choisi une date</Modal.Header>
                <Modal.Body>
                     <DatePicker
                   
                    style={styles.datePickerStyle}
                    date={date} // Initial date from state
                    mode="date" // The enum of date, datetime and time
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate= {new Date()}
                    maxDate="31-12-2022"
                    confirmBtnText="Confirmer"
                    cancelBtnText="annuler"
                    customStyles={{
                        dateIcon: {
                        //display: 'none',
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                        },
                        dateInput: {
                        marginLeft: 36,
                        borderWidth:0
                        },
                    }}
                    onDateChange={(date) => {
                        setDate(date);
                    }}
                    />
                   
                </Modal.Body>
                </Modal.Content>
                </Modal>
            </Stack>

            <Stack space={4} w="100%" alignItems="center">
                 <FormControl.Label>Information sur votre Colis</FormControl.Label>
                <Input
                    w={{
                    base: "75%",
                    md: "25%",
                    }}
                    InputLeftElement={
                    <Icon
                        as={<MaterialCommunityIcons name="weight-kilogram" />}
                        size={5}
                        ml="2"
                        color="indigo.800"
                    />
                    }
                    placeholder="Poid"
                    onChangeText={(e) => setWeight(e)}
                    value={weight}/>
                <Input
                    w={{
                    base: "75%",
                    md: "25%",
                    }}
                    InputLeftElement={
                    <Icon
                        as={<MaterialIcons name="height" />}
                        size={5}
                        ml="2"
                        color="indigo.800"
                    />
                    }
                    placeholder="Dimension"
                    onChangeText={(e) => setMeasure(e)}
                    value={measure}/>
               
               <Button  style={{backgroundColor:"indigo.800"}} onPress={()=>searchClick()}> <Icon
                        as={<AntDesign name="search1" color="indigo"/>}
                        size={5}
                        ml="2"
                        color="indigo.800"
                    /></Button>

            </Stack>
           

            </Center>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
    },
    datePickerStyle: {
      width: 200,
      marginTop: 20,
    },
  });

export default SendDelivery;