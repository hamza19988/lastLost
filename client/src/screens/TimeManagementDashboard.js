import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";

const TimeManagementDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddAppointment = () => {
    const newAppointment = {
      id: appointments.length + 1,
      title,
      description,
      time,
    };
    setAppointments([...appointments, newAppointment]);
    setTitle("");
    setDescription("");
    setTime(new Date());
    setModalVisible(false);
  };

  const handleEditAppointment = (id) => {
    // find the appointment by id
    const appointmentToEdit = appointments.find(
      (appointment) => appointment.id === id
    );

    // update the appointment properties
    appointmentToEdit.title = title;
    appointmentToEdit.description = description;
    appointmentToEdit.time = time;

    // update the appointments state
    const updatedAppointments = appointments.map((appointment) =>
      appointment.id === id ? appointmentToEdit : appointment
    );
    setAppointments(updatedAppointments);

    // clear the form fields
    setTitle("");
    setDescription("");
    setTime(new Date());
    setModalVisible(false);
  };

  const handleViewSchedule = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleTimePickerConfirm = (selectedDate) => {
    setTime(selectedDate);
    setIsDatePickerVisible(false);
  };

  const handleTimePickerCancel = () => {
    setIsDatePickerVisible(false);
  };

  const renderAppointmentItem = ({ item }) => {
    const formattedTime = format(new Date(item.time), "hh:mm a");
    return (
      <TouchableOpacity style={styles.appointmentItem}>
        <Text style={styles.appointmentTitle}>{item.title}</Text>
        <Text style={styles.appointmentTime}>{formattedTime}</Text>
      </TouchableOpacity>
    );
  };

  const renderDayColumn = (day) => {
    const date = new Date(day);
    const formattedDate = format(date, "dd MMMM");
    const dayOfWeek = format(date, "EEE");

    return (
      <View style={styles.dayColumn}>
        <Text style={styles.dayTitle}>{formattedDate}</Text>
        <Text style={styles.dayOfWeek}>{dayOfWeek}</Text>
      </View>
    );
  };

  const renderScheduleItem = ({ item }) => {
    const dayColumns = item.days.map(renderDayColumn);

    return (
      <View style={styles.scheduleItem}>
        <View style={styles.scheduleItemInfo}>
          <Text style={styles.scheduleItemTitle}>{item.title}</Text>
          <Text style={styles.scheduleItemTime}>
            {format(new Date(item.time), "hh:mm a")}
          </Text>
        </View>
        <View style={styles.scheduleItemDays}>{dayColumns}</View>
      </View>
    );
  };

  const scheduleData = [
    {
      id: 1,
      title: "Meeting with John",
      time: new Date("2023-02-20T11:00"),
      days: [
        new Date("2023-02-20"),
        new Date("2023-02-22"),
        new Date("2023-02-24"),
      ],
    },
    {
      id: 2,
      title: "Gym workout",
      time: new Date("2023-02-22T06:00"),
      days: [
        new Date("2023-02-22"),
        new Date("2023-02-24"),
        new Date("2023-02-26"),
      ],
    },
    {
      id: 3,
      title: "Dinner with friends",
      time: new Date("2023-02-23T20:00"),
      days: [
        new Date("2023-02-23"),
        new Date("2023-02-25"),
        new Date("2023-02-27"),
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleModalClose}
      >
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Schedule</Text>
            <Button title="Close" onPress={handleModalClose} />
          </View>
          <View style={styles.modalContent}>
            <FlatList
              data={scheduleData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderScheduleItem}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.appointmentForm}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TouchableOpacity
          style={styles.timeInput}
          onPress={() => setIsDatePickerVisible(true)}
        >
          <Text style={styles.timeInputText}>
            {format(new Date(time), "hh:mm a")}
          </Text>
        </TouchableOpacity>
        <Button
          title="Add Appointment"
          onPress={handleAddAppointment}
          disabled={!title || !description}
        />
      </View>
      <View style={styles.appointmentList}>
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderAppointmentItem}
        />
      </View>
      <Button title="View Schedule" onPress={handleViewSchedule} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        date={time}
        onConfirm={handleTimePickerConfirm}
        onCancel={handleTimePickerCancel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  appointmentForm: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    marginBottom: 8,
  },
  timeInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    justifyContent: "center",
    marginBottom: 8,
  },
  timeInputText: {
    fontSize: 16,
  },
  modal: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalContent: {
    flex: 1,
    padding: 16,
  },
  scheduleItem: {
    backgroundColor: "#f4f4f4",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  scheduleItemInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  scheduleItemTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 8,
  },
  scheduleItemTime: {
    fontSize: 16,
    color: "#777",
  },
  scheduleItemDays: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dayColumn: {
    alignItems: "center",
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  dayOfWeek: {
    fontSize: 16,
    color: "#777",
  },
  appointmentItem: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  appointmentTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  appointmentTime: {
    fontSize: 16,
    color: "#777",
  },
});

export default TimeManagementDashboard;
