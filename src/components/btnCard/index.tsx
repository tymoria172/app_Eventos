import { TouchableOpacity } from "react-native";
import { TouchableBtn } from "../CardEvents/styles";
import * as PhosphorIcons from "phosphor-react-native";
import { CardBtn } from "./style";

type IconName = keyof typeof PhosphorIcons;
const icons = PhosphorIcons as unknown as Record<IconName, React.ElementType>;

type Props = {
  icon: IconName;
  onClick: () => void;
};

export default function BtnCard({ icon, onClick }: Props) {
  const IconComponent = icon ? icons[icon] : null;
  return (
    <CardBtn>
      <TouchableBtn>
        <>
          {IconComponent && (
            <TouchableOpacity onPress={onClick}>
              <IconComponent size={32} color={"white"} />
            </TouchableOpacity>
          )}
        </>
      </TouchableBtn>
    </CardBtn>
  );
}
