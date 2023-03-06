import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

const Transport = () => {
  const [ID, setID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [locationType, setLocationType] = useState(0);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleReserve = () => {
    if (ID && name && email && location && date) {
      // send the reservation request to the transport service here
      Alert.alert("Success", "Reservation made successfully");
    } else {
      Alert.alert("Error", "Please fill all the fields");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transport Reservation</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        onChangeText={setID}
        value={ID}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Location Type:</Text>
        <SegmentedControl
          values={["Pickup", "Give a ride"]}
          selectedIndex={locationType}
          onChange={(event) =>
            setLocationType(event.nativeEvent.selectedSegmentIndex)
          }
          style={styles.segmentedControl}
        />
      </View>

      {locationType === 0 ? (
        <TextInput
          style={styles.input}
          placeholder="Pickup location"
          onChangeText={setLocation}
          value={location}
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder="Destination"
          onChangeText={setLocation}
          value={location}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Date"
        onChangeText={setDate}
        value={date}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleReserve}>
        <Text style={styles.buttonText}>Reserve</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 45,
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 40,
    color: "#003366",
  },
  input: {
    height: 40,
    borderColor: "#003366",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#003366",
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  segmentControlContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  segmentControlItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderColor: "#003366",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  segmentControlItemActive: {
    backgroundColor: "#003366",
  },
  pickerContainer: {
    marginBottom: 20,
  },
  picker: {
    height: 40,
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#003366",
    backgroundColor: "white",
  },
});

export default Transport;
