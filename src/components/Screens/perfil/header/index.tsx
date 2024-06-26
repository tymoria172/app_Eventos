import { Chat, Gear, ShareNetwork } from "phosphor-react-native";
import { View } from "react-native";
import { ContainerHeader } from "./styles";

export default function HeaderPerfil() {
  return (
    <ContainerHeader>
      <Chat weight="light" color="white" size={26} />
      <ShareNetwork weight="light" color="white" size={26} />
      <Gear weight="light" color="white" size={26} />
    </ContainerHeader>
  );
}
