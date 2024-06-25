import Background from "../../../assets/imgs/awekenings.png";

import React from "react";
import { Container } from "../CardEvents/styles";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { CardInfo, Local, TextePrincipal, Date, Price } from "./style";
import BtnCard from "../btnCard";

type Props = {
  imagem: string;
  titulo: string;
  data: string;
  local: string;
  preco: string;
}

export default function CardEventoRep({imagem,titulo,data,local,preco}:Props) {
  return (
    <Container
      style={{
        width: "100%",
        borderRadius: 60,
      }}
    >
      <CardInfo>
        <View style={{ width: "100%", height: "65%", padding: 10 }}>
          <ImageBackground
            resizeMode="stretch"
            borderRadius={20}
            style={{
              width: "100%",
              height: "100%",
            }}
            source={{ uri: imagem}}
          >
            <FlatList
              horizontal
              data={[
                {
                  id: 1,
                  icon: "Play",
                },
                { id: 2, icon: "Heart" },
              ]}
              renderItem={({ item }) => (
                <BtnCard icon={item.icon} onClick={() => null} />
              )}
              style={{
                flexDirection: "row-reverse",
                gap: 50,
                paddingRight: 15,
                paddingLeft: 15,
                paddingBottom: 10,
              }}
              ItemSeparatorComponent={() => (
                <View style={{ height: 10, width: 10 }} />
              )}
            />
          </ImageBackground>
        </View>

        <TextePrincipal ellipsizeMode="tail" numberOfLines={2}>
          {titulo}
        </TextePrincipal>
        <View
          style={{
            width: "100%",
            height: "100%",
            gap: 5,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1, gap: 5, paddingLeft: 10, marginTop:10, }}>
            <Date ellipsizeMode="tail" numberOfLines={2}>
              {data}
            </Date>
            <Local ellipsizeMode="tail" numberOfLines={2}>
              {local}
            </Local>
          </View>
          <View style={{ flex: 1, alignItems: "center", paddingTop: 15 }}>
            <Price ellipsizeMode="tail" numberOfLines={2}>
              {preco}
            </Price>
          </View>
        </View>
      </CardInfo>
    </Container>
  );
}
