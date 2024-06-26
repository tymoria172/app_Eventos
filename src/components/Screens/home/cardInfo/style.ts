import styled from "styled-components/native";
import theme from "../../../../styles/theme";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const CardInfo = styled.View`
  width: 350px;
  height: 460px;
  border-radius: 32px;
  overflow: hidden;
  border: solid 1px #69696c;

`;

export const TextePrincipal = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.MEDIUM};
  font-size: ${theme.FONT_SIZE.HEADLINE.H4};
  margin-left:10px ;
`;

export const Date = styled.Text`
  color: ${theme.COLORS.YELLOW};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.HEADLINE.H6};
`;


export const Local = styled.Text`
  color: ${theme.COLORS.GRAY_LIGHT};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.HEADLINE.H6};
`;

export const Price = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.HEADLINE.H5};
`;
