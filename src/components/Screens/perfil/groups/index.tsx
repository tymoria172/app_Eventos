import React from "react";
import { ContainerBtn, TextGroup, TouchableGroup } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../../../styles/theme";
import { Plus } from "phosphor-react-native";

export default function GrupoBtn() {
  return (
    <ContainerBtn>
      <TouchableGroup>
        <LinearGradient
          colors={["transparent", theme.COLORS.BLUE]}
          start={[0.5, 1.1]}
          end={[1, 0]}
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
      </TouchableGroup>
      <TextGroup>Novo grupo</TextGroup>
    </ContainerBtn>
  );
}
