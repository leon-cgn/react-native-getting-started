import { ScrollView } from "react-native";
import TitleText from "../shared/Title";
import NotesText from "./shared/NotesText";
import NotesTextContainer from "./shared/NotesTextContainer";

const NativeVsCrossplattform = () => {
  return (
    <ScrollView>
      <TitleText>OS für Smartphones</TitleText>
      <NotesTextContainer>
        <NotesText>
          Es gibt zwei Hauptbetriebssysteme (OS) für mobile Geräte:
        </NotesText>
        <NotesText>
          1. <NotesText isBold={true}>iOS:</NotesText> Wird auf Apple-Geräten
          (iPhone, iPad) verwendet.
        </NotesText>
        <NotesText>
          2. <NotesText isBold={true}>Android:</NotesText> Wird auf Geräten
          vieler Hersteller (Samsung, Google, etc.) genutzt.
        </NotesText>
        <NotesText>
          <NotesText isBold={true}>Nativ</NotesText> bedeutet, dass eine App
          speziell für ein Betriebssystem entwickelt wird, entweder in Swift
          (für iOS) oder Kotlin/Java (für Android). Diese Apps nutzen die vollen
          Fähigkeiten des jeweiligen Geräts, bieten aber keine
          plattformübergreifende Nutzung.
        </NotesText>
        <NotesText>
          <NotesText isBold={true}>Cross-Plattform</NotesText> Entwicklung (z.
          B. mit React Native) ermöglicht es, eine App für mehrere
          Betriebssysteme gleichzeitig zu erstellen, ohne den Code doppelt
          schreiben zu müssen.
        </NotesText>
      </NotesTextContainer>
    </ScrollView>
  );
};

export default NativeVsCrossplattform;
