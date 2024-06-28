import React from "react";
import { AndroidBlurView, ContainerBtn, TextGroup, TouchableGroup } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../../../styles/theme";
import { Plus } from "phosphor-react-native";
import { BlurView } from "expo-blur";





export default function GrupoBtn() {
  return (
    <ContainerBtn>
      <TouchableGroup>
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
            colors={["transparent", theme.COLORS.BLUE]}
            start={[0, 0.7]}
            end={[0, 0]}
            style={{
              width: 130,
              height: 130,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >


            <Plus size={42} color="white" />

          </LinearGradient>

        </BlurView>

      </TouchableGroup>
      <TextGroup>Novo grupo</TextGroup>
    </ContainerBtn>
  );
}
