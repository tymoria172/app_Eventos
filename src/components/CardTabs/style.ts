import styled from "styled-components/native";
import theme from "../../styles/theme";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const TabsContainer = styled.View`
  width: ${width / 1.1};
  height: 230px;
  border-radius: 32px;
  overflow: hidden;
`

export const CardQuit = styled.View`
    align-items: flex-end;
    margin-right: 10px;
    margin-top: 10px;
`

export const TouchableCard = styled.TouchableOpacity`
  background: ${theme.COLORS.BLACK};
  width: ${width / 10};
  height: ${width / 10};
  border-radius: 200px;
  justify-content: center;
  align-items: center;

`

export const TabDesc = styled.View`
        gap: 5px;
        padding: 10px;

`

export const TabTittle = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.HEADLINE.H4};
    margin-left: 10px;


`

export const TabText = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.HEADLINE.H5};
    margin-left: 10px;

`

export const TabTouchable = styled.TouchableOpacity`
background: ${theme.COLORS.WHITE};
  width: ${width / 2};
  height: ${width / 8};
  border-radius: 200px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-top: 20px;
`
