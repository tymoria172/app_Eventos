import { styled } from "styled-components/native";
import theme from "../../styles/theme";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const FlatlistContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`;

export const TitleFlatlist = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.MEDIUM};
  font-size: ${theme.FONT_SIZE.HEADLINE.H4};
`

export const TouchableBtn2 = styled.TouchableOpacity`
  background: ${theme.COLORS.GRAY_LIGHT};
  width: ${width / 10};
  height: ${width / 10};
  border-radius: 200px;
  justify-content: center;
  align-items: center;
`;
