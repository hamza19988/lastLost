import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AdminHomePage = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Ionicons name="ios-person" size={80} color="#000" />
      <Text style={styles.header}>Welcome Admin</Text>
    </View>
    <View style={styles.actionsContainer}>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate("Manage Users")}
      >
        <Ionicons name="ios-people" size={40} color="#FFF" />
        <Text style={styles.actionText}>Manage Users</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate("Manage Products")}
      >
        <Ionicons name="ios-cart" size={40} color="#FFF" />
        <Text style={styles.actionText}>Manage Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Ionicons name="bar-chart" size={40} color="#FFF" />
        <Text style={styles.actionText}>Dashboard</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  actionsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 100,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#0084FF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default AdminHomePage;
