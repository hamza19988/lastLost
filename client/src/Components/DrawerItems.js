import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerItemList } from "@react-navigation/drawer";

const DrawerItem = ({ iconName, label, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
    <View style={styles.drawerItemContent}>
      <Ionicons name={iconName} size={50} color="#71839B" />
      <Text style={styles.drawerItemText}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const DrawerItems = (props) => {
  const { navigation } = props;

  const handleLogOut = () => {
    // perform log out actions here
    // ...
    navigation.navigate("Welcome"); // navigate back to stack screen after log out
  };

  return (
    <View style={styles.drawerContent}>
      <DrawerItemList {...props} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogOut} style={styles.button}>
          <Ionicons name="log-out" size={30} color="#003366" />
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    padding: 20,
    flex: 1,
    position: "relative",
    width: 300, 
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 10,
    marginTop: 20,
    
  },
  drawerItemContent: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  drawerItemText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "500",
    color: "#324054",
  },
  buttonContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 10,
    width: 255, 

  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 200 ,
    height: 45 ,
  },
  buttonText: {
    color: "#003366",
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "500",
  },
});

export default DrawerItems;
