import { KeyboardAvoidingView, Input, NativeBaseProvider,  VStack, Text } from "native-base";
import React, {useState} from "react";
import { View,  } from 'react-native';

function TchatDetails(props) {
    const [currentMessage, setCurrentMessage] = useState("");
    return (
        <NativeBaseProvider >
            <VStack style = {{position: 'absolute', left: 0, right: 0, bottom: 0}}>
            {/* <KeyboardAvoidingView h={{base: "400px",lg: "auto",}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                */} 
                <Input
                
                placeholder="Your message"
                containerStyle = {{marginBottom: 5}}
                onChangeText={(e) => setCurrentMessage(e)}
                />
            {/* </KeyboardAvoidingView> */}
            </VStack>
        </NativeBaseProvider>
    );
}

export default TchatDetails;
