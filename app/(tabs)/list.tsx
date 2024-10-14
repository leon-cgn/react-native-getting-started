import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

// TODO
// 1. data mit useState in einen react state halten
// 2. TextInput und Button einbauen um ein Item in den state hinzuzufügen
// 3. Mit react-native-gesture-handler ein Item mittels swipe-nach-links löschen
// 4. Schön stylen und Überschrift hinzufügen
// 5. Anzahl der Items in Überschrift anzeigen

type ListItem = {
  id: string;
  text: string;
};

const ListView: React.FC = () => {
  // Hardcoded data
  const data: ListItem[] = [
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    { id: "3", text: "Item 3" },
    { id: "4", text: "Item 4" },
    { id: "5", text: "Item 5" },
  ];

  const renderItem = ({ item }: { item: ListItem }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: "lightgrey",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
  },
});

export default ListView;
