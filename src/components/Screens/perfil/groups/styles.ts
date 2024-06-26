import styled from "styled-components/native";
import theme from "../../../../styles/theme";

export const ContainerBtn = styled.View`
    width: 45%;
    height: 150px;
    align-items: center;
`

export const TouchableGroup = styled.TouchableOpacity`
       width: 100px;
    margin-bottom: 5px;
`

export const TextGroup = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    font-size: ${theme.FONT_SIZE.BUTTON.RG};

`

