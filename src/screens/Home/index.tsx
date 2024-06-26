import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CardEventoCena from "../../components/Screens/home/CardEvents";
import FlatListCard from "../../components/Screens/home/flatListCard";
import theme from "../../styles/theme";
import {
  MessageContainer,
  MessageInfo,
  MessageTitulo,
  PagesContainer,
  TouchableBtn,
} from "../../components/Screens/home/CardEvents/styles";
import { ArrowRight, MapPin } from "phosphor-react-native";
import CardTabs from "../../components/Screens/home/CardTabs";
import CardEventoRep from "../../components/Screens/home/cardInfo";

import { FlatlistContainer, TitleFlatlist, TouchableBtn2 } from "./styles";
import ShowsList from "../../components/Screens/home/showslist";

export default function Home() {
  const { width, height } = Dimensions.get("screen");
  const data = [
    {
      id: 1,
      bgcolor1: "#0c0c0c",
      bgcolor2: "#504d4d",
      icon: "MoonStars",
      name: "Tonight",
      iconColor: theme.COLORS.WHITE,
    },
    {
      id: 2,
      bgcolor1: "#0c0c0c",
      bgcolor2: "#1351a1",
      icon: "CalendarBlank",
      name: "This Week",
      iconColor: "#299fee",
    },
    {
      id: 3,
      bgcolor1: "#0c0c0c",
      bgcolor2: "#098f64",
      icon: "MegaphoneSimple",
      name: "New shows",
      iconColor: "#58d583",
    },
    {
      id: 4,
      bgcolor1: "#0c0c0c",
      bgcolor2: "#3908b3",
      icon: "ChartLine",
      name: "Most viewed",
      iconColor: "#9d8ce8",
    },
    {
      id: 5,
      bgcolor1: "#0c0c0c",
      bgcolor2: "#9c0024",
      icon: "Medal",
      name: "Top 100",
      iconColor: "#bd3c5a",
    },

    // Adicione mais itens se necessário
  ];

  const data2 = [
    {
      imagem:
        "https://dice-media.imgix.net/attachments/2024-05-30/3a3bbf1d-d35a-402a-9ff1-ec0f2e1b153a.jpg?rect=0%2C0%2C1500%2C1500&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1",
      titulo: "Ennio Skoto, Tian, armii1n",
      data: "qui., 27 de jun.",
      local: "Miami beach",
    },
    {
      imagem:
        "https://dice-media.imgix.net/attachments/2024-05-31/ddf001ef-9f93-4f93-8ef6-91a9b947d505.jpg?rect=0%2C0%2C1500%2C1500&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1",
      titulo: "Eli Fola",
      data: "sex., 28 de jun.",
      local: "Miami",
    },
    {
      imagem:
        "https://dice-media.imgix.net/attachments/2024-05-22/84d4c579-6efa-451f-9e46-5349e9376528.jpg?rect=0%2C0%2C4167%2C4167&auto=format%2Ccompress&q=80&w=328&fit=max&dpr=1",
      titulo: "Bak 2D Future: Pablo Bozzi, Bakke, Neardark, Mutant Pete",
      data: "sáb., 29 de jun.",
      local: "Miami beach",
    },
    {
      imagem:
        "https://dice-media.imgix.net/attachments/2024-05-24/15ae1991-37cb-4708-9a85-c40665e0b553.jpg?rect=0%2C0%2C4167%2C4167&auto=format%2Ccompress&q=80&w=328&fit=max&dpr=1",
      titulo: "Rafa Barrios, Monoky b2b Danyelino",
      data: "dom., 30 de jun.",
      local: "Miami beach",
    },
  ];

  const data3 = [
    {
      imagem:
        "https://i.pinimg.com/736x/b7/97/28/b79728a7df5123827ebc267570c4f387.jpg",
      titulo: "Baile Rio",
      data: "qui., 27 de jul.",
      local: "Rio de janeiro",
    },
    {
      imagem:
        "https://gilsonazevedo.com.br/wp-content/uploads/2024/04/flyer-para-eventos-11.jpg",
      titulo: "Party Bahia",
      data: "sex., 25 de jabr.",
      local: "Salvador, Bahia",
    },
    {
      imagem:
        "https://gilsonazevedo.com.br/wp-content/uploads/2024/01/Flyer-Para-Eventos-1.jpg",
      titulo: "Brega funk, boate fest house",
      data: "sáb., 22 de mar.",
      local: "São paulo",
    },
    {
      imagem:
        "https://i.pinimg.com/originals/e2/74/17/e27417102d44348f628a2f48670c9525.png",
      titulo: "Night Party com Alok",
      data: "dom., 07 de set.",
      local: "Villa Mix",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "80%",
          }}
        >
          <MessageContainer>
            <MessageInfo>
              <MessageTitulo>Bom dia, usuário</MessageTitulo>
              <TouchableBtn>
                <MapPin size={26} color="white" weight="light" />
              </TouchableBtn>
            </MessageInfo>
          </MessageContainer>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <FlatList
              data={data}
              horizontal
              ItemSeparatorComponent={() => (
                <View style={{ height: 10, width: 10 }} />
              )}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <FlatListCard
                  bgcolor1={item.bgcolor1}
                  bgcolor2={item.bgcolor2}
                  icon={item.icon}
                  name={item.name}
                  iconColor={item.iconColor}
                  onClick={() => {
                    console.log("Item clicked!");
                  }}
                />
              )}
            />

            <CardEventoCena />
            <CardTabs />
            <CardEventoRep
              imagem={
                "https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vZTkwNzUxMzBkZmYwYjFjNDgyN2JmNWRjYmMzZTcxOWZlN2U0NmQ4Ny5wbmc="
              }
              titulo={"Awakenings Easter"}
              data={"Fri 29 March"}
              local={"Amsterdam; Netherlands"}
              preco={"R$ 300,00"}
            />
          </View>

          <FlatlistContainer>
            <FlatList
              ListHeaderComponent={() => (
                <View
                  style={{
                    width: "100%",
                    marginBottom: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                  }}
                >
                  <TitleFlatlist>Popular</TitleFlatlist>
                  <TouchableBtn2>
                    <ArrowRight size={26} color="white" weight="light" />
                  </TouchableBtn2>
                </View>
              )}
              ItemSeparatorComponent={() => (
                <View style={{ height: 10, width: 10 }} />
              )}
              style={{
                flex: 1,
                backgroundColor: "#181818",
                width: "90%",
                height: 380,
                borderRadius: 30,
                padding: 10,
                paddingBottom: 15,
              }}
              data={data2}
              renderItem={({ item }) => (
                <ShowsList
                  imagem={item.imagem}
                  titulo={item.titulo}
                  data={item.data}
                  local={item.local}
                />
              )}
            />
          </FlatlistContainer>

          <FlatlistContainer>
            <FlatList
              ListHeaderComponent={() => (
                <View
                  style={{
                    width: "100%",
                    marginBottom: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                  }}
                >
                  <TitleFlatlist>Para você</TitleFlatlist>
                  <TouchableBtn2>
                    <ArrowRight size={26} color="white" weight="light" />
                  </TouchableBtn2>
                </View>
              )}
              ItemSeparatorComponent={() => (
                <View style={{ height: 10, width: 10 }} />
              )}
              style={{
                flex: 1,
                backgroundColor: "#181818",
                width: "90%",
                height: 380,
                borderRadius: 30,
                padding: 10,
                paddingBottom: 15,
              }}
              data={data3}
              renderItem={({ item }) => (
                <ShowsList
                  imagem={item.imagem}
                  titulo={item.titulo}
                  data={item.data}
                  local={item.local}
                />
              )}
            />
          </FlatlistContainer>

          <CardEventoRep
            imagem={
              "https://gilsonazevedo.com.br/wp-content/uploads/2024/04/flyer-para-eventos-11.jpg"
            }
            titulo={"Party bahia"}
            data={"Sat 31 April"}
            local={"Salvador; Bahia"}
            preco={"R$ 250,00"}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010101",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
