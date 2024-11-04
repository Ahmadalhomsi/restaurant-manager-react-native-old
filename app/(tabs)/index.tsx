import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import axios from 'axios';

const users = require('@/users.json');

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const user = users.find((u : any) => u.username === username);

      if (!user || user.password !== password) {
        setError('Invalid username or password');
        return;
      }

      // Simulate JWT token generation
      const token = `fakeJWTToken_${user.username}`;

      // Store the token in AsyncStorage
      await AsyncStorage.setItem('authToken', token);

      // Redirect the user to the main app screen
      // (you'll need to set up navigation in your app)
      console.log('Logged in successfully');
      
    } catch (err) {
      setError('An error occurred while logging in');
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={styles.inputContainer}
      />
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}
      <Button
        title="Log In"
        onPress={handleLogin}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    marginVertical: 10,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  error: {
    color: 'red',
    marginVertical: 10,
  },
});

export default LoginScreen;