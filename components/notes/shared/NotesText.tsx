import { StyleSheet, Text } from "react-native";

interface NotesTextProps {
  children: React.ReactNode;
  isBold?: boolean;
}

const NotesText: React.FC<NotesTextProps> = ({ children, isBold }) => {
  return (
    <Text style={[notesStyle.text, isBold ? notesStyle.bold : null]}>
      {children}
    </Text>
  );
};

const notesStyle = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 20,
    marginTop: 12,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default NotesText;
