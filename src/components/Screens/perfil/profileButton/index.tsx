import { View, Text } from "react-native";
import { Container, TextoButton } from "./styles";
import * as PhosphorIcons from "phosphor-react-native";

type IconName = keyof typeof PhosphorIcons;
const icons = PhosphorIcons as unknown as Record<IconName, React.ElementType>;

type Props = {
  icon?: IconName;
  name: string;
};

export default function ProfileButton({ icon, name }: Props) {
  const IconComponent = icon ? icons[icon] : null;

  return (
    <Container>
      {IconComponent ? (
        <IconComponent size={24} color={"white"} />
      ) : (
        <TextoButton>1</TextoButton>
      )}
      <Text style={{ color: "white" }}>{name}</Text>
    </Container>
  );
}
