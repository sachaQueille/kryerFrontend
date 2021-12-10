import React, { useState, useEffect } from "react";
import {
  Button,
  NativeBaseProvider,
  VStack,
  Text,
  Center,
  Avatar,
  Divider,
} from "native-base";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

function User(props) {
  const [changeAvatar, setChangeAvatar] = useState(false);

  const updateAvatar = async (avatarChoose) => {
    let rawResponse = await fetch("http://192.168.1.33:3000/updateInfos/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `token=${props.user.token}&avatar=${avatarChoose}`,
    });
    let responce = await rawResponse.json();
    props.addUser(responce);
  };

  if (!props.user) {
    return (
      <NativeBaseProvider>
        <Center
          mx="auto"
          marginTop="40%"
          justifyContent="center"
          alignItems="center"
        >
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>KRYER</Text>
        </Center>

        <VStack
          mx="auto"
          marginTop="30%"
          justifyContent="center"
          alignItems="center"
        >
          <Text>Reveille le Kryer qui est en toi !</Text>

          <Button
            style={{ backgroundColor: "indigo" }}
            onPress={() => props.navigation.navigate("signUp")}
            marginBottom={5}
            marginTop={5}
            mx="12"
            size="lg"
          >
            S'inscrire
          </Button>

          <Text>Tu es déjà un Kryer de confiance ?</Text>

          <Button
            style={{ backgroundColor: "indigo" }}
            onPress={() => props.navigation.navigate("signIn")}
            marginBottom={5}
            marginTop={5}
            mx="12"
            size="lg"
          >
            Se connecter
          </Button>
        </VStack>
      </NativeBaseProvider>
    );
  } else {
    return (
      <NativeBaseProvider>
        <ScrollView>
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
          Profil
        </Center>

        <VStack
          mx="auto"
          ml="5%"
          marginTop="10%"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            key={props.user.avatar}
            alignSelf="center"
            bg="transparent"
            size="lg"
            source={{
              uri: props.user.avatar,
            }}
          ></Avatar>
          <Button
            style={{ backgroundColor: "indigo" }}
            marginBottom={5}
            marginTop={5}
            mx="12"
            size="lg"
            onPress={() => setChangeAvatar(!changeAvatar)}
          >
            Choisis ta photo
          </Button>
          {changeAvatar && (
            <>
              <Button
                onPress={() => {
                  updateAvatar(
                    "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"
                  );
                }}
                bg="transparent"
              >
                <Avatar
                  alignSelf="center"
                  bg="transparent"
                  size="lg"
                  source={{
                    uri: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png",
                  }}
                ></Avatar>
              </Button>

              <Button
                onPress={() => {
                  updateAvatar(
                    "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-11-avatar-2754576_120520.png"
                  );
                }}
                bg="transparent"
              >
                <Avatar
                  alignSelf="center"
                  bg="transparent"
                  size="lg"
                  source={{
                    uri: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-11-avatar-2754576_120520.png",
                  }}
                ></Avatar>
              </Button>
            </>
          )}
        </VStack>
        <VStack justifyContent="center" alignItems="center" marginTop="20%">
          <Text
            fontWeight="bold"
            fontSize={30}
            textAlign="center"
            marginBottom="20%"
          >
            Coordonnées
          </Text>

          <Text fontSize="xl">{props.user.firstName} </Text>
          <Divider my="2" />
          <Text fontSize="xl">{props.user.lastName} </Text>
          <Divider my="2" />
          <Text fontSize="xl">{props.user.email}</Text>
          <Divider my="2" />
          <Text fontSize="xl">{props.user.phone}</Text>
          <Divider my="2" />
        </VStack>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.userReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: function (user) {
      dispatch({ type: "addUser", user: user });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
