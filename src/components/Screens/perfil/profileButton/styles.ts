import { styled } from "styled-components/native";
import theme from "../../../../styles/theme";

export const Container = styled.TouchableOpacity`
  width: 120px;
  height: 80px;
  background-color: ${theme.COLORS.GRAY_GRADIENT};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 5px;
`;

export const TextoButton = styled.Text`
  color: ${theme.COLORS.WHITE};
  margin: 0px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.HEADLINE.H4};
`;
