import { ScrollView } from "react-native";
import TitleText from "../shared/Title";
import NotesText from "./shared/NotesText";
import NotesTextContainer from "./shared/NotesTextContainer";

const Expo = () => {
  return (
    <ScrollView>
      <TitleText>Frameworks (u.a. Expo)</TitleText>
      <NotesTextContainer>
        <NotesText isBold>Frameworks:</NotesText>
        <NotesText>
          Frameworks wie React Native vereinfachen die plattformübergreifende
          App-Entwicklung, indem sie vorgefertigte Werkzeuge und Strukturen
          bereitstellen.
        </NotesText>
        <NotesText>
          Sie ermöglichen es Entwicklern, sich auf die Funktionalität und das
          Design zu konzentrieren, anstatt sich um die technischen Details der
          Plattformen kümmern zu müssen.
        </NotesText>
        <NotesText isBold>Expo:</NotesText>
        <NotesText>
          Expo ist ein Framework und eine Plattform, die auf React Native
          aufbaut. Es bietet Entwicklern vorgefertigte APIs und Werkzeuge, um
          die App-Entwicklung zu beschleunigen.
        </NotesText>
        <NotesText>
          Mit Expo können Entwickler Apps schnell erstellen und testen, ohne
          sich um komplexe native Konfigurationen zu kümmern.
        </NotesText>
        <NotesText>
          Expo vereinfacht den Entwicklungsprozess, indem es eine Reihe von
          nativen Funktionen wie Kamera, Push-Benachrichtigungen und Standort
          bereitstellt, ohne dass man selbst native Code schreiben muss.
        </NotesText>
        <NotesText>
          Es ermöglicht schnelles Testen der App auf einem Gerät oder Emulator,
          ohne Build-Prozesse starten zu müssen.
        </NotesText>
        <NotesText>
          Ideal für kleinere Projekte oder Teams, die eine App ohne komplexe
          native Konfigurationen schnell auf den Markt bringen möchten.
        </NotesText>
      </NotesTextContainer>
    </ScrollView>
  );
};

export default Expo;
