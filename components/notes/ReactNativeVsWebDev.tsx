import { ScrollView } from "react-native";
import TitleText from "../shared/Title";
import NotesText from "./shared/NotesText";
import NotesTextContainer from "./shared/NotesTextContainer";

const ReactNativeVsWebDev = () => {
  return (
    <ScrollView>
      <TitleText>Herausforderungen App Vs. Web Entwicklung</TitleText>
      <NotesTextContainer>
        <NotesText isBold>App-Entwicklung:</NotesText>
        <NotesText>
          Unterschiedliche Betriebssysteme (iOS, Android) erfordern oft
          plattformspezifische Anpassungen.
        </NotesText>
        <NotesText>
          App-Updates müssen über den App Store oder Google Play Store verteilt
          werden, was zeitaufwändig sein kann.
        </NotesText>
        <NotesText>
          Höhere Anforderungen an Performance, da Apps oft offline oder
          ressourcenintensive Funktionen haben.
        </NotesText>
        <NotesText isBold>Web-Entwicklung:</NotesText>
        <NotesText>
          Unterschiedliche Browser und Geräte erfordern umfassende
          Kompatibilitätsprüfungen.
        </NotesText>
        <NotesText>
          Keine native Nutzung von Geräten wie Kamera oder GPS ohne zusätzliche
          APIs oder Frameworks.
        </NotesText>
        <NotesText>
          Performance kann bei sehr komplexen Webanwendungen im Vergleich zu
          nativen Apps eingeschränkt sein.
        </NotesText>
      </NotesTextContainer>
    </ScrollView>
  );
};

export default ReactNativeVsWebDev;
