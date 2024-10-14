import { StyleSheet, View } from "react-native";

const NotesTextContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <View style={containerStyle.container}>{children}</View>;
};

const containerStyle = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
  },
});

export default NotesTextContainer;
