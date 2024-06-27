import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HeaderPerfil from "../../components/Screens/perfil/header";
import {
  ContainerHeader,
  ProfileContainer,
  ProfileName,
  ProfileText,
} from "./styles";
import React from "react";
import ProfileButton from "../../components/Screens/perfil/profileButton";
import GrupoBtn from "../../components/Screens/perfil/groups";
import { FlatlistGroups } from "../../components/Screens/perfil/FlatlistGroups";


export default function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ContainerHeader>
        <HeaderPerfil />
      </ContainerHeader>
      <View
        style={{
          width: "100%",
          height: "20%",
          alignItems: "center",
          gap: 10,
        }}
      >
        <ProfileContainer>
          <ProfileText>JF</ProfileText>
        </ProfileContainer>
        <ProfileName>José Ferreira</ProfileName>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginTop: "17%",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <ProfileButton name={"Amigos"} />
        <ProfileButton icon={"Plus"} name={"Artistas"} />
        <ProfileButton icon={"Plus"} name={"Listas"} />
      </View>
      <View
        style={{
          width: "100%",
          marginTop: 20,
          marginLeft: 20,
          gap: 5,
        }}
      >
        <Text
          style={{
            width: "100%",
            color: "white",
            fontSize: 26,
          }}
        >
          Grupos
        </Text>
        <Text
          style={{
            width: "100%",
            color: "grey",
            fontSize: 15,
          }}
        >
          Junte amigos, vote em eventos e veja o que acontece.
        </Text>
      </View>

      <View style={{
        flexDirection: "row",
        width: "100%",
        height: "100%",
        marginTop: 30,
        gap: 10,
        padding: 0,
        margin: 0,
      }}>
        <GrupoBtn />
        <FlatlistGroups />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010101",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
