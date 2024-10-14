import { ScrollView } from "react-native";
import TitleText from "../shared/Title";
import NotesText from "./shared/NotesText";
import NotesTextContainer from "./shared/NotesTextContainer";

const ExkursButtonSnack = () => {
  return (
    <ScrollView>
      <TitleText>Code: Button in react-native</TitleText>
      <NotesTextContainer>
        <NotesText>
          Kamera öffnen und euen QR-Code scannen (01_Button)
        </NotesText>
        <NotesText>Wir schauen uns zusammen den Code an</NotesText>
      </NotesTextContainer>
    </ScrollView>
  );
};

export default ExkursButtonSnack;
