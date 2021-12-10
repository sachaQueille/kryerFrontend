import React , {useState}  from "react";
import { View, Text } from "react-native";
import { Button, NativeBaseProvider, VStack, Input, StatusBar, KeyboardAvoidingView, Heading, Center } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";

export default function TerminateMission(props) {

  const [verifCode, setVerifCode] = useState("");

 


  return (
    
    <NativeBaseProvider>
    <KeyboardAvoidingView>
    <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
    
    <ScrollView>
      <VStack
        mx="auto"
        marginTop={64}
        justifyContent="center"
        alignItems="center"       
      >       
        <Heading size="xs">Entrer le code de validation</Heading>

        <Input
        marginTop="4"
        mx="3"
        placeholder="Code à 6 chiffres"
        w={{
            base: "75%",
            md: "50%",
        }}
        onChangeText={(value)=>setVerifCode(value)}
        value={verifCode}
        />

        <Button marginTop="4" onPress={()=>finishClick()}>Terminer la mission</Button>

      </VStack>
      </ScrollView>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
    
  );
}


