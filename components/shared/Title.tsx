import { StyleSheet, Text } from "react-native";

const TitleText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Text style={titleStyle.titleText}>{children}</Text>;
};

const titleStyle = StyleSheet.create({
  titleText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default TitleText;
