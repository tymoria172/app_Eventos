import React from "react";
import { FlatList, ImageBackground, Text, View, Image } from "react-native";
import { FlatListContainer, Imagem, NPessoas, TextoTitulo } from "./styles";

export function FlatlistSaves() {
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
          titulo: "Psyfly 2024",
          pessoas: 5090,
          imagem: "https://scontent.fcgh8-1.fna.fbcdn.net/v/t39.30808-6/382322982_863699201768065_3151216671518491857_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF2DlOmyAbEZfcpk0aWmRrkBcAlohoa5k4FwCWiGhrmTgaKeUo42jjoo_iC3nyxh57ykbkdaNvuPVE6koLKHVim&_nc_ohc=LpO_mbSKg_kQ7kNvgH5hN9z&_nc_ht=scontent.fcgh8-1.fna&oh=00_AYAtEFySZBQ9hxDAp7WEtZAcyr_e38DXyAKV-DDdRydHHw&oe=6683DF5B"

        },
        {
          titulo: "Bailão otaku",
          pessoas: 173,
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3MdZkI4daUMTPmPUu29sEaQBFlOQ0laIpg&s"

        },
        {
          titulo: "Mushroom World",
          pessoas: 5000,
          imagem: "https://i1.sndcdn.com/artworks-tzK8FPj0vwoDSVwR-tfBW9Q-t500x500.jpg"
        },

        {
          titulo: "Hitech revolution",
          pessoas: 16835,
          imagem: "https://res.cloudinary.com/shotgun/image/upload/ar_16:9,c_limit,f_auto,fl_lossy,q_auto,w_1280/v1678903406/production/artworks/HTR_2_hcpd9u"

        },


        ]}
        renderItem={({ item }) => (
          <FlatListContainer>
            <Imagem
              source={{ uri: item.imagem }} />
            <TextoTitulo>{item.titulo}</TextoTitulo>
            <NPessoas>{`${item.pessoas} salvos`}</NPessoas>
          </FlatListContainer>
        )}
      />
    </>
  );
}
