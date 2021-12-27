import React ,{useState, useEffect,useRef}  from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Camera } from 'expo-camera';
import { Button , Modal, NativeBaseProvider} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import {connect} from 'react-redux';


function CameraScreen (props){

    const [hasPermission, setHasPermission] = useState(null);
    const [modaleIsVisible , setModaleIsVisible ] = useState(false);
    const [messageOverlay, setMessageOverlay] = useState('Loading ...')
    

    var cameraRef = useRef(null);

    const isFocused = useIsFocused();

    useEffect(() => {
      
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();

    }, []);

    
    
   
    
    if (hasPermission && isFocused) {
      return (
       <NativeBaseProvider>
        <View style={{flex:1}}>

            <Camera style={{ flex: 1 }} ref={ref => (cameraRef = ref)}  onPress={()=>setModaleIsVisible(false)}/>
          
            <Button  colorScheme='indigo'
                onPress={
                    async function snapClick() { 
                        setMessageOverlay('Loading ...')
                        setModaleIsVisible(!modaleIsVisible);

                        if (cameraRef) {

                            let photo = await cameraRef.takePictureAsync({ quality: 0.7, base64: true, exif: true});

                           
                          
                            var data = new FormData();

                                data.append('photo', {
                                uri: photo.uri,
                                type: 'image/jpeg',
                                name: 'photo.jpg'
                                });
                                 

                                var responce = await fetch(`${global.ipa}uploadPhoto`, {
                                method: 'POST',
                                body: data
                                });

                                responce = await responce.json();


                                props.addPhoto({url:responce.resultCloudinary.url});
                                
                                
                                if(responce.result){

                                    setModaleIsVisible(false)
                                    props.navigation.navigate('SendDelivery')
    
                                }else{
                                    setMessageOverlay('eror')
                                }

                              

                               
                        }
                    } 
                 } ><Text style={{color:"white",fontSize:16}}><Ionicons name="save-outline" size={25} color="white"/> enregistrer</Text></Button>

            <Modal isOpen={modaleIsVisible}>
            <Modal.Content maxH="500">
                <Modal.Body>
                     <Text onPress={()=>setModaleIsVisible(false)}>{messageOverlay}</Text>
                </Modal.Body>
            </Modal.Content>

               

            </Modal>

        </View>
        </NativeBaseProvider>
      
      )
    }
    else {
      return <View style={{ flex: 1 }}/>;
    }
   
   }

   const styles = StyleSheet.create({
    Button:{
        flex:1,
        alignItems:"flex-end",
        flexDirection:'row',
        margin:40,
       
    },
    
    text:{
        color:'white',
        fontSize:18
    },
    opacity:{
        marginRight:30
    }
  });

  function mapDispatchToProps(dispatch) {
    return {
      addPhoto: function(e) {
          dispatch( {type: 'addPhoto', photo:e} )
      }
    }
   }
   
   export default connect(
      null,
      mapDispatchToProps
   )(CameraScreen);