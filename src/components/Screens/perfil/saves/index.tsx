import React from "react";
import { ContainerFav, TouchableFav, TextSaves } from "./style";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../../../styles/theme";
import { Plus } from "phosphor-react-native";




export default function SalvosBtn() {
  return (
    <ContainerFav>
      <TouchableFav>
        <BlurView intensity={100} tint="dark"
          style={{
            width: 130,
            height: 130,
            borderRadius: 6, 
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",

          }}>
          <LinearGradient
            colors={["transparent", theme.COLORS.REDLIGHT_GRADIENTE, theme.COLORS.REDLIGHT_GRADIENTE]}
            start={[0, 0.7]}
            end={[0, 0]}
            style={{
              width: 130,
              height: 130,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              margin: 0,
            }}
          >


            <Plus size={42} color="white" />

          </LinearGradient>

        </BlurView>

      </TouchableFav>
      <TextSaves>Adicionar Favoritos</TextSaves>
    </ContainerFav>
  );
}
