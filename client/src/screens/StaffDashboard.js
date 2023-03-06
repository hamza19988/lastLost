import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const apartmentData = [
  {
    id: 1,
    title: "Asus",
    iconName: "home",
    employees: [
      { id: 1, name: "Employee 1", role: "Role 1" },
      { id: 2, name: "Employee 2", role: "Role 2" },
    ],
  },
  {
    id: 2,
    title: "Bytedance",
    iconName: "home",
    employees: [
      { id: 1, name: "Chaima Ayadi", role: "Operation Manager" },
      { id: 2, name: "Hessine Annagui", role: "Operation Manager" },
      { id: 3, name: "Amjed Kefi", role: "Operation Manager" },
      { id: 4, name: "Wadii Ounissi", role: "Operation Manager" },
      { id: 5, name: "Mohamed Mokhtar Mejri", role: "Senior manager " },
      { id: 6, name: "Abdelhakim chebi", role: "Senior Manager" },
      { id: 7, name: "Mohamed Ali ben Lhaj Sameaa", role: "Senior Manager" },
      { id: 8, name: "Fares Ben Ali", role: "Senior Manager" },

    ],
  },
  {
    id: 3,
    title: "C-Discount",
    iconName: "home",
    employees: [
      { id: 1, name: "Employee 1", role: "Role 1" },
      { id: 2, name: "Employee 2", role: "Role 2" },
      { id: 3, name: "Employee 3", role: "Role 3" },
      { id: 4, name: "Employee 4", role: "Role 4" },
    ],
  },
  {
    id: 4,
    title: "HP",
    iconName: "home",
    employees: [
      { id: 1, name: "Employee 1", role: "Role 1" },
      { id: 2, name: "Employee 2", role: "Role 2" },
    ],
  },
  {
    id: 5,
    title: "HP canada",
    iconName: "home",
    employees: [
      { id: 1, name: "Employee 1", role: "Role 1" },
      { id: 2, name: "Employee 2", role: "Role 2" },
      { id: 3, name: "Employee 3", role: "Role 3" },
    ],
  },
  {
    id: 6,
    title: "Hub Telecom",
    iconName: "home",
    employees: [
      { id: 1, name: "Employee 1", role: "Role 1" },
      { id: 2, name: "Employee 2", role: "Role 2" },
      { id: 3, name: "Employee 3", role: "Role 3" },
    ],
  },
  {
    id: 7,
    title: "Kiwi",
    iconName: "home",
    employees: [
      { id: 1, name: "Employee 1", role: "Role 1" },
    ],
  },
  {
    id: 8,
    title: "Siruis",
    iconName: "home",
    employees: [
      { id: 1, name: "Employee 1", role: "Role 1" },
      { id: 2, name: "Employee 2", role: "Role 2" },
      { id: 3, name: "Employee 3", role: "Role 3" },
    ],
  },
  {
    id: 7,
    title: "Xerox",
    iconName: "home",
    employees: [
      { id: 1, name: "Employee 1", role: "Role 1" },
      { id: 2, name: "Employee 2", role: "Role 2" },
      { id: 3, name: "Employee 3", role: "Role 3" },
    ],
  },
  {
    id: 9,
    title: "Orange Pro",
    iconName: "home",
    employees: [
      { id: 1, name: "Employee 1", role: "Role 1" },
      { id: 2, name: "Employee 2", role: "Role 2" },
      { id: 3, name: "Employee 3", role: "Role 3" },
    ],
  },
];

const StaffDashboard = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.employeeRow}
      onPress={() => console.log(`Selected employee: ${item.name}`)}
    >
      <View style={styles.employeeCell}>
        <Text style={styles.employeeName}>{item.name}</Text>
      </View>
      <View style={styles.employeeCell}>
        <Text style={styles.employeeRole}>{item.role}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderApartmentButton = ({ item }) => (
    <TouchableOpacity
      style={styles.apartmentButton}
      onPress={() => {
        setSelectedApartment(item);
        setModalVisible(true);
      }}
    >
      <View style={styles.apartmentIcon}>
        <Ionicons name={item.iconName} size={32} color="white" />
      </View>
      <Text style={styles.apartmentTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={apartmentData}
        renderItem={renderApartmentButton}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.apartmentButtonContainer}
      />

      {selectedApartment && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={32} color="black" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>{selectedApartment.title}</Text>
            </View>
            <FlatList
              data={selectedApartment.employees}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  apartmentButtonContainer: {
    justifyContent: "space-between",
  },
  apartmentButton: {
    backgroundColor: "#4a69bb",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: "47%",
    alignItems: "center",
  },
  apartmentIcon: {
    backgroundColor: "grey",
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
  },
  apartmentTitle: {
    color: "white",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    marginTop:50,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  employeeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  employeeCell: {
    width: "50%",
  },
  employeeName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  employeeRole: {
    fontSize: 14,
    color: "grey",
    paddingLeft:24,
  },
});
export default StaffDashboard;
