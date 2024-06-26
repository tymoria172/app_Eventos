import { Container, TouchableBtn } from "../CardEvents/styles";
import BackgroundGradient from "../../../../../assets/imgs/gradiantTab.jpg";
import { ImageBackground, TouchableOpacity, Text } from "react-native";
import { CardQuit, TabDesc, TabInfo, TabText, TabTittle, TabTouchable, TabsContainer, TouchableCard } from "./style";
import { X } from "phosphor-react-native";
import theme from "../../../../styles/theme";

export default function CardTabs() {
  return (
    <Container
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TabsContainer>
        <ImageBackground
          style={{
            width: "100%",
            height: 360,
            borderRadius: 60,
          }}
          source={BackgroundGradient}
        >
          <CardQuit>
            <TouchableCard>
              <X size={26} color="white" weight="light" />
            </TouchableCard>
          </CardQuit>

          <TabDesc>

            <TabTittle >Keep tabs on your favorites</TabTittle>
            <TabText>sync your Spotify or Apple Music to stay on top of shows by your artists.</TabText>
            <TabTouchable>
                <Text style={{
                    color: theme.COLORS.BLACK,
                    fontFamily: theme.FONT_FAMILY.BOLD,
                    fontSize: theme.FONT_SIZE.HEADLINE.H6,
                  }}>
                    Syncy music Library</Text>
            </TabTouchable>

          </TabDesc>
        </ImageBackground>
      </TabsContainer>
    </Container>
  );
}
