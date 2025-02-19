import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SalesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sales Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
}); 