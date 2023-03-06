import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
} from "react-native";

const requests = [
  {
    id: "1",
    title: "ID: 10202545",
    date: "Shift 7H",
    status: "pending",
  },
  {
    id: "2",
    title: "ID: 10202545",
    date: "Shift 7H",
    status: "approved",
  },
  {
    id: "3",
    title: "ID: 10202545",
    date: "Shift 7H",
    status: "rejected",
  },
];

const Schedulerequest = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [requestsData, setRequestsData] = useState(requests);

  const handleRequestPress = (request) => {
    setSelectedRequest(request);
    setModalVisible(true);
  };

  const handleAcceptRequest = () => {
    const updatedRequests = requestsData.map((request) =>
      request.id === selectedRequest.id
        ? { ...request, status: "approved" }
        : request
    );
    setModalVisible(false);
    setSelectedRequest(null);
    setRequestsData(updatedRequests);
  };

  const handleRejectRequest = () => {
    const updatedRequests = requestsData.map((request) =>
      request.id === selectedRequest.id
        ? { ...request, status: "rejected" }
        : request
    );
    setModalVisible(false);
    setSelectedRequest(null);
    setRequestsData(updatedRequests);
  };

  const renderRequest = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.requestContainer}
        onPress={() => handleRequestPress(item)}
      >
        <Text style={styles.requestTitle}>{item.title}</Text>
        <Text style={styles.requestDate}>{item.date}</Text>
        <Text
          style={[
            styles.requestStatus,
            item.status === "pending"
              ? styles.pendingStatus
              : item.status === "approved"
              ? styles.approvedStatus
              : styles.rejectedStatus,
          ]}
        >
          {item.status}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={requestsData}
        renderItem={renderRequest}
        keyExtractor={(item) => item.id}
      />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedRequest?.title}</Text>
          <Text style={styles.modalDate}>{selectedRequest?.date}</Text>
          <Text style={styles.modalStatus}>{selectedRequest?.status}</Text>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={[styles.modalButton, styles.acceptButton]}
              onPress={handleAcceptRequest}
            >
              <Text style={styles.modalButtonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.rejectButton]}
              onPress={handleRejectRequest}
            >
              <Text style={styles.modalButtonText}>Reject</Text>
            </TouchableOpacity>
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
  },

  requestContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  requestTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  requestDate: {
    color: "#555",
    marginTop: 5,
  },
  requestStatus: {
    alignSelf: "flex-end",
    marginTop: 5,
    fontWeight: "bold",
    textTransform: "capitalize",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
  },
  pendingStatus: {
    backgroundColor: "#ffcc00",
    color: "#fff",
  },
  approvedStatus: {
    backgroundColor: "#00cc00",
    color: "#fff",
  },
  rejectedStatus: {
    backgroundColor: "#cc0000",
    color: "#fff",
  },
  modalContainer: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 20,
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
    marginTop:60 ,
  },
  modalDate: {
    color: "#555",
    marginBottom: 10,
  },
  modalStatus: {
    alignSelf: "flex-end",
    marginTop: 5,
    fontWeight: "bold",
    textTransform: "capitalize",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  modalButton: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
  },
  acceptButton: {
    backgroundColor: "#00cc00",
  },
  rejectButton: {
    backgroundColor: "#cc0000",
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Schedulerequest;
