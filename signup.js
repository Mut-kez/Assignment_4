// SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleSignup = async () => {
    // Perform form validation
    if (!username || !password || !confirmPassword) {
      setErrorMessage('Please enter all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Perform signup logic here
    // For demonstration purposes, we'll save the username and password to AsyncStorage
    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      navigation.navigate('Login'); // Navigate to login screen after successful signup
    } catch (error) {
      console.error('Error signing up:', error);
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Signup</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={handleUsernameChange}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          style={styles.input}
        />
      </View>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <TouchableOpacity onPress={handleSignup} style={styles.signupButton}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 40,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#800000', // Dark Red (#800000) for the logo
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#000000',
  },
  errorMessage: {
    color: '#e63946', // Red (#e63946) for the error message
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: '#800000', // Dark Red (#800000) for the "Signup" button
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SignupScreen;
