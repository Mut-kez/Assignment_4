import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    // Check if there are saved credentials in AsyncStorage
    retrieveCredentials();
  }, []); // Run only once on component mount

  const retrieveCredentials = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem('username');
      const savedPassword = await AsyncStorage.getItem('password');
      if (savedUsername && savedPassword) {
        setUsername(savedUsername);
        setPassword(savedPassword);
      }
    } catch (error) {
      console.error('Error retrieving credentials:', error);
    }
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    // Perform form validation
    if (!username || !password) {
      setErrorMessage('Please enter a username and password.');
      return;
    }

    // Save credentials to AsyncStorage
    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
    } catch (error) {
      console.error('Error saving credentials:', error);
    }

    // Perform login logic here
    // For demonstration purposes, we'll navigate to the 'Dashboard' screen
    navigation.navigate('Dashboard');

    // Reset the form
    setUsername('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>My App</Text>
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
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={handlePasswordChange}
          style={styles.input}
        />
      </View>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
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
    color: '#90EE90', // Dark Red (#800000) for the logo
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
  loginButton: {
    backgroundColor: '#90EE90', 
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

export default LoginScreen;
