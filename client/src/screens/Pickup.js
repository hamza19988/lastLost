import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FAB } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const PickupScreen = () => {
  const [users, setUsers] = useState([
    { id: '10202565', name: 'Hamza Abidi', pickupFrom: 'Denden', phoneNumber: '56081865' },
    { id: '16584845', name: 'Eya ben abdelkader', pickupFrom: 'Bardo', phoneNumber: '53013662' },
    { id: '15246475', name: 'Ali Ben Ali', pickupFrom: 'Gammarth', phoneNumber: '56687453' },
    { id: '45698745', name: 'Fatma Ben Ammar', pickupFrom: 'Lac',  phoneNumber: '50236985' }
  ]);
  const [selectedpickupFrom, setSelectedpickupFrom] = useState('');

  const renderItem = ({ item }) => {
    const handleCallPress = () => {
      Linking.openURL(`tel:${item.phoneNumber}`);
    };

    return (
      <View style={styles.item}>
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.pickupFrom}>Pickup from: {item.pickupFrom}</Text>
          <Text style={styles.pickupDate}>Pickup Date: {item.pickupDate}</Text>
        </View>
        <TouchableOpacity onPress={handleCallPress} style={styles.callButton}>
          <Text style={styles.callButtonText}>Call</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const filterUsersBypickupFrom = () => {
    if (selectedpickupFrom === '') {
      return users;
    } else {
      return users.filter(user => user.pickupFrom === selectedpickupFrom);
    }
  }

  const today = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reserved Users</Text>
      <Text style={styles.date}>for today: {today}</Text>
      <Picker
        selectedValue={selectedpickupFrom}
        onValueChange={(itemValue) => setSelectedpickupFrom(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="ALL Destinations" value="" />
        <Picker.Item label="La Marsa" value="La Marsa" />
        <Picker.Item label="Le Kram" value="Le Kram" />
        <Picker.Item label="Gammarth" value="Gammarth" />
        <Picker.Item label="Carthage" value="Carthage" />
      </Picker>
      <FlatList
        data={filterUsersBypickupFrom()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <FAB
        style={styles.fab}
        icon="download"
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#f2f2f2',
  padding: 20,
  marginTop: 80,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    color: '#666',
  },
  header: {
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 20,
  color: '#003366',
  },
  list: {
  flexGrow: 1,
  },
  item: {
  backgroundColor: '#fff',
  paddingHorizontal: 20,
  paddingVertical: 15,
  marginBottom: 10,
  borderRadius: 5,
  elevation: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  },
  id: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#003366',
  marginRight: 10,
  },
  name: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#003366',
  flex: 1,
  },
  pickupFrom: {
  fontSize: 14,
  color: '#666',
  marginBottom: 5,
  flex: 1,
  },
  description: {
  fontSize: 14,
  color: '#666',
  flex: 1,
  },
  callButton: {
  backgroundColor: '#2196F3',
  borderRadius: 5,
  paddingVertical: 8,
  paddingHorizontal: 15,
  },
  callButtonText: {
  color: '#fff',
  fontSize: 14,
  },
  fab: {
  position: 'absolute',
  margin: 16,
  right: 0,
  bottom: 0,
  },
  pickerContainer: {
  marginVertical: 10,
  },
  pickerLabel: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#003366',
  marginBottom: 10,
  },
  picker: {
  borderWidth: 1,
  borderColor: '#666',
  borderRadius: 5,
  paddingHorizontal: 5,
  paddingVertical: 3,
  backgroundColor: '#fff',
  },
  });
export default PickupScreen;
