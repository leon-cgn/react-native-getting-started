import { ScrollView } from "react-native";
import TitleText from "../shared/Title";
import NotesText from "./shared/NotesText";
import NotesTextContainer from "./shared/NotesTextContainer";

const ReactNativeVsFlutter = () => {
  return (
    <ScrollView>
      <TitleText>Cross-plattform frameworks</TitleText>
      <NotesTextContainer>
        <NotesText isBold={true}>React Native:</NotesText>
        <NotesText>
          React Native wurde 2015 von Facebook entwickelt und ermöglicht die
          plattformübergreifende Entwicklung von mobilen Apps mit JavaScript und
          React.
        </NotesText>
        <NotesText>
          Es verwendet native Komponenten, sodass Apps wie native Anwendungen
          aussehen und sich anfühlen.
        </NotesText>
        <NotesText>Sponsor: Facebook (Meta)</NotesText>
        <NotesText isBold={true}>Flutter:</NotesText>
        <NotesText>
          Flutter wurde 2017 von Google veröffentlicht und ermöglicht ebenfalls
          die plattformübergreifende App-Entwicklung, jedoch mit der
          Programmiersprache Dart.
        </NotesText>
        <NotesText>
          Flutter rendert die Benutzeroberfläche komplett eigenständig und
          bietet daher konsistentes Design auf allen Plattformen.
        </NotesText>
        <NotesText>Sponsor: Google</NotesText>
      </NotesTextContainer>
    </ScrollView>
  );
};

export default ReactNativeVsFlutter;
