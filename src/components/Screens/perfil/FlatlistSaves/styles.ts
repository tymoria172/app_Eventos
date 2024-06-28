import styled from "styled-components/native";
import theme from "../../../../styles/theme";

export const FlatListContainer = styled.TouchableOpacity`
flex: 1;
  width: 100%;
  justify-content: 'center';
  align-items: 'center';
`;

export const Imagem = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 6px;
`;

export const TextoTitulo = styled.Text`
    color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.BUTTON.RG};
`;

export const NPessoas = styled.Text`
    color: ${theme.COLORS.GRAY_LIGHT};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.BUTTON.SM};
`;
