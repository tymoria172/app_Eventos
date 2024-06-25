import styled from "styled-components/native";
import theme from "../../styles/theme";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const ShowTitle = styled.View`
 width: 50%;
`

export const Data = styled.Text`
  color: ${theme.COLORS.YELLOW};
  font-family: ${theme.FONT_FAMILY.MEDIUM};
  font-size: ${theme.FONT_SIZE.HEADLINE.H6};
`

export const Local = styled.Text`
  color: ${theme.COLORS.GRAY_LIGHT};
  font-family: ${theme.FONT_FAMILY.MEDIUM};
  font-size: ${theme.FONT_SIZE.HEADLINE.H6};
`

export const Title = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.MEDIUM};
  font-size: ${theme.FONT_SIZE.HEADLINE.H6};
`
export const TouchableBtn3 = styled.TouchableOpacity`
  background: ${theme.COLORS.BLACK};
  width: ${width / 10};
  height: ${width / 10};
  border-radius: 200px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`
