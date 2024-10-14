import { ScrollView, View } from "react-native";
import TitleText from "../shared/Title";
import NotesText from "./shared/NotesText";
import NotesTextContainer from "./shared/NotesTextContainer";

const AppVsWebsite = () => {
  return (
    <ScrollView>
      <TitleText>Was ist eine App? (VS. Website)</TitleText>
      <NotesTextContainer>
        <NotesText>
          Eine App ist ein Programm, das direkt auf einem Smartphone oder Tablet
          läuft, während eine Website im Browser über das Internet aufgerufen
          wird. Apps können oft auch offline genutzt werden.
        </NotesText>
        <View
          style={{
            marginTop: 80,
            alignItems: "center",
          }}
        >
          <NotesText>Swipe -&gt;</NotesText>
        </View>
      </NotesTextContainer>
    </ScrollView>
  );
};

export default AppVsWebsite;
