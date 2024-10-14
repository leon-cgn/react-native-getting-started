import AppVsWebsite from "@/components/notes/AppVsWebsite";
import ExkursButtonSnack from "@/components/notes/ExkursButtonSnack";
import Expo from "@/components/notes/Expo";
import NativeVsCrossplattform from "@/components/notes/NativeVsCrossplattform";
import ReactNative from "@/components/notes/ReactNative";
import ReactNativeVsFlutter from "@/components/notes/ReactNativeVsFlutter";
import ReactNativeVsWebDev from "@/components/notes/ReactNativeVsWebDev";
import TextKomponente from "@/components/notes/TextKomponente";
import { StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        <AppVsWebsite key="1" />
        <NativeVsCrossplattform key="2" />
        <ReactNativeVsFlutter key="3" />
        <ReactNativeVsWebDev key="4" />
        <ReactNative key="5" />
        <Expo key="6" />
        <TextKomponente key="7" />
        <ExkursButtonSnack key="8" />
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    padding: 8,
  },
});
