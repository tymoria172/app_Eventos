import React from "react";
import { FlatList, ImageBackground, Text, View, Image } from "react-native";
import { Titulo } from "../../home/CardEvents/styles";
import { FlatListContainer, Imagem, NPessoas, TextoTitulo } from "./styles";

export function FlatlistGroups() {
  return (
    <>
      <FlatList
        horizontal
        style={{ width: "100%", borderRadius: 6 }}
        ItemSeparatorComponent={() => (
          <View style={{
            width: 10,
          }}>
          </View>
        )}
        data={[{
          titulo: "Turma do pagode",
          pessoas: 20,
          imagem: "https://www.designi.com.br/images/preview/10484952.jpg"

        },
        {
          titulo: "Bailão funk",
          pessoas: 350,
          imagem: "https://i.pinimg.com/564x/88/a2/b8/88a2b87a675aad599e7bd3b45e6fac14.jpg"

        },
        {
          titulo: "HalloWeed",
          pessoas: 1000,
          imagem: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7041c4132541517.61aaf68368c9a.png"
        },

        {
          titulo: "Sonoora 2023",
          pessoas: 12450,
          imagem: "https://instagram.fcgh8-1.fna.fbcdn.net/v/t51.29350-15/339816076_6845139468836300_670674516874810491_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fcgh8-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=lQrWqYXPbhoQ7kNvgGvyHVl&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzA3NDQyMzU0MzcyMzU2OTIwMg%3D%3D.2-ccb7-5&oh=00_AYBRdfOleF_IXqBzfyuotTS6ko-L3F-rjz41B7M_X0YL9w&oe=66826ECC&_nc_sid=fc8dfb"

        },


        ]}
        renderItem={({ item }) => (
          <FlatListContainer>
            <Imagem
              source={{ uri: item.imagem }} />
            <TextoTitulo>{item.titulo}</TextoTitulo>
            <NPessoas>{`${item.pessoas} membros`}</NPessoas>
          </FlatListContainer>
        )}
      />
    </>
  );
}
