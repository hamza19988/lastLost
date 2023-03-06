import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const ScheduleInterchangeScreen = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSendRequest = () => {
    if (id && name && email) {
      // send the request to the manager here
      Alert.alert('Success', 'Request sent successfully');
    } else {
      Alert.alert('Error', 'Please fill all the fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Schedule Exchange Request</Text>
      
      <TextInput
        style={styles.input}
        placeholder="ID"
        onChangeText={setId}
        value={id}
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
      />
      <Text style={styles.note}>Please fill it with the data of the person you want to switch with</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSendRequest}
      >
        <Text style={styles.buttonText}>Send Request</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#f2f2f2',
    flex: 1
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 100,
    color: '#003366'
  },
  note: {
    fontSize: 12,
    textAlign: 'left',
    marginBottom: 20,
    color: '#003366'
  },
  input: {
    height: 40,
    borderColor: '#003366',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#003366',
    padding: 10,
    borderRadius: 5,
    marginTop: 40
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  }
});

export default ScheduleInterchangeScreen;
