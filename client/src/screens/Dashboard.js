import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ChartPie from "../Components/ChartPie";

const data = [
  { title: "Bytedance" },
  { title: "Asus" },
  { title: "C-Discount" },
  { title: "HP",},
  { title: "HP Canada" },
  { title: "Hub Telecom" },
  { title: "KIWI" },
  { title: "Orange Pro",},
  { title: "Sirus",},
  { title: "Xerox",},
];

const Dashboard = () => {
  const [filter, setFilter] = useState("");

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.title}
      style={styles.gridItem}
      onPress={() => setFilter(item.title.toLowerCase())}
    >
      <Text style={styles.gridTitle}>{item.title}</Text>
      <Text style={styles.gridValue}>{item.value}</Text>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Month</Text>
      <Text style={styles.headerText}>{filter.charAt(0).toUpperCase() + filter.slice(1)}</Text>
      <Text style={styles.headerText}>FTE</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>All Operations</Text>
      <ChartPie />
      <View style={styles.gridContainer}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.title}
            style={styles.gridItem}
            onPress={() => setFilter(item.title.toLowerCase())}
          >
            <Text style={styles.gridTitle}>{item.title}</Text>
            <Text style={styles.gridValue}>{item.value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  
  gridContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
  },
  gridItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  gridValue: {
    fontSize: 4,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Dashboard;
