import { MoonStars } from "phosphor-react-native";
import { Name } from "./styles";
import * as PhosphorIcons from "phosphor-react-native";
import theme from "../../styles/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, TouchableOpacity, View } from "react-native";

type IconName = keyof typeof PhosphorIcons;
const icons = PhosphorIcons as unknown as Record<IconName, React.ElementType>;

type Props = {
  bgcolor1: string;
  bgcolor2: string;
  icon: IconName;
  iconColor: string;
  onClick: () => void;
  name: string;
};

export default function FlatListCard({
  bgcolor1,
  bgcolor2,
  icon,
  iconColor,
  onClick,
  name,
}: Props) {
  const IconComponent = icon ? icons[icon] : null;
  const { width, height } = Dimensions.get("screen");

  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <LinearGradient
        colors={["transparent", bgcolor1, bgcolor2]}
        start={[0, 0]}
        end={[1, 1]}
        style={{
          width: width / 4,
          height: width / 4,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <>{IconComponent && (
          <TouchableOpacity onPress={onClick}>
            <IconComponent size={45} color={iconColor} />
          </TouchableOpacity>
        )}</>
      </LinearGradient>
      <Name>{name}</Name>
    </View>
  );
}

