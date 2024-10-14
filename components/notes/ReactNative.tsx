import { ScrollView } from "react-native";
import TitleText from "../shared/Title";
import NotesText from "./shared/NotesText";
import NotesTextContainer from "./shared/NotesTextContainer";

const ReactNative = () => {
  return (
    <ScrollView>
      <TitleText>Wie funktioniert React Native?</TitleText>
      <NotesTextContainer>
        <NotesText>
          React Native verwendet JavaScript, um mobile Apps zu entwickeln, die
          auf iOS und Android laufen.
        </NotesText>
        <NotesText>
          Der JavaScript-Code wird von einer "Brücke" in native UI-Komponenten
          umgewandelt.
        </NotesText>
        <NotesText>
          Diese "Brücke" ermöglicht die Kommunikation zwischen dem
          JavaScript-Code und den nativen Plattformen (iOS/Android).
        </NotesText>
        <NotesText isBold>React-Komponenten:</NotesText>
        <NotesText>
          Entwickler schreiben die Benutzeroberfläche mit React-Komponenten, die
          von React Native in native UI-Elemente übersetzt werden.
        </NotesText>
        <NotesText isBold>Rendering:</NotesText>
        <NotesText>
          Die App führt JavaScript in einem separaten Thread aus und interagiert
          über die Brücke mit dem Haupt-UI-Thread der nativen Plattform.
        </NotesText>
        <NotesText isBold>Vorteil:</NotesText>
        <NotesText>
          Dadurch wird eine plattformübergreifende Entwicklung ermöglicht,
          während trotzdem native Performance und Optik beibehalten werden.
        </NotesText>
      </NotesTextContainer>
    </ScrollView>
  );
};

export default ReactNative;
