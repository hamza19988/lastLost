import React, { useState } from "react";
import { View, StyleSheet, FlatList, Modal } from "react-native";
import { Text, Button, Input, ListItem } from "react-native-elements";
import moment from "moment";

const requestsData = [
  { id: 1, reason: "Vacation", date: "2022-06-01", days: 3, status: "Pending" },
  {
    id: 2,
    reason: "Personal",
    date: "2022-08-15",
    days: 1,
    status: "Approved",
  },
  {
    id: 3,
    reason: "Sick leave",
    date: "2022-09-07",
    days: 2,
    status: "Declined",
  },
];

const Vacation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newRequestReason, setNewRequestReason] = useState("");
  const [newRequestDate, setNewRequestDate] = useState("");
  const [newRequestDays, setNewRequestDays] = useState("");
  const [requests, setRequests] = useState(requestsData);

  const handleCreateRequest = () => {
    const newRequest = {
      id: requests.length + 1,
      reason: newRequestReason,
      date: newRequestDate,
      days: newRequestDays,
      status: "Pending",
    };
    setRequests([...requests, newRequest]);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text h4 style={styles.title}>
        Vacation Requests
      </Text>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            bottomDivider
            containerStyle={[
              styles.listItem,
              item.status === "Approved" && styles.approvedListItem,
              item.status === "Declined" && styles.declinedListItem,
            ]}
          >
            <ListItem.Content>
              <ListItem.Title style={styles.listItemTitle}>
                {item.reason}
              </ListItem.Title>
              <View style={styles.listItemDetails}>
                <ListItem.Subtitle style={styles.listItemSubtitle}>
                  {moment(item.date).format("MMMM Do YYYY")}
                </ListItem.Subtitle>
                <Text style={styles.listItemDays}>{item.days} days</Text>
              </View>
            </ListItem.Content>
            <Text
              style={[
                styles.status,
                item.status === "Approved" && styles.approvedStatus,
                item.status === "Declined" && styles.declinedStatus,
              ]}
            >
              {item.status}
            </Text>
          </ListItem>
        )}
      />
      <Button
        title="New Request"
        onPress={() => setModalVisible(true)}
        buttonStyle={styles.newRequestButton}
        titleStyle={styles.newRequestButtonText}
      />
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text h4 style={styles.modalTitle}>
            New Request
          </Text>
          <Input
            label="Reason"
            placeholder="Enter reason"
            value={newRequestReason}
            onChangeText={(text) => setNewRequestReason(text)}
            containerStyle={styles.modalInput}
          />
          <Input
            label="Date"
            placeholder="Enter date (YYYY-MM-DD)"
            value={newRequestDate}
            onChangeText={(text) => setNewRequestDate(text)}
            containerStyle={styles.modalInput}
          />
          <Input
            label="Number of Days"
            placeholder="Enter number of days"
            value={newRequestDays}
            onChangeText={(text) => setNewRequestDays(text)}
            keyboardType="numeric"
            containerStyle={styles.modalInput}
          />
          <View style={styles.modalButtonsContainer}>
            <Button
              title="Cancel"
              onPress={() => setModalVisible(false)}
              buttonStyle={styles.modalButton}
              titleStyle={styles.modalButtonText}
            />
            <Button
              title="Create"
              onPress={handleCreateRequest}
              buttonStyle={[styles.modalButton, styles.createButton]}
              titleStyle={[styles.modalButtonText, styles.createButtonText]}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  listItem: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  approvedListItem: {
    backgroundColor: "#c8f7c5",
  },
  declinedListItem: {
    backgroundColor: "#ffd8d8",
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  listItemDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  listItemSubtitle: {
    marginRight: 10,
  },
  listItemDays: {
    fontWeight: "bold",
  },
  status: {
    marginLeft: "auto",
    fontWeight: "bold",
  },
  approvedStatus: {
    color: "#22bb33",
  },
  declinedStatus: {
    color: "#bb2124",
  },
  newRequestButton: {
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#4da6ff",
  },
  newRequestButtonText: {
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  modalTitle: {
    marginBottom: 20,
    textAlign: "center",
  },
  modalInput: {
    marginBottom: 20,
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalButton: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
  modalButtonText: {
    fontWeight: "bold",
    color: "#666",
  },
  createButton: {
    backgroundColor: "#4da6ff",
  },
  createButtonText: {
    color: "#fff",
  },
});

export default Vacation;
