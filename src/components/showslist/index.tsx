import { ImageBackground, View, Text, Image } from "react-native";
import { TouchableBtn } from "../CardEvents/styles";
import { Heart } from "phosphor-react-native";
import { Data, Local, ShowTitle, Title, TouchableBtn3 } from "./styles";

type Props = {
  imagem: string;
  titulo: string;
  data: string;
  local: string;
};
export default function ShowsList({ imagem, titulo, data, local }: Props) {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Image
        source={{
          uri: imagem,
        }}
        width={60}
        height={60}
      />

      <ShowTitle>
        <Title numberOfLines={1} ellipsizeMode="tail">
          {titulo}
        </Title>
        <Data> {data} </Data>
        <Local> {local}</Local>
      </ShowTitle>
      <TouchableBtn3>
        <Heart size={26} color="white" weight="light" />
      </TouchableBtn3>
    </View>
  );
}
