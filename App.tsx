import { Dimensions, LogBox, SafeAreaView, View } from "react-native";
import Routes from "./src/routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const { width, height } = Dimensions.get("screen");

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
        <StatusBar style="auto" />
        <View style={{ height: height / 26 ,}}/>
        <Routes />
      </SafeAreaView>
    </>
  );
}
