import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

const ContactsScreen = () => {
  const [contactsData, setContactsData] = useState([
    { id: '1', name: 'Mutabazi Keza', phoneNumber: '0783048867' },
    { id: '2', name: 'Hirwa Jim', phoneNumber: '0786788912' },
    { id: '3', name: 'Singiza Shami', phoneNumber: '0799345678' },
    // Add more contacts as needed
  ]);
  const [newContactName, setNewContactName] = useState('');
  const [newContactPhoneNumber, setNewContactPhoneNumber] = useState('');

  const handleNameChange = (id, newName) => {
    setContactsData(prevData =>
      prevData.map(contact =>
        contact.id === id ? { ...contact, name: newName } : contact
      )
    );
  };

  const handlePhoneNumberChange = (id, newPhoneNumber) => {
    setContactsData(prevData =>
      prevData.map(contact =>
        contact.id === id ? { ...contact, phoneNumber: newPhoneNumber } : contact
      )
    );
  };

  const handleAddContact = () => {
    const newContact = {
      id: String(contactsData.length + 1),
      name: newContactName,
      phoneNumber: newContactPhoneNumber,
    };
    setContactsData(prevData => [...prevData, newContact]);
    setNewContactName('');
    setNewContactPhoneNumber('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <TextInput
        style={styles.contactNameInput}
        value={item.name}
        onChangeText={newName => handleNameChange(item.id, newName)}
        placeholder="Name"
      />
      <TextInput
        style={styles.contactPhoneNumberInput}
        value={item.phoneNumber}
        onChangeText={newPhoneNumber => handlePhoneNumberChange(item.id, newPhoneNumber)}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contactsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.contactList}
      />
      <View style={styles.addContactContainer}>
        <TextInput
          style={styles.input}
          value={newContactName}
          onChangeText={text => setNewContactName(text)}
          placeholder="Enter Name"
        />
        <TextInput
          style={styles.input}
          value={newContactPhoneNumber}
          onChangeText={text => setNewContactPhoneNumber(text)}
          placeholder="Enter Phone Number"
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddContact}>
          <Text style={styles.addButtonLabel}>Add Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
  },
  contactList: {
    paddingHorizontal: 20,
  },
  contactItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  contactNameInput: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactPhoneNumberInput: {
    fontSize: 16,
    color: '#888',
  },
  addContactContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#90EE90',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ContactsScreen;
