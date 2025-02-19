import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import { authService } from '../../src/services/auth';

export default function HomeScreen() {
  const handleLogout = async () => {
    try {
      await authService.logout();
      router.replace('/');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SalesProAI</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
}); 