import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import Background from "../../../assets/imgs/bannerCena.jpg";
import {
  BodyContainer,
  CardBtn,
  CardContainer,
  CardDesc,
  Container,
  HeaderContainer,
  HeaderData,
  HeaderInfo,
  HeaderNome,
  HeaderTitulo,
  MessageContainer,
  MessageInfo,
  MessageTitulo,
  PagesContainer,
  PagesText,
  PriceContainer,
  Titulo,
  TouchableBtn,
} from "./styles";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../styles/theme";
import { Dimensions } from "react-native";
import {
  CalendarBlank,
  ChartLine,
  DotsThree,
  Heart,
  MapPin,
  MegaphoneSimple,
  MoonStars,
  Play,
} from "phosphor-react-native";

export default function CardEventoCena() {
  const { width, height } = Dimensions.get("screen");

  return (
    <Container
      style={{
        width: "100%",
        borderRadius: 60,
      }}
    >
      <CardContainer>
        <ImageBackground
          style={{
            width: "100%",
            height: 460,
            borderRadius: 60,
          }}
          source={Background}
        >
          <LinearGradient
            colors={["transparent", theme.COLORS.GRAY_GRADIENT]}
            start={[0, 0.1]}
            end={[0, 1]}
            style={{
              width: "100%",
              height: "100%",
              padding: 20,
            }}
          >
            <HeaderContainer>
              <Titulo>NEW</Titulo>
            </HeaderContainer>

            <BodyContainer>
              <CardDesc>
                <HeaderTitulo>Just announced</HeaderTitulo>
                <HeaderNome>Oppiden, Jubilee</HeaderNome>
                <HeaderData>Fri 6 Sep</HeaderData>
                <HeaderInfo>Elsewhere - Rooftop</HeaderInfo>
                <PriceContainer>
                  <Text
                    style={{
                      color: theme.COLORS.WHITE,
                      fontFamily: theme.FONT_FAMILY.REGULAR,
                      fontSize: theme.FONT_SIZE.HEADLINE.H6,
                    }}
                  >
                    $27,40
                  </Text>
                </PriceContainer>
              </CardDesc>

              <CardBtn>
                <TouchableBtn>
                  <Play size={26} color="white" weight="light" />
                </TouchableBtn>

                <TouchableBtn>
                  <Heart size={26} color="white" weight="light" />
                </TouchableBtn>

                <TouchableBtn>
                  <DotsThree size={26} color="white" />
                </TouchableBtn>
              </CardBtn>
            </BodyContainer>
          </LinearGradient>
        </ImageBackground>
      </CardContainer>
    </Container>
  );
}

