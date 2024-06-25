import styled from "styled-components/native";
import theme from "../../styles/theme";
import { ColorValue, Dimensions, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("screen");

export const Titulo = styled.Text`
  color: ${theme.COLORS.BLACK};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.SUBTITLE.SM};
`;

export const HeaderContainer = styled.View`
  background-color: ${theme.COLORS.YELLOW};
  width: ${width / 10}px;
  height: ${width / 20}px;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitulo = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.HEADLINE.H7};
`;

export const HeaderNome = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.HEADLINE.H4};
`;
export const HeaderData = styled.Text`
  color: ${theme.COLORS.YELLOW};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.HEADLINE.H7};
`;

export const HeaderInfo = styled.Text`
  color: ${theme.COLORS.GRAY_LIGHT};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.HEADLINE.H7};
`;

export const BodyContainer = styled.View`
  flex: 1;
  width: 100%;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceContainer = styled.View`
  background-color: ${theme.COLORS.BLACK};
  width: ${width / 7.5}px;
  height: ${width / 20}px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const CardDesc = styled.View`
  flex-direction: column;
  justify-content: flex-end;
`;

export const CardBtn = styled.View`
  flex-direction: row;
  align-items: flex-end;
  width: 40%;
  justify-content: center;
  gap: 8px;
`;

export const TouchableBtn = styled.TouchableOpacity`
  background: ${theme.COLORS.BLACK};
  width: ${width / 10};
  height: ${width / 10};
  border-radius: 200px;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;

export const CardContainer = styled.View`
  width: 350px;
  height: 460px;
  border-radius: 32px;
  overflow: hidden;
`;

export const MessageContainer = styled.View`
  width: 100%;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const MessageInfo = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const MessageTitulo = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.MEDIUM};
  font-size: ${theme.FONT_SIZE.HEADLINE.H4};
`;

export const PagesContainer = styled.View`
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 30px;
`;

export const PagesText = styled.Text`
  color: ${theme.COLORS.WHITE};
`;
