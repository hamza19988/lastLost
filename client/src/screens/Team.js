import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Communications from 'react-native-communications';

const members = [
  {
    id: "1",
    name: "Hamza Abidi",
    role: "Part Time",
    email: "hamza@concentrix.com",
    avatar: require("../../assets/images/thumb-56.jpg"),
    phone: "56081865",
  },
  {
    id: "2",
    name: "Eya ben Abdelkader",
    role: "Full Time",
    email: "Eyaader@concentrix.com",
    avatar: require("../../assets/images/thumb.jpg"),
    phone: "53013662",
  },
  {
    id: "3",
    name: "Bob Smith",
    role: "Full Time",
    email: "bobsmith@example.com",
    avatar: require("../../assets/images/thumb-56.jpg"),
    phone: "3456789012",
  },
  {
    id: "4",
    name: "Amine Ben Salah",
    role: "Full Time",
    email: "aminebensalah@example.com",
    avatar: require("../../assets/images/thumb-56.jpg"),
    phone: "22334455",
  },
  {
    id: "5",
    name: "Nadia Sfaxi",
    role: "Part Time",
    email: "nadiasfaxi@example.com",
    avatar: require("../../assets/images/thumb.jpg"),
    phone: "11223344",
  },
  {
    id: "6",
    name: "Hichem Ben Ahmed",
    role: "Full Time",
    email: "hichembahmed@example.com",
    avatar: require("../../assets/images/thumb-56.jpg"),
    phone: "66778899",
  },
  {
    id: "7",
    name: "Mariem Ben Ali",
    role: "Full Time",
    email: "mariembennali@example.com",
    avatar: require("../../assets/images/thumb.jpg"),
    phone: "44332211",
  },
  {
    id: "8",
    name: "Karim Khaldi",
    role: "Part Time",
    email: "karimkhaldi@example.com",
    avatar: require("../../assets/images/thumb-56.jpg"),
    phone: "55443322",
  },
  {
    id: "9",
    name: "Asma Gabsi",
    role: "Full Time",
    email: "asmagabsi@example.com",
    avatar: require("../../assets/images/thumb.jpg"),
    phone: "88990011",
  },
  {
    id: "10",
    name: "Wassim Bouaziz",
    role: "Full Time",
    email: "wassimbouaziz@example.com",
    avatar: require("../../assets/images/thumb-56.jpg"),
    phone: "11223344",
  }
];

const Team = () => {
  const renderMember = ({ item }) => {
    const handleCall = () => {
      Communications.phonecall(item.phone, true);
    };

    return (
      <View style={styles.memberContainer}>
        <Image source={item.avatar} style={styles.memberAvatar} />
        <View style={styles.memberTextContainer}>
          <Text style={styles.memberName}>{item.name}</Text>
          <Text style={styles.memberRole}>{item.role}</Text>
          <Text style={styles.memberEmail}>{item.email}</Text>
        </View>
        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
          <Text style={styles.callButtonText}>Call</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={members}
        renderItem={renderMember}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  memberContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7FAFC",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  memberAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  memberTextContainer: {
    flex: 1,
  },
  memberName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2D3748",
  },
  memberRole: {
    fontSize: 14,
    color: "#718096",
    marginBottom: 5,
  },
  memberEmail: {
    fontSize: 11,
    color: "#718096",
  },
  callButton: {
    backgroundColor: "#3182CE",
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  callButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Team;
