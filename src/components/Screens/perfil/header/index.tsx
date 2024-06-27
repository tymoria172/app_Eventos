import { Chat, Gear, ShareNetwork } from "phosphor-react-native";
import { Touchable, View } from "react-native";
import { ContainerHeader, TouchableProfile } from "./styles";

export default function HeaderPerfil() {
  return (
    <ContainerHeader>
      <TouchableProfile>
        <Chat weight="light" color="white" size={26} />
      </TouchableProfile>
      <TouchableProfile>
        <ShareNetwork weight="light" color="white" size={26} />
      </TouchableProfile>

      <TouchableProfile>
        <Gear weight="light" color="white" size={26} />
      </TouchableProfile>


    </ContainerHeader>
  );
}
