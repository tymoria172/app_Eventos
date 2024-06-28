import { styled } from "styled-components/native";
import theme from "../../styles/theme";

export const ContainerHeader = styled.View`
  width: 100%;
  margin-top: 30;
`;

export const ProfileContainer = styled.View`
  width: 29%;
  height: 62%;
  border: 1px solid white;
  border-radius: 150px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const ProfileText = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.HEADLINE.H2};
`;

export const ProfileName = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.HEADLINE.H4};
`;


