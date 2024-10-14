import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const KowalskiImage = require("../../assets/images/kowalski-noted.jpeg");

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={KowalskiImage} contentFit="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "80%",
  },
});
