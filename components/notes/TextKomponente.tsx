import { ScrollView } from "react-native";
import TitleText from "../shared/Title";
import NotesText from "./shared/NotesText";
import NotesTextContainer from "./shared/NotesTextContainer";

const TextKomponente = () => {
  return (
    <ScrollView>
      <TitleText>Beispiel: Text Komponente</TitleText>
      <NotesTextContainer>
        <NotesText>
          Was macht React Native aus einem &lt;Text&gt; Komponent?
        </NotesText>
        <NotesText>
          In React Native wird ein &lt;Text&gt; Komponent in eine native
          Text-Komponente der jeweiligen Plattform umgewandelt.
        </NotesText>
        <NotesText>
          Auf iOS wird &lt;Text&gt; in eine native iOS-Komponente wie UILabel
          übersetzt.
        </NotesText>
        <NotesText>
          Auf Android wird &lt;Text&gt; in eine native Android-Komponente wie
          TextView übersetzt.
        </NotesText>
        <NotesText>
          Das bedeutet, dass der &lt;Text&gt; Komponent die
          Plattform-spezifische Darstellung und Interaktion übernimmt, während
          der Entwickler weiterhin JavaScript und React verwendet.
        </NotesText>
        <NotesText>
          Die Formatierung und Funktionalität, wie Schriftgröße, Farbe oder
          Textausrichtung, werden in React Native über StyleSheets definiert und
          dann in native Eigenschaften der jeweiligen Plattform übersetzt.
        </NotesText>
      </NotesTextContainer>
    </ScrollView>
  );
};

export default TextKomponente;
